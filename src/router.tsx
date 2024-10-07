import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FavoritesPage from './pages/FavoritesPage'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta de la pagina principal */}
                <Route 
                    path='/' 
                    element={<IndexPage/>}
                />
                {/* Ruta de favoritos */}
                <Route 
                    path='/favorites' 
                    element={<FavoritesPage/>}
                />
            </Routes>
        </BrowserRouter>
    )
}
