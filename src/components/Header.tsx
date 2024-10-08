import { NavLink } from 'react-router-dom'

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
                <NavLink 
                  to="/"
                  className={({isActive}) => 
                    isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                  }
                >Inicio</NavLink>
                <NavLink 
                  to="/favoritos"
                  className={({isActive}) => 
                    isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                  }
                >Favoritos</NavLink>
              </nav>
            </div>
        </div>
    </header>
  )
}
