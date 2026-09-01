import type { ReactNode } from "react";

const navItems = [
  ["About", "/about"],
  ["Our work", "/our-work"],
  ["Brodantre", "/brodantre"],
  ["Casting", "/casting-submissions"],
] as const;

export function InnerShell({ children, current }: { children: ReactNode; current: string }) {
  return (
    <main className="inner-shell">
      <header className="inner-nav">
        <a className="wordmark" href="/" aria-label="JMI Entertainment home"><span>JMI</span> ENTERTAINMENT</a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} className={current === href ? "active" : ""} href={href}>{label}</a>)}
          <a className={current === "/contact" ? "inner-contact active" : "inner-contact"} href="/contact">Start a conversation</a>
        </nav>
      </header>
      {children}
      <footer className="inner-footer">
        <div><a className="wordmark" href="/"><span>JMI</span> ENTERTAINMENT</a><p>Production · Distribution · Entertainment</p></div>
        <nav aria-label="Footer navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="/contact">Contact</a>
        </nav>
        <div className="inner-footer-meta"><a href="mailto:info@jmientertainment.com">info@jmientertainment.com</a><p>© {new Date().getFullYear()} JMI Entertainment</p></div>
      </footer>
    </main>
  );
}
