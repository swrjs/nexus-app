/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/**
 * Capacitor Setup Module
 * Initialises Capacitor plugins for the mobile app:
 *   - Android hardware back button navigation
 *   - Status bar color matching the SECE pirate theme
 *   - Splash screen auto-hide
 *   - External link handling via Capacitor Browser
 */

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Safe dynamic imports — if Capacitor plugins aren't available (web browser),
// these will gracefully degrade.

let App, StatusBar, SplashScreen;

const isNative = () =>
  typeof window !== "undefined" && window.Capacitor?.isNativePlatform?.();

async function loadPlugins() {
  if (!isNative()) return;
  try {
    const appModule = await import("@capacitor/app");
    App = appModule.App;
  } catch (_) {}
  try {
    const sbModule = await import("@capacitor/status-bar");
    StatusBar = sbModule.StatusBar;
    const { Style } = sbModule;
    StatusBar.setStyle({ style: Style.Dark });
    StatusBar.setBackgroundColor({ color: "#110c08" });
  } catch (_) {}
  try {
    const ssModule = await import("@capacitor/splash-screen");
    SplashScreen = ssModule.SplashScreen;
    setTimeout(() => SplashScreen.hide(), 300);
  } catch (_) {}
}

/**
 * React component that sets up Capacitor hooks.
 * Place this inside <Router> so it has access to useNavigate.
 */
export function CapacitorSetup() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    loadPlugins();
  }, []);

  useEffect(() => {
    if (!isNative() || !App) return;

    // Handle Android hardware back button
    const handleBackButton = App.addListener("backButton", ({ canGoBack }) => {
      const { pathname } = location;
      // If on root map page, let Android handle it (exit app)
      if (pathname === "/" || pathname === "/map") {
        App.exitApp();
      } else {
        navigate(-1);
      }
    });

    return () => {
      handleBackButton.then((h) => h?.remove?.());
    };
  }, [navigate, location]);

  return null;
}

/**
 * Open an external URL using Capacitor Browser on native,
 * or window.open on web.
 */
export async function openExternalUrl(url) {
  if (isNative()) {
    try {
      const { Browser } = await import("@capacitor/browser");
      await Browser.open({ url, presentationStyle: "popover" });
      return;
    } catch (_) {}
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
