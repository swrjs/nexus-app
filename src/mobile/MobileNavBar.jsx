/**
 * MobileNavBar — Bottom Tab Navigation for Mobile
 * 
 * This component renders a native-feel bottom navigation bar visible only
 * on small screens. It provides thumb-friendly navigation
 * between Map, Nexus, and Events.
 */

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { ShipWheelIcon, CrossedSwordsIcon } from "../components/PirateTheme/PirateIcons";

const TAB_ITEMS = [
  { name: "Map", path: "/", icon: "ship" },
  { name: "Nexus", path: "/nexus", icon: "nexus" },
  { name: "Events", path: "/events", icon: "calendar" },
];

const TabIcon = ({ icon, active }) => {
  const color = active ? "#f7cd78" : "#9e886d";
  const size = 20;

  switch (icon) {
    case "ship":
      return <ShipWheelIcon className="w-5 h-5" color={color} />;
    case "nexus":
      return <CrossedSwordsIcon className="w-5 h-5" color={color} />;
    case "calendar":
      return <FaCalendarAlt size={size} color={color} />;
    default:
      return <ShipWheelIcon className="w-5 h-5" color={color} />;
  }
};

const MobileNavBar = () => {
  const location = useLocation();

  // Always show on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isActive = (item) => {
    const p = location.pathname;
    if (item.path === "/" && (p === "/" || p === "/map")) return true;
    return item.path !== "/" && p.startsWith(item.path);
  };

  return (
    <>
      {/* Spacer to prevent content being hidden behind fixed bottom nav */}
      <div className="lg:hidden h-[64px]" aria-hidden="true" />

      {/* Bottom Nav Bar (Solid Opaque, No Transparency) */}
      <nav
        className="
          fixed bottom-0 left-0 right-0 z-40 lg:hidden
          bg-[#110c08]
          border-t border-[#3d2c1c]
          shadow-[0_-4px_20px_rgba(0,0,0,0.8)]
        "
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        aria-label="Bottom navigation"
      >
        <div className="flex items-stretch h-16">
          {TAB_ITEMS.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  flex flex-col items-center justify-center flex-1 min-w-0
                  py-1 px-0.5 gap-0.5 relative
                  transition-all duration-200 active:scale-95
                  ${active
                    ? "text-[#f7cd78]"
                    : "text-[#9e886d] hover:text-[#d4af37]"
                  }
                `}
                aria-label={item.name}
                aria-current={active ? "page" : undefined}
              >
                {/* Active indicator line at top */}
                {active && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#d4af37] rounded-full" />
                )}

                <TabIcon icon={item.icon} active={active} />

                <span
                  className={`text-[10px] font-cinzel font-semibold tracking-wide leading-tight text-center truncate w-full ${
                    active ? "text-[#f7cd78]" : "text-[#7a6a55]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNavBar;
