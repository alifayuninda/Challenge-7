import {BrowserRouter, Routes, Route} from "react-router-dom";
import HalLanding from "../pages/LandingPage";
import CariMobil from "../pages/CariMobil";

const RouteApps = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <HalLanding/>
                }/>
                <Route path="/cars" element={
                    <CariMobil/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApps;