import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import TrustBar from "../components/TrustBar";
import Products from "../components/Products";
import Recipes from "../components/Recipes";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <TrustBar />
      <Products />
      <Recipes />
      <FooterSection />

    </div>
  );
};

export default Home;
