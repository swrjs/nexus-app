
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShipWheelIcon,
  CrossedSwordsIcon,
} from "./PirateIcons";
import {
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaIdBadge,
  FaHome,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";
import MobileNavBar from "../../mobile/MobileNavBar";

export const NAV_ITEMS = [
  { name: "Home", path: "/home", icon: FaHome },
  { name: "Events", path: "/events", icon: FaCalendarAlt },
  { name: "Nexus", path: "/nexus", icon: CrossedSwordsIcon },
  { name: "Team", path: "/team", icon: FaUsers },
  { name: "Placement Masterclass", path: "/placement_masterclass", icon: FaGraduationCap },
  { name: "Alumni", path: "/alumni", icon: FaIdBadge },
  { name: "Map", path: "/", icon: ShipWheelIcon },
];

const PirateLayout = ({ children, activeNav, topBarExtras }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const currentPath = location.pathname;

  const isItemActive = (item) => {
    if (activeNav) {
      return activeNav.toLowerCase() === item.name.toLowerCase();
    }
    if (item.path === "/" && (currentPath === "/" || currentPath === "/map")) return true;
    if (item.path === "/home" && currentPath === "/home") return true;
    if (item.path !== "/" && currentPath.startsWith(item.path)) return true;
    return false;
  };

  const renderNavItem = (item) => {
    const active = isItemActive(item);
    const Icon = item.icon;

    return (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setMobileOpen(false)}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all duration-200 ${
          active
            ? "bg-[#2a1c10] border border-[#a67c38] text-[#f7cd78]"
            : "border border-transparent text-[#c2af94] hover:text-[#f3d48d] hover:bg-[#18110b]"
        }`}
      >
        {Icon === ShipWheelIcon || Icon === CrossedSwordsIcon ? (
          <Icon
            className="w-4 h-4 flex-shrink-0"
            color={active ? "#f7cd78" : "#c2af94"}
          />
        ) : (
          <Icon size={15} />
        )}
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0705] text-[#e0d3bf] flex flex-col font-sans touch-pan-y">

      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-[#110c08]/95 backdrop-blur-md border-b border-[#3d2c1c] shadow-lg">

        <div className="max-w-full px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

          {/* BRAND */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <ShipWheelIcon
              className="w-8 h-8"
              color="#d4af37"
            />
            <div className="flex flex-col">
              <span className="font-cinzel font-extrabold text-xl tracking-widest text-[#f0cb79] leading-none">
                SECE
              </span>
              <span className="text-[9px] text-[#ab9475] tracking-tight mt-1">
                NIT Jamshedpur
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-4">
            {NAV_ITEMS.map(renderNavItem)}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {topBarExtras}

            {/* SOCIAL LINKS - DESKTOP */}
            <div className="hidden lg:flex items-center gap-2 border-l border-[#453422] pl-3">
              <a href="https://www.youtube.com/@sece_nitjsr" target="_blank" rel="noreferrer"
                className="text-[#ab9475] hover:text-[#f5c767]">
                <FaYoutube size={16} />
              </a>
              <a href="https://www.linkedin.com/company/society-of-electronics-and-communication-engineering-nit-jamshedpur/" target="_blank" rel="noreferrer"
                className="text-[#ab9475] hover:text-[#f5c767]">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://www.instagram.com/sece_nitjsr/" target="_blank" rel="noreferrer"
                className="text-[#ab9475] hover:text-[#f5c767]">
                <FaInstagram size={16} />
              </a>
            </div>

            {/* MOBILE MENU BUTTON — hidden on lg (bottom nav takes over) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden xl:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a130b] border border-[#523d26] text-[#e8c782]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* TABLET NAVIGATION */}
        <nav className="hidden lg:flex xl:hidden items-center justify-center gap-3 px-4 pb-3 flex-wrap">
          {NAV_ITEMS.map(renderNavItem)}
        </nav>

        {/* MOBILE DROP-DOWN MENU (lg and below) */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#3d2c1c] bg-[#0e0a07] px-4 py-4">
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {NAV_ITEMS.map(renderNavItem)}
            </nav>

            <div className="mt-4 pt-3 border-t border-[#3d2c1c] flex items-center justify-center gap-5">
              <a href="https://www.youtube.com/@sece_nitjsr" target="_blank" rel="noreferrer" className="text-[#ab9475] hover:text-[#f5c767]">
                <FaYoutube size={18} />
              </a>
              <a href="https://www.linkedin.com/company/society-of-electronics-and-communication-engineering-nit-jamshedpur/" target="_blank" rel="noreferrer" className="text-[#ab9475] hover:text-[#f5c767]">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.facebook.com/sece.nitjsr/" target="_blank" rel="noreferrer" className="text-[#ab9475] hover:text-[#f5c767]">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/sece_nitjsr/" target="_blank" rel="noreferrer" className="text-[#ab9475] hover:text-[#f5c767]">
                <FaInstagram size={18} />
              </a>
              <a href="mailto:sece.student@nitjsr.ac.in" className="text-[#ab9475] hover:text-[#f5c767]">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN PAGE CONTENT */}
      <main className="flex-1 w-full min-w-0 bg-[#0b0806] flex flex-col">
        <div className={`w-full flex-1 flex flex-col ${currentPath === '/' || currentPath === '/map' ? 'px-0 py-0' : 'px-2 xs:px-3 sm:px-6 lg:px-8 pb-12 pt-3 sm:pt-5'}`}>
          {children}
        </div>
      </main>

      {/* MOBILE BOTTOM TAB NAVIGATION — visible only on screens smaller than lg */}
      <MobileNavBar />

    </div>
  );
};

export default PirateLayout;
