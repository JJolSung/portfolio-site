#!/usr/bin/env node

/**
 * Content validation script
 * Scans i18n JSON files and component source for inappropriate or unauthorized content.
 * Run: node scripts/validate-content.js
 * Exit code 0 = clean, 1 = violation found
 */

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// 1. Blocklist — inappropriate / vulgar words (EN, KO, JA)
//    Patterns are case-insensitive. Add terms as needed.
// ---------------------------------------------------------------------------
const BLOCKLIST = [
  // English
  "fuck",
  "shit",
  "damn",
  "bitch",
  "asshole",
  "dick",
  "pussy",
  "bastard",
  "slut",
  "whore",
  "cunt",
  "nigger",
  "faggot",
  "retard",
  "porn",
  "hentai",
  "xxx",
  // Korean
  "씨발",
  "시발",
  "ㅅㅂ",
  "ㅂㅅ",
  "병신",
  "지랄",
  "개새끼",
  "새끼",
  "미친놈",
  "미친년",
  "창녀",
  "보지",
  "자지",
  "좆",
  "꺼져",
  "닥쳐",
  "느금마",
  // Japanese
  "くそ",
  "クソ",
  "ファック",
  "ちんこ",
  "まんこ",
  "死ね",
  "殺す",
  "きもい",
  "バカ",
  "アホ",
];

const blocklistRegex = new RegExp(BLOCKLIST.join("|"), "i");

// ---------------------------------------------------------------------------
// 2. Allowlist — known-good values for critical fields
// ---------------------------------------------------------------------------
const ALLOWED_TECH_ITEMS = new Set([
  // Frontend
  "Next.js", "React", "Flutter", "TypeScript", "Tailwind CSS", "Dart",
  // Backend
  "Node.js", "Python", "Deno", "Hono", "PostgreSQL", "Prisma",
  // Cloud & Infra
  "Supabase", "Firebase", "Cloudflare", "AWS", "Vercel", "LangChain",
  // Tools
  "Claude Code", "Figma", "Git", "Sentry",
]);

const ALLOWED_DOMAINS = [
  "movatech.org",
  "lohas-resorts.com",
  "github.com",
  "vercel.app",
];

// ---------------------------------------------------------------------------
// 3. Scanning logic
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, "..");
let violations = [];

function addViolation(file, line, message) {
  violations.push({ file: path.relative(ROOT, file), line, message });
}

/** Recursively extract all string values from a JSON object */
function extractStrings(obj, prefix = "") {
  const results = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      results.push({ path, value });
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (typeof item === "string") results.push({ path: `${path}[${i}]`, value: item });
        else if (typeof item === "object" && item !== null) results.push(...extractStrings(item, `${path}[${i}]`));
      });
    } else if (typeof value === "object" && value !== null) {
      results.push(...extractStrings(value, path));
    }
  }
  return results;
}

// --- Check i18n JSON files ---
const i18nDir = path.join(ROOT, "src", "i18n");
const jsonFiles = fs.readdirSync(i18nDir).filter((f) => f.endsWith(".json"));

for (const file of jsonFiles) {
  const filePath = path.join(i18nDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const strings = extractStrings(data);

  for (const { path: jsonPath, value } of strings) {
    // Blocklist check
    const match = value.match(blocklistRegex);
    if (match) {
      addViolation(filePath, jsonPath, `Blocked word detected: "${match[0]}"`);
    }

    // URL validation — only allow known domains
    const urls = value.match(/https?:\/\/[^\s"')]+/g) || [];
    for (const url of urls) {
      const isAllowed = ALLOWED_DOMAINS.some((d) => url.includes(d));
      if (!isAllowed) {
        addViolation(filePath, jsonPath, `Unauthorized URL: ${url}`);
      }
    }
  }
}

// --- Check TechStack component for tampered items ---
const techStackPath = path.join(ROOT, "src", "components", "TechStack.tsx");
if (fs.existsSync(techStackPath)) {
  const content = fs.readFileSync(techStackPath, "utf-8");

  // Extract all quoted strings inside items arrays
  const itemMatches = content.match(/items:\s*\[([^\]]+)\]/g) || [];
  for (const block of itemMatches) {
    const quoted = block.match(/"([^"]+)"/g) || [];
    for (const q of quoted) {
      const item = q.replace(/"/g, "");
      if (!ALLOWED_TECH_ITEMS.has(item)) {
        addViolation(techStackPath, "techCategories.items", `Unauthorized tech item: "${item}"`);
      }
    }
  }

  // Blocklist check on full file
  const match = content.match(blocklistRegex);
  if (match) {
    addViolation(techStackPath, "-", `Blocked word detected: "${match[0]}"`);
  }
}

// --- Check other component files for blocklist ---
const componentsDir = path.join(ROOT, "src", "components");
const componentFiles = fs.readdirSync(componentsDir).filter((f) => f.endsWith(".tsx"));

for (const file of componentFiles) {
  if (file === "TechStack.tsx") continue; // already checked above
  const filePath = path.join(componentsDir, file);
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(blocklistRegex);
  if (match) {
    addViolation(filePath, "-", `Blocked word detected: "${match[0]}"`);
  }
}

// --- Check showcase subdirectory ---
const showcaseDir = path.join(componentsDir, "showcase");
if (fs.existsSync(showcaseDir)) {
  const showcaseFiles = fs.readdirSync(showcaseDir).filter((f) => f.endsWith(".tsx"));
  for (const file of showcaseFiles) {
    const filePath = path.join(showcaseDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const match = content.match(blocklistRegex);
    if (match) {
      addViolation(filePath, "-", `Blocked word detected: "${match[0]}"`);
    }
  }
}

// --- Check data files ---
const dataDir = path.join(ROOT, "src", "data");
if (fs.existsSync(dataDir)) {
  const dataFiles = fs.readdirSync(dataDir).filter((f) => f.endsWith(".ts"));
  for (const file of dataFiles) {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const match = content.match(blocklistRegex);
    if (match) {
      addViolation(filePath, "-", `Blocked word detected: "${match[0]}"`);
    }
    const urls = content.match(/https?:\/\/[^\s"')]+/g) || [];
    for (const url of urls) {
      const isAllowed = ALLOWED_DOMAINS.some((d) => url.includes(d));
      if (!isAllowed) {
        addViolation(filePath, "-", `Unauthorized URL: ${url}`);
      }
    }
  }
}

// --- Check layout metadata ---
const layoutPath = path.join(ROOT, "src", "app", "[locale]", "layout.tsx");
if (fs.existsSync(layoutPath)) {
  const content = fs.readFileSync(layoutPath, "utf-8");
  const match = content.match(blocklistRegex);
  if (match) {
    addViolation(layoutPath, "-", `Blocked word detected: "${match[0]}"`);
  }
}

// ---------------------------------------------------------------------------
// 4. Report
// ---------------------------------------------------------------------------
if (violations.length > 0) {
  console.error("\n\x1b[31m✖ Content validation failed!\x1b[0m\n");
  for (const v of violations) {
    console.error(`  \x1b[33m${v.file}\x1b[0m [${v.line}]`);
    console.error(`    → ${v.message}\n`);
  }
  console.error(`  ${violations.length} violation(s) found. Commit blocked.\n`);
  process.exit(1);
} else {
  console.log("\x1b[32m✔ Content validation passed.\x1b[0m");
  process.exit(0);
}
