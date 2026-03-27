import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="font-display text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-muted-light mb-8">Page not found</p>
      <Link
        href="/en"
        className="text-accent hover:text-accent-dim transition-colors underline underline-offset-4"
      >
        Go to homepage
      </Link>
    </div>
  );
}
