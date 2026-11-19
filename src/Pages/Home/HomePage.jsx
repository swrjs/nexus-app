import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import { driveAsset } from "../../constants/driveImages";
import {
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
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const touchDistRef = useRef(null);

  const handlePinClick = (pin) => {
    navigate(pin.path);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => {
      const next = Math.min(prev + 0.25, 2.5);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const zoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.25, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  // Mouse drag handlers for panning
  const handleMouseDown = (e) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch / Pinch & Pan handlers
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistRef.current = { dist, zoom: zoomLevel };
    } else if (e.touches.length === 1 && zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchDistRef.current) {
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleFactor = newDist / touchDistRef.current.dist;
      const newZoom = Math.min(Math.max(touchDistRef.current.zoom * scaleFactor, 1), 2.5);
      setZoomLevel(newZoom);
      if (newZoom === 1) setPan({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && isDragging && zoomLevel > 1) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchDistRef.current = null;
  };

  // Wheel zoom handler
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    setZoomLevel((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 2.5);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  return (
    <PirateLayout activeNav="Map">
      <div className="w-full min-h-screen flex flex-col items-center relative select-none bg-[#0a0705] py-2 sm:py-4 px-2 sm:px-4">

        {/* Floating Zoom Controls Widget */}
        <div className="fixed top-20 right-4 z-30 flex items-center bg-[#100b07]/90 backdrop-blur-md border border-[#523d26] rounded-xl p-1 shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
          <button
            onClick={zoomOut}
            disabled={zoomLevel <= 1}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#d6c4ac] hover:text-[#f5ca73] hover:bg-[#20150b] disabled:opacity-35 disabled:hover:bg-transparent transition-all cursor-pointer focus:outline-none"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <FaSearchMinus size={12} />
          </button>

          <span className="px-2 text-xs font-mono font-semibold text-[#f5ca73]">
            {Math.round(zoomLevel * 100)}%
          </span>

          <button
            onClick={zoomIn}
            disabled={zoomLevel >= 2.5}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#d6c4ac] hover:text-[#f5ca73] hover:bg-[#20150b] disabled:opacity-35 disabled:hover:bg-transparent transition-all cursor-pointer focus:outline-none"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <FaSearchPlus size={12} />
          </button>

          {zoomLevel > 1 && (
            <button
              onClick={resetZoom}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#d6c4ac] hover:text-[#f5ca73] hover:bg-[#20150b] transition-all cursor-pointer border-l border-[#3d2c1c] ml-0.5"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <FaUndo size={11} />
            </button>
          )}
        </div>

        {/* Scrollable Map Container */}
        <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] my-2">
          <div
            className={`relative w-full aspect-[576/1024] bg-[#0a0705] transition-transform duration-75 ease-out origin-center ${
              zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : ""
            }`}
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >

            {/* Main Map Image (Vertical Map) */}
            <img
              src={driveAsset("nexus-pirate-map.png")}
              alt="SECE Treasure Map - Different Islands Same Crew Bigger Dreams"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />

            {/* Perimeter Vignette */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl z-10"
              style={{
                boxShadow: "inset 0 0 24px 3px rgba(12, 9, 6, 0.35)",
              }}
            />

            {/* SVG Sailing Routes */}
            <svg
              viewBox="0 0 576 1024"
              className="absolute inset-0 pointer-events-none z-20 w-full h-full object-cover"
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
                className="absolute -translate-x-1/2 -translate-y-1/2 z-25 group cursor-pointer focus:outline-none rounded-xl min-w-[44px] min-h-[44px] transition-all duration-300 ease-out hover:scale-105 hotspot-glow pointer-events-auto"
                title={`Click to sail to ${pin.title}`}
                aria-label={`Sail to ${pin.title}`}
              >

                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d64045]/40 animate-ping opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300" />

                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e63946]/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 shadow-[0_0_8px_#e63946]" />

                <span className="sr-only">
                  Go to {pin.title}
                </span>

                {activeIsland?.id === pin.id && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 sm:w-60 p-3 rounded-xl bg-gradient-to-b from-[#18110b]/98 to-[#100b07]/98 border border-[#c89d55] shadow-[0_12px_28px_rgba(0,0,0,0.9),0_0_15px_rgba(200,157,85,0.25)] z-40 text-center animate-fade-in-up pointer-events-auto">

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
    </PirateLayout>
  );
};

export default HomePage;
