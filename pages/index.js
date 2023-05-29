import About from "@/components/home/about/About";
import Blogs from "@/components/home/blogs/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Register from "@/components/home/register/Register";
import Reviews from "@/components/home/reviews/Reviews";
import Services from "@/components/services/Services";
import HeadPages from "@/components/Head";

export default function Home() {
  return (
    <>
      <HeadPages />
      <Header />
      <About />
      <Services />
      <Reviews />
      <Blogs />
      <Register />
      <Footer />
    </>
  );
}
