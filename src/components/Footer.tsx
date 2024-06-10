import Link from "next/link"
import Image from "next/image"

const links = [
 { label: "Home", href: "/" },
 { label: "Articles", href: "/articles" },
 { label: "About", href: "/about" },
 { label: "Contact", href: "/contact" }
]

const Footer = () => {
 return (
  <footer className="footer footer-center p-10 bg-gray-950 text-base-content rounded">
   <Link href="/">
    <Image
     src="https://thomasjeffersonrecites.s3.amazonaws.com/logo.png"
     alt="Thomas Jefferson Recites"
     width={150}
     height={150}
    />
   </Link>
   <div className="grid grid-flow-col gap-4">
    {links.map((item, i) => (
     <Link
      key={i}
      href={item.href}
      className="link link-hover text-white"
     >
      {item.label}
     </Link>
    ))}
   </div>
   <div>
    <p className="text-slate-200">Copyright © 2024 - Jeffrey Claybrook</p>
   </div>
  </footer>
 )
}

export default Footer