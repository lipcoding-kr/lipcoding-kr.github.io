import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const getPageId = (pathname: string): string => {
  if (pathname === "/" || pathname === "") return "2026";
  if (pathname.startsWith("/2025")) return "2025";
  const trimmed = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  return trimmed || "unknown";
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const pageId = getPageId(location.pathname);

    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("set", "page", pageId);
    }

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_title: pageId,
      });
    }
  }, [location.pathname, location.search]);
};
