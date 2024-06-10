import { ReactNode } from "react"

interface HeaderProps {
 children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
 return (
  <header className="hero min-h-screen bg-right" style={{ backgroundImage: 'url(https://thomasjeffersonrecites.s3.amazonaws.com/hero.webp)' }}>
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="p-4 max-w-7xl text-start text-neutral-content">
    {children}
   </div>
  </header>
 )
}

export default Header