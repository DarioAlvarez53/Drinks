import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FavoritesPage from './pages/FavoritesPage'
import Layout from './layouts/Layout'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {/* Ruta de la pagina principal */}
                    <Route 
                        path='/' 
                        element={<IndexPage/>}
                        index //esto es para decir que esta es la pagina principal
                    />
                    {/* Ruta de favoritos */}
                    <Route 
                        path='/favorites' 
                        element={<FavoritesPage/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
