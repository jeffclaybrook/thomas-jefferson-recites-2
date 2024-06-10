import Link from "next/link"
import Image from "next/image"

const links = [
 { label: "Home", href: "/" },
 { label: "Articles", href: "/articles" },
 { label: "About", href: "/about" },
 { label: "Contact", href: "/contact" }
]

const Navbar = () => {
 return (
  <nav className="drawer">
   <input
    type="checkbox"
    id="drawer"
    className="drawer-toggle"
   />
   <div className="drawer-content flex flex-col">
    <div className="w-full navbar bg-transparent absolute">
     <div className="flex-none lg:hidden">
      <label
       htmlFor="drawer"
       aria-label="Open drawer"
       className="btn btn-square btn-ghost"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="inline-block w-6 h-6 stroke-current"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         stroke="#ffffff"
         d="M4 6h16M4 12h16M4 18h16"
        />
       </svg>
      </label>
     </div>
     <div className="flex-1 px-2 mx-2">
      <Link href="/">
       <Image
        src="https://thomasjeffersonrecites.s3.amazonaws.com/logo.png"
        alt="Thomas Jefferson Recites"
        width={80}
        height={80}
       />
      </Link>
     </div>
     <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal">
       {links.map((item, i) => (
        <li key={i}>
         <Link href={item.href} className="link link-hover text-white focus:text-amber-400">{item.label}</Link>
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>
   <div className="drawer-side">
    <label
     htmlFor="drawer"
     aria-label="Close drawer"
     className="drawer-overlay"
    />
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
     {links.map((item, i) => (
      <li key={i}>
       <Link href={item.href}>{item.label}</Link>
      </li>
     ))}
    </ul>
   </div>
  </nav>
 )
}

export default Navbar