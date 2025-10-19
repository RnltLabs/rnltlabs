import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { href: '#strategy', label: 'The Lab' },
    { href: '#process', label: 'Workflow' },
    { href: '#projects', label: 'Projects' },
    { href: '#founder', label: 'Founder' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[120] border-b bg-background/85 backdrop-blur-lg">
        <div className="container mx-auto max-w-[1200px] px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="inline-block">
              <img
                src="/images/RNLT_oneLine_regular_slim.svg"
                alt="RNLT Labs"
                className="h-5 w-auto"
              />
            </a>

            {/* Desktop Navigation - only show on homepage */}
            {isHomePage && (
              <ul className="hidden items-center gap-8 md:flex">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.95rem] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Mobile Menu Button - only show on homepage */}
            {isHomePage && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="z-[102] rounded-md p-2 md:hidden"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - only on homepage */}
      {isHomePage && mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[110] bg-background/98 pt-20 backdrop-blur-lg md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <ul className="space-y-6 px-8 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2 text-xl font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
