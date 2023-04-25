import About from "./components/about/About";
import Header from "./components/header/Header";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Reviews />
        </>
    );
}
