import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Reviews />
            <Blogs />
            <Register />
        </>
    );
}
