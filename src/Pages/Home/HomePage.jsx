
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import { driveAsset } from "../../constants/driveImages";
import {
  FaCompass,
  FaSearchPlus,
  FaSearchMinus,
  FaUndo,
} from "react-icons/fa";

const ISLAND_PINS = [
  {
    id: "nexus",
    title: "Nexus",
    path: "/nexus",
    left: "36.0%",
    top: "18.0%",
    width: "28%",
    height: "15%",
    desc: "The Annual Flagship Fest of ECE: 3 days of techno-cultural brilliance, coding battles & fun!",
  },
  {
    id: "events",
    title: "Events",
    path: "/events",
    left: "74.0%",
    top: "27.0%",
    width: "26%",
    height: "15%",
    desc: "Coding challenges, technical workshops, robotics contests, and fun tournaments.",
  },
  {
    id: "home",
    title: "Home",
    path: "/home",
    left: "27.0%",
    top: "45.0%",
    width: "24%",
    height: "14%",
    desc: "Society of Electronics & Communication basecamp: history, vision & community.",
  },
  {
    id: "team",
    title: "Team",
    path: "/team",
    left: "44.0%",
    top: "65.0%",
    width: "28%",
    height: "15%",
    desc: "Meet the crew: student leaders, heads, and members driving the society forward.",
  },
  {
    id: "pmc",
    title: "Placement Masterclass",
    path: "/placement_masterclass",
    left: "72.0%",
    top: "70.0%",
    width: "26%",
    height: "14%",
    desc: "Alumni wisdom, placement stories, preparation roadmaps & top company interview tips.",
  },
  {
    id: "alumni",
    title: "Alumni",
    path: "/alumni",
    left: "48.0%",
    top: "88.0%",
    width: "26%",
    height: "12%",
    desc: "Legacy records of past batches: creators of community, architects of tomorrow.",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [activeIsland, setActiveIsland] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handlePinClick = (pin) => {
    navigate(pin.path);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 1.75));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <PirateLayout activeNav="Map">
      <div className="max-w-4xl mx-auto py-1 flex flex-col items-center animate-fade-in-up w-full">

        {/* Header Banner */}
        <div className="w-full flex flex-wrap items-center justify-between gap-2.5 px-3 xs:px-4 py-2.5 mb-3 rounded-xl bg-gradient-to-r from-[#140e08]/95 via-[#1c130b]/90 to-[#140e08]/95 border border-[#4a341e]/70 shadow-lg text-xs">

          <div className="flex items-center gap-2 text-[#cbb89b]">
            <FaCompass
              className="text-[#d4af37] animate-[spin_35s_linear_infinite] flex-shrink-0"
              size={17}
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-cinzel text-xs font-bold text-[#f5ca73] tracking-wider uppercase">
                SECE Archipelago Navigational Chart
              </span>

              <span className="text-[10px] text-[#9e886d] hidden md:inline font-sans">
                (Interactive Antique Cartography)
              </span>
            </div>
          </div>

          {/* Map Controls */}
          <div className="flex items-center gap-2 xs:gap-3">

            <div className="hidden sm:flex items-center gap-2 text-[11px] font-sans text-[#a89274]">
              <span className="font-mono text-[#d4af37]/80">
                22.7758° N, 86.1439° E
              </span>
              <span className="text-[#6d5130]">•</span>
            </div>

            <div className="flex items-center bg-[#100b07] border border-[#523d26] rounded-lg p-0.5 shadow-inner">

              <button
                onClick={zoomOut}
                disabled={zoomLevel <= 1}
                className="w-7 h-7 flex items-center justify-center rounded text-[#d6c4ac] hover:text-[#f5ca73] hover:bg-[#20150b] disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#d6c4ac] transition-all cursor-pointer focus:outline-none"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <FaSearchMinus size={11} />
              </button>

              <span className="px-1.5 text-[10px] font-mono font-semibold text-[#f5ca73]">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                onClick={zoomIn}
                disabled={zoomLevel >= 1.75}
                className="w-7 h-7 flex items-center justify-center rounded text-[#d6c4ac] hover:text-[#f5ca73] hover:bg-[#20150b] disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#d6c4ac] transition-all cursor-pointer focus:outline-none"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <FaSearchPlus size={11} />
              </button>

              {zoomLevel > 1 && (
                <button
                  onClick={resetZoom}
                  className="w-7 h-7 flex items-center justify-center rounded text-[#d6c4ac] hover:text-[#f5ca73] hover:bg-[#20150b] transition-all cursor-pointer border-l border-[#3d2c1c] ml-0.5"
                  title="Reset Zoom"
                  aria-label="Reset Zoom"
                >
                  <FaUndo size={10} />
                </button>
              )}

            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-2xl mx-auto p-[3px] rounded-2xl bg-gradient-to-b from-[#8a632c] via-[#2a1a0b] to-[#8a632c] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(156,115,51,0.18)] transition-all duration-300 overflow-hidden">

          <div
            className={`w-full rounded-[13px] bg-[#0c0906] select-none scrollbar-thin ${
              zoomLevel > 1
                ? "overflow-auto touch-pan-x touch-pan-y"
                : "overflow-hidden touch-pan-y"
            }`}
          >

            <div
              className="relative w-full aspect-[576/1024] min-w-[320px] transition-transform duration-300 ease-out origin-top-left"
              style={{
                transform: `scale(${zoomLevel})`,
                width: zoomLevel > 1 ? `${zoomLevel * 100}%` : "100%",
              }}
            >

              {/* Main Map Image (Vertical Map) */}
              <img
                src={driveAsset("nexus-pirate-map.png")}
                alt="SECE Treasure Map - Different Islands Same Crew Bigger Dreams"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />

              {/* Perimeter Vignette */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[13px] z-10"
                style={{
                  boxShadow: "inset 0 0 24px 3px rgba(12, 9, 6, 0.35)",
                }}
              />

              {/* SVG Sailing Routes */}
              <svg
                viewBox="0 0 576 1024"
                className="absolute inset-0 pointer-events-none z-20"
              >
                <path d="M 210 180 Q 320 220, 420 270" className="stroke-gold-glow" />
                <path d="M 430 290 Q 320 370, 155 460" className="stroke-gold-glow" />
                <path d="M 170 480 Q 280 570, 250 665" className="stroke-gold-glow" />
                <path d="M 270 670 Q 350 700, 415 720" className="stroke-gold-glow" />
                <path d="M 260 680 Q 270 800, 280 900" className="stroke-gold-glow" />
              </svg>

              {/* Clickable Island Hotspots */}
              {ISLAND_PINS.map((pin) => (
                <button
                  key={pin.id}
                  onClick={() => handlePinClick(pin)}
                  onMouseEnter={() => setActiveIsland(pin)}
                  onMouseLeave={() => setActiveIsland(null)}
                  onFocus={() => setActiveIsland(pin)}
                  onBlur={() => setActiveIsland(null)}
                  style={{
                    left: pin.left,
                    top: pin.top,
                    width: pin.width,
                    height: pin.height,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none rounded-xl min-w-[44px] min-h-[44px] transition-all duration-300 ease-out hover:scale-105 hotspot-glow"
                  title={`Click to sail to ${pin.title}`}
                  aria-label={`Sail to ${pin.title}`}
                >

                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d64045]/40 animate-ping opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300" />

                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e63946]/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 shadow-[0_0_8px_#e63946]" />

                  <span className="sr-only">
                    Go to {pin.title}
                  </span>

                  {activeIsland?.id === pin.id && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 sm:w-60 p-3 rounded-xl bg-gradient-to-b from-[#18110b]/98 to-[#100b07]/98 border border-[#c89d55] shadow-[0_12px_28px_rgba(0,0,0,0.9),0_0_15px_rgba(200,157,85,0.25)] z-30 text-center animate-fade-in-up pointer-events-auto">

                      <div className="flex items-center justify-center border-b border-[#3d2c1c] pb-1.5 mb-1.5">
                        <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[#f5ca73] tracking-wide">
                          {pin.title}
                        </h4>
                      </div>

                      <p className="text-[11px] sm:text-xs text-[#d6c4ac] leading-relaxed font-sans">
                        {pin.desc}
                      </p>

                      <div className="mt-2 pt-1.5 border-t border-[#3d2c1c]/50 text-center">
                        <span className="text-[9px] uppercase font-cinzel font-bold text-[#e5be73] tracking-widest">
                          Sail to Island
                        </span>
                      </div>

                    </div>
                  )}
                </button>
              ))}

            </div>
          </div>
        </div>

        {/* Mobile Assistance Note */}
        <div className="w-full flex items-center justify-between text-[11px] text-[#9e886d] mt-2 px-2 sm:hidden">
          <span>
            Tap any island pin to explore.
          </span>

          {zoomLevel > 1 && (
            <span className="font-mono text-[#d4af37]">
              Drag to explore
            </span>
          )}
        </div>

      </div>
    </PirateLayout>
  );
};

export default HomePage;
