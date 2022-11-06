import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../../pages/About';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import Housing from '../../pages/Housing';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing" element={<Housing />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;