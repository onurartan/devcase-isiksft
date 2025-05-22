"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useScreenSize } from "@/hooks/use-screen-size";
import { useMobile } from "@/hooks/use-mobile";

import DashboardNavbar from "./dashboard-navbar";
import DashboardSidebar from "./dashboard-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isIconOnly, setIsIconOnly] = useState(false);
  const pathname = usePathname();
  const isMobile = useMobile();
  const { screenWidth, isTablet } = useScreenSize();

  const toggleSidebar = () => {
    if (screenWidth <= 550) {
      if (isIconOnly) {
        setIsIconOnly(false);
      }

      setSidebarOpen((prev) => !prev);
    } else {
      setIsIconOnly((prev) => !prev);
    }
  };

  useEffect(() => {
    const shouldBeIconOnly = isTablet;
    setIsIconOnly((prev) =>
      prev !== shouldBeIconOnly ? shouldBeIconOnly : prev
    );
  }, [isTablet]);

  return (
    <div className="flex h-screen bg-[#F6F6F6]">
      {/* Sidebar */}
      <DashboardSidebar
        screenWidth={screenWidth}
        isIconOnly={isIconOnly}
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
        pathname={pathname}
        toggleSidebar={toggleSidebar}
      />

      {/* Header ve Tablo alanı */}
      <div className="flex flex-col flex-1 md:p-5 overflow-hidden overflow-y-auto">
        <DashboardNavbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 max-md:p-3">{children}</main>
      </div>
    </div>
  );
}
