const navigationItems = [
  ['Find a room', '#find-a-room'],
  ['My reservation', '#my-reservation'],
  ['Sign out', '#sign-out'],
] as const;

export function SiteHeader() {
  return (
    <header className="bg-base-100">
      <div className="content-container flex flex-wrap items-center justify-between gap-4 py-4">
        <a className="flex items-center gap-3" href="/">
          <img alt="Grove" className="h-10 w-10" src="/grovemark.svg" />
          <span>
            <span className="block text-xl font-bold leading-none tracking-tight">
              Grove
            </span>
            <span className="mt-1 block text-sm text-base-content/70">
              UC Davis reservations
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium"
        >
          {navigationItems.map(([label, href]) => (
            <a
              className="text-base-content/70 transition-colors hover:text-base-content"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
