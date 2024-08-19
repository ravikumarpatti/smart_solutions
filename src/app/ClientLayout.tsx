"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "../context/ThemeContext";
import Loader from "../components/Loader/Loader";
import "../../styles/global.css";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);
  const [component, setComponent] = useState<ReactNode>(<Loader />);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      // Set loader initially
      // setComponent(<Loader />);

      // Simulate loading delay and then display children
      const handleRouteChangeComplete = () => {
        setTimeout(() => setComponent(children), 1000);
      };

      handleRouteChangeComplete();
      prevPathname.current = pathname; // Update the previous pathname
    }
  }, [pathname, children]);

  return <ThemeProvider>{component}</ThemeProvider>;
}
