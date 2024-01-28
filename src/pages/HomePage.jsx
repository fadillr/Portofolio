import Aboutme from "../components/Aboutme";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Servis from "../components/Servis";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Aboutme />
      <Servis />
    </section>
  );
};

export default HomePage;
