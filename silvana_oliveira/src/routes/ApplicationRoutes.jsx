import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Encontre from '../pages/Encontre/Encontre'
import Acelere from '../pages/Acelere/Acelere'
import Menu from '../components/Menu/Menu'
import Prestadora from '../pages/Prestadora/Prestadora'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Sobre />} />
                <Route path='acelere' element={<Acelere />} />
                <Route path='encontre' element={<Encontre />} />
                <Route path='prestadora' element={<Prestadora />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes