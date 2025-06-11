// Es obligatorio ponerlo si usamos hooks como usePathname
'use client'
// Este componente permite crear enlaces internos entre páginas sin recargar 
// toda la web.
import Link from 'next/link'
// Este hook nos da acceso a la ruta actual, por ejemplo "/projects", "/contact", etc.
import { usePathname } from 'next/navigation'

export default function Navbar() {
  // Guardamos la ruta actual en una variable.
  const pathname = usePathname()

  const linkClass = (path) =>
     // Si el path es igual al pathname actual (la página activa), 
     // le añade 'font-bold underline'
    `px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition ${
      pathname === path ? 'font-bold underline' : ''
    }`
  // El componente Navbar retorna una barra de navegación con 3 enlaces.
  return (
    <nav className="w-full flex justify-center gap-4 py-4 border-b border-gray-300 dark:border-gray-700">
      <Link href="/" className={linkClass('/')}>
        About Me
      </Link>
      <Link href="/projects" className={linkClass('/projects')}>
        Projects
      </Link>
      <Link href="/contact" className={linkClass('/contact')}>
        Contact
      </Link>
    </nav>
  )
}
