import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  //usando useLocation para detectar la pagina en la que estamos
  const {pathname} = useLocation()
  //identificando si estoy en la pagina home
  const isHome = useMemo(() => pathname === '/' , [pathname])
  console.log(isHome);
  

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

            { isHome && (
              <form
                className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 '
              >
                <div className='space-y-4 '>
                  <label 
                    htmlFor="ingredient"
                    className='block text-white uppercase font-extrabold text-lg'
                  >Nombre o Ingredientes</label>
                  <input 
                    id='ingredient' 
                    type='text' 
                    name='ingredient' 
                    className='p-3 w-full rounded-lg focus:outline none' 
                    placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'
                  />
                </div>
                <div className='space-y-4 '>
                  <label 
                    htmlFor="ingredient"
                    className='block text-white uppercase font-extrabold text-lg'
                  >Categoría</label>
                  <select 
                    id='ingredient'
                    name='ingredient' 
                    className='p-3 w-full rounded-lg focus:outline none' 
                  >
                    <option value="">--- Seleccione ---</option>
                  </select>
                </div>

                <input 
                  type="submit"
                  value='Buscar Recetas'
                  className='cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-extrabold w-full p-2 rounded-lg uppercase'
                />
              </form>
            )}
        </div>
    </header>
  )
}
