'use client'

import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

interface EffectLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export const EffectLink: React.FC<EffectLinkProps> = ({ children, className = '', href, ...props }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  React.useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsTransitioning(false)
      document.body.classList.remove('page-transitioning')
    }

    handleRouteChangeComplete()
  }, [pathname])

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIsTransitioning(true)
    document.body.classList.add('page-transitioning')
    
    setTimeout(() => {
      router.push(href.toString())
    }, 300) // Adjust this timing to match your CSS transition duration
  }

  return (
    <>
      <Link {...props} href={href} onClick={handleTransition} className={className}>
        {children}
      </Link>
      {isTransitioning && (
        <div 
          className="fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform translate-x-full page-transition-overlay"
          aria-hidden="true"
        />
      )}
    </>
  )
}
