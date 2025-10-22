'use client'
import Link  from 'next/link'
import { useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollProgress = Math.min(scrollY / 200, 1)
    const textOpacity = 1 - scrollProgress
    const textTranslateX = -scrollProgress * 51
    const pathname = usePathname()

    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="relative w-full h-20">
            <img
              src="/Logo.svg"
              alt="Founders @ Hunter Logo"
              className="absolute"
              style={{ left: '56px', top: '24px', width: '42.9px', height: '50.7px' }}
            />
            <img
              src="/Logo-Text.svg"
              alt="Founders @ Hunter College"
              className="absolute transition-all duration-300"
              style={{
                left: `${107 + textTranslateX}px`,
                top: '33px',
                width: '185.9px',
                height: '44.85px',
                opacity: textOpacity
              }}
            />
            <Link
              href='/'
              className={`absolute font-medium ${pathname === '/' ? 'border-b-[2px] border-white' : ''} text-white`}
              style={{
                left: '675px',
                top: '48px',
                height: '30',
                fontSize: '15.6px',
                fontFamily: 'Inter',
                opacity: textOpacity,
              }}
            >
            Home
            </Link>
            <Link
              href='/about'
              className={`absolute font-medium ${pathname === '/about' ? 'border-b border-white' : ''} text-white`}
              style={{
                left: '822px',
                top: '48px',
                width: '70px',
                height: '30',
                fontSize: '15.6px',
                fontFamily: 'Inter',
                opacity: textOpacity
              }}
            >
            About
            </Link>
            <Link
              href='/projects'
              className={`absolute font-medium ${pathname === '/projects' ? 'border-b border-white' : ''} text-white`}
              style={{
                left: '971px',
                top: '48px',
                width: '94px',
                height: '30',
                fontSize: '15.6px',
                fontFamily: 'Inter',
                opacity: textOpacity
              }}
            >
            Projects
            </Link>
            <Link
              href='/contact'
              className={`absolute font-medium ${pathname === '/contact' ? 'border-b border-white' : ''} text-white`}
              style={{
                left: '1153px',
                top: '48px',
                width: '92px',
                height: '30',
                fontSize: '15.6px',
                fontFamily: 'Inter',
                opacity: textOpacity
              }}
            >
            Contact
            </Link>
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="absolute text-black cursor-pointer"
              style={{
                left: '1741px',
                top: '47px',
                width: '94px',
                height: '29px',
                fontSize: '15.6px',
                fontFamily: 'Inter',
                backgroundColor: 'white',
                borderRadius: '100px',
                opacity: textOpacity
              }}
            >
            Register
            </button>
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
      </>
    );
  }



