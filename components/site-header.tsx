'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#technology', label: 'Technology' },
  { href: '#aws', label: 'Why AWS' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#development', label: 'Development' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      {/* Status strip */}
      <div className="hidden border-b border-border md:block">
        <div className="mx-auto flex max-w-6xl items-stretch divide-x divide-border px-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="py-1.5 pr-4">axiom-war v0.7.2</span>
          <span className="flex items-center gap-2 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            sim: deterministic
          </span>
          <span className="px-4 py-1.5">tick: lockstep</span>
          <span className="ml-auto py-1.5 pl-4">status: closed beta prep</span>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Axiom War home">
          <span
            className="grid h-9 w-9 place-items-center rounded-sm border border-primary/40 bg-primary/10 font-mono text-lg font-bold text-primary"
            aria-hidden="true"
          >
            {'Σ'}
          </span>
          <span className="text-sm font-bold uppercase tracking-widest">Axiom War</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Site sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="ml-3 rounded-sm bg-primary px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join Beta
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-sm border border-border text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-6 py-4 lg:hidden"
          aria-label="Site sections"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-primary px-4 py-3 text-center font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              Join Beta
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
