'use client'
import Link  from 'next/link'
import { useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { TbMenuDeep } from 'react-icons/tb'
import { MdArrowRightAlt } from 'react-icons/md'
import { createPortal } from 'react-dom'
import {
  disablePageScroll,
  enablePageScroll,
  clearQueueScrollLocks,
} from 'scroll-lock'

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [navOpened, setNavOpened] = useState(false)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [isInAboutSection, setIsInAboutSection] = useState(false)
  const [isInWhatWeOfferSection, setIsInWhatWeOfferSection] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        setScrollY(scrollPosition)

        // Check if we're past the first viewport (about section starts)
        const aboutSectionStart = window.innerHeight // 100vh
        setIsInAboutSection(scrollPosition >= aboutSectionStart)

        // Check if we're in the "What We Offer" section (starts at ~100vh based on marginTop)
        const whatWeOfferStart = window.innerHeight // 100vh
        setIsInWhatWeOfferSection(scrollPosition >= whatWeOfferStart)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
      // Set up portal root for mobile menu
      const el = document.getElementById('portal-root')
      setPortalRoot(el)
    }, [])

    useEffect(() => {
      if (!windowWidth) return
      clearQueueScrollLocks()
      if (navOpened && windowWidth < 768) {
        disablePageScroll()
      } else {
        enablePageScroll()
      }
    }, [navOpened, windowWidth])

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    const scrollProgress = Math.min(scrollY / 200, 1)
    const textOpacity = 1 - scrollProgress // Fades OUT as you scroll (text disappears into logo)
    const pathname = usePathname()

    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full h-20 max-w-screen-2xl mx-auto">
            {/* Logo Section - Left */}
            <div className="flex items-center gap-2 md:gap-4 justify-start">
              <img
                src={isInWhatWeOfferSection ? "/founders_logo_icon.png" : "/Logo.svg"}
                alt="Founders @ Hunter Logo"
                className="transition-all duration-300"
                style={{
                  width: 'clamp(35px, 2.2vw, 42.9px)',
                  height: 'clamp(41px, 2.6vw, 50.7px)'
                }}
              />
              <img
                src="/Logo-Text.svg"
                alt="Founders @ Hunter College"
                className="transition-all duration-300 hidden sm:block"
                style={{
                  width: 'clamp(150px, 9.7vw, 185.9px)',
                  height: 'clamp(36px, 2.3vw, 44.85px)',
                  opacity: textOpacity,
                  transform: `translateX(-${scrollProgress * 50}px)` // Slide left into logo
                }}
              />
            </div>

            {/* Navigation Links - Center */}
            <div
              className={`hidden md:flex items-center justify-center gap-4 lg:gap-8 font-medium transition-colors duration-300 ${isInAboutSection ? 'text-black' : 'text-white'}`}
              style={{
                fontSize: 'clamp(14px, 0.8vw, 15.6px)',
                fontFamily: 'Inter'
              }}
            >
              <Link
                href='/'
                className={`hover:opacity-80 transition-opacity ${pathname === '/' ? `border-b-2 ${isInAboutSection ? 'border-black' : 'border-white'}` : ''}`}
              >
                Home
              </Link>
              <Link
                href='/about'
                className={`hover:opacity-80 transition-opacity ${pathname === '/about' ? `border-b-2 ${isInAboutSection ? 'border-black' : 'border-white'}` : ''}`}
              >
                About
              </Link>
              <Link
                href='/projects'
                className={`hover:opacity-80 transition-opacity ${pathname === '/projects' ? `border-b-2 ${isInAboutSection ? 'border-black' : 'border-white'}` : ''}`}
              >
                Projects
              </Link>
              <Link
                href='/contact'
                className={`hover:opacity-80 transition-opacity ${pathname === '/contact' ? `border-b-2 ${isInAboutSection ? 'border-black' : 'border-white'}` : ''}`}
              >
                Contact
              </Link>
            </div>

            {/* Register Button & Mobile Menu - Right */}
            <div className="flex justify-end items-center">
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="text-black cursor-pointer bg-white hover:bg-gray-100 transition-all duration-300 hidden md:block"
                style={{
                  padding: 'clamp(6px, 0.5vw, 8px) clamp(16px, 1.2vw, 24px)',
                  fontSize: 'clamp(14px, 0.8vw, 15.6px)',
                  fontFamily: 'Inter',
                  borderRadius: '100px'
                }}
              >
                Register
              </button>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="md:hidden text-black cursor-pointer bg-white hover:bg-gray-100 transition-all duration-300 px-4 py-2 rounded-full text-sm mr-3"
              >
                Register
              </button>
              <button
                className="text-white text-2xl md:hidden cursor-pointer hover:scale-95 active:scale-95 transition-all -mr-2"
                onClick={() => {
                  setNavOpened((prev) => !prev)
                }}
              >
                <TbMenuDeep />
              </button>
            </div>
          </div>
        </nav>

        <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Register</DialogTitle>
            </DialogHeader>
            {/* Your registration form will go here */}
          </DialogContent>
        </Dialog>

        {/* Mobile Menu */}
        {portalRoot &&
          createPortal(
            <div
              className={`bg-white/95 backdrop-blur-xl backdrop-saturate-200 fixed w-full h-[calc(100dvh-80px)] top-[80px] flex flex-col items-center justify-between z-40 transition-all duration-300 ${
                navOpened
                  ? "opacity-100 visible left-0 md:-left-full"
                  : "opacity-0 invisible -left-full"
              }`}
            >
              <div className="flex flex-col items-center justify-between w-full p-4">
                <Link
                  href='/'
                  className={`w-full flex items-center justify-between p-4 transition-all duration-300 hover:bg-main/5 active:bg-main/5 ${
                    pathname === '/'
                      ? 'underline underline-offset-4 text-main font-medium'
                      : 'text-black/60 hover:text-main/60'
                  }`}
                  onClick={() => {
                    clearQueueScrollLocks()
                    enablePageScroll()
                    setNavOpened(false)
                  }}
                >
                  Home
                  <MdArrowRightAlt />
                </Link>
                <Link
                  href='/about'
                  className={`w-full flex items-center justify-between p-4 transition-all duration-300 hover:bg-main/5 active:bg-main/5 ${
                    pathname === '/about'
                      ? 'underline underline-offset-4 text-main font-medium'
                      : 'text-black/60 hover:text-main/60'
                  }`}
                  onClick={() => {
                    clearQueueScrollLocks()
                    enablePageScroll()
                    setNavOpened(false)
                  }}
                >
                  About
                  <MdArrowRightAlt />
                </Link>
                <Link
                  href='/projects'
                  className={`w-full flex items-center justify-between p-4 transition-all duration-300 hover:bg-main/5 active:bg-main/5 ${
                    pathname === '/projects'
                      ? 'underline underline-offset-4 text-main font-medium'
                      : 'text-black/60 hover:text-main/60'
                  }`}
                  onClick={() => {
                    clearQueueScrollLocks()
                    enablePageScroll()
                    setNavOpened(false)
                  }}
                >
                  Projects
                  <MdArrowRightAlt />
                </Link>
                <Link
                  href='/contact'
                  className={`w-full flex items-center justify-between p-4 transition-all duration-300 hover:bg-main/5 active:bg-main/5 ${
                    pathname === '/contact'
                      ? 'underline underline-offset-4 text-main font-medium'
                      : 'text-black/60 hover:text-main/60'
                  }`}
                  onClick={() => {
                    clearQueueScrollLocks()
                    enablePageScroll()
                    setNavOpened(false)
                  }}
                >
                  Contact
                  <MdArrowRightAlt />
                </Link>
              </div>
              <div className="p-4 w-full">
                <button
                  className="p-4 w-full bg-black text-white hover:bg-black/80 active:bg-black/80 transition-all duration-300 cursor-pointer rounded-full"
                  onClick={() => {
                    setNavOpened(false)
                    setIsRegisterOpen(true)
                  }}
                >
                  Register
                </button>
              </div>
            </div>,
            portalRoot
          )}
      </>
    );
  }



