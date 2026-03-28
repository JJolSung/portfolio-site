import type { Dictionary } from "@/i18n/types";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base text-muted italic">
            &ldquo;{dict.footer.tagline}&rdquo;
          </p>
          <p className="text-base text-muted">
            &copy; {new Date().getFullYear()} MyeongSub Kim / MOVA Tech Co.,Ltd. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
