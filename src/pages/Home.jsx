import "./Home.css";

import ScrollToTopButton from "../components/footer/ScrollToTopButton";
import FooterNav from "../components/footer/FooterNav";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

import Profile from "../components/main_contents/Profile/Profile";
import Academy from "../components/main_contents/Academy/Academy";
import Program from "../components/main_contents/Program/Program";
import Location from "../components/main_contents/Location/Location";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        <Profile />
        <Academy />
        <Program />
        <Location />
      </main>

      <FooterNav />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;
