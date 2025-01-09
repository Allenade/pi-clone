import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom"; // Correct import
import Hero from "./Hero/Hero";
import Features from "./components/Features/Feature";
import Pi from "./components/Pi/Pi";
import Footer from "./components/Footer/Footer";
import ValidatePage from "./components/ValidatePage/ValidatePage";
import Navbar from "./components/navbar/Navbar";
import AnnouncementBanner from "./components/AnnouncementBanner/AnnouncementBanner";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import MiningInfo from "./components/MIningInfo/MiningInfo";
import Download from "./components/Download/Download";
import UnlockWallet from "./components/unlock/UnlockWallet";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MiningInfo />
                <Pi />
                <Features />
                <Download />
              </>
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/pi" element={<Pi />} />
          <Route path="/mining-info" element={<MiningInfo />} />
          <Route path="/download" element={<Download />} />
        </Route>
        <Route path="/pi/validate" element={<ValidatePage />} />
        <Route path="/pi/unlock-wallet" element={<UnlockWallet />} />
      </Routes>
    </Router>
  );
}

const Layout = () => {
  const location = useLocation();
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  const shouldShowBanner = location.pathname !== "/pi/validate";

  useEffect(() => {
    if (isBannerDismissed || !shouldShowBanner) return;

    const hideTimeout = setTimeout(() => {
      setIsBannerVisible(false);
    }, 10000);

    const showInterval = setInterval(() => {
      setIsBannerVisible(true);
      setTimeout(() => {
        setIsBannerVisible(false);
      }, 10000);
    }, 30000);

    return () => {
      clearTimeout(hideTimeout);
      clearInterval(showInterval);
    };
  }, [isBannerDismissed, shouldShowBanner]);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
    setIsBannerDismissed(true);
  };

  return (
    <>
      {shouldShowBanner && isBannerVisible && !isBannerDismissed && (
        <AnnouncementBanner onClose={handleCloseBanner} />
      )}
      <Navbar />
      <Outlet />
      <Footer />
      <BottomBanner />
    </>
  );
};

export default App;
