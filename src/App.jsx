
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation,  } from "react-router-dom";
import Header from "./components/Header";
// Pages
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
// destination pages
import Moon from "./components/pages/DestinationPages/Moon";
import Mars from "./components/pages/DestinationPages/Mars";
import Europa from "./components/pages/DestinationPages/Europa";
import Titan from "./components/pages/DestinationPages/Titan";

// Animate presence
import {AnimatePresence} from 'framer-motion'

const Layout = () => (
  <main>
    <Header />
    <Outlet />
  </main>
);

function App() {
  // const location = useLocation();
  return (
      // <AnimatePresence mode="wait">
    <Router>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
        
      </Routes>
    </Router>
      // </AnimatePresence>
  );
}
export default App