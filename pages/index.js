import About from "@/components/home/about/About";
import Blogs from "@/components/home/blogs/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Register from "@/components/home/register/Register";
import Reviews from "@/components/home/reviews/Reviews";
import Services from "@/components/services/Services";
import ScriptTraslate from "@/components/ScriptTraslate";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Reviews />
      <Blogs />
      <Register />
      <ScriptTraslate />
      <Footer />
    </>
  );
}
