import Aboutme from "../components/Aboutme";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Servis from "../components/Servis";
import Testimoni from "../components/Testimoni";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Aboutme />
      <Servis />
      <Project />
      <Testimoni/>
    </section>
  );
};

export default HomePage;
