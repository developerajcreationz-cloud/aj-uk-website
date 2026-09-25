import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 text-xs text-ink/50 md:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/images/logo-icon.png" alt="" width={20} height={16} className="h-4 w-auto" />
          <span>© {new Date().getFullYear()} AJ Creationz. All rights reserved.</span>
        </div>
        <p>More of the site is on its way — built section by section.</p>
      </div>
    </footer>
  );
}
