import Navbar from "../components/Navbar";
import iniHero from "../components/Hero";
import iniContent from "../components/Content";
import iniFooter from "../components/Footer";

const HalLanding = () => {
    return (
        <>
            <Navbar/>
            <iniHero/>
            <iniContent/>
            <iniFooter/>
            <nav>ini section nav</nav>
            <section>section hero</section>
            <section>section content</section>
            <footer>ini footer</footer>
        </>
    )
}

export default HalLanding;