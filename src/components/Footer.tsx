export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted italic">
            &ldquo;{dict.footer.tagline}&rdquo;
          </p>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} MyeongSub Kim / MOVA Tech. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
