/**
 * MobileMoreMenu — "More" bottom tab destinations
 * 
 * On mobile, the bottom tab bar has 6 items. Alumni and Placement Masterclass
 * are grouped under a "More" tab. This helper drawer shows those extra options.
 * Since both pages already exist as full pages, the "More" tab directly links
 * to Alumni (and PMC is accessible from within that screen).
 */

import { Link } from "react-router-dom";
import { FaTimes, FaIdBadge, FaGraduationCap } from "react-icons/fa";

const MORE_ITEMS = [
  {
    name: "Alumni",
    path: "/alumni",
    icon: FaIdBadge,
    desc: "Legacy records of past batches",
  },
  {
    name: "Placement Masterclass",
    path: "/placement_masterclass",
    icon: FaGraduationCap,
    desc: "Alumni wisdom & placement stories",
  },
];

const MobileMoreMenu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end lg:hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Sheet */}
      <div
        className="relative w-full bg-[#120e0a] border-t border-[#4a341e] rounded-t-2xl p-5 pb-10 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-cinzel text-base font-bold text-[#f5ca73]">More</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1e1510] border border-[#4a341e] text-[#d4af37] flex items-center justify-center active:scale-90 transition-transform"
            aria-label="Close"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {MORE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1309] border border-[#3d2c1c] hover:border-[#a67c38] active:scale-98 transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-[#2a1c10] border border-[#6b4c27] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-cinzel font-bold text-sm text-[#f5ca73]">{item.name}</p>
                  <p className="text-xs text-[#9e886d] mt-0.5">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMoreMenu;
