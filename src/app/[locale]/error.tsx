"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="font-display text-6xl font-bold text-white mb-4">Error</h1>
      <p className="text-muted-light mb-8">Something went wrong</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-accent text-surface font-medium rounded-lg hover:bg-accent-dim transition-all"
      >
        Try again
      </button>
    </div>
  );
}
