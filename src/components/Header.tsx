import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
              {/* Logotipo */}
              <div>
                <img className="w-32" src="/logo.svg" alt="Logotipo" />
              </div>

              {/* Navegación */}
              <nav className='flex gap-8'>
                <Link 
                  to="/"
                  className='text-white uppercase font-bold'
                >Inicio</Link>
                <Link 
                  to="/favvoritos"
                  className='text-white uppercase font-bold'
                >Favoritos</Link>
              </nav>
            </div>
        </div>
    </header>
  )
}
