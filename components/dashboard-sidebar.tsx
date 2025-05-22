"use client";

import type React from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Logo from "./Logo";
import { SidebarItem } from "./sidebar-item";
import {
  analyticsItems,
  appsItems,
  mainMenuItems,
  settingsItems,
} from "@/constants/items";
import { BurgerMenuIcon } from "@/constants/icons";
import SearchButton from "./search-button";

interface IDashboardSidebar {
  screenWidth: number;
  isIconOnly: boolean;
  sidebarOpen: boolean;
  isMobile: boolean;
  pathname: string;
  toggleSidebar: () => void;
}

interface SidebarSectionProps {
  title: string;
  items: any[];
  isIconOnly: boolean;
  pathname: string;
}

function getTitleByIndex(index: number) {
  switch (index) {
    case 0:
      return "MAIN MENU";
    case 1:
      return "ANALYTICS";
    case 2:
      return "APPS";
    case 3:
      return "SETTINGS";
    default:
      return "";
  }
}

const DashboardSidebar = ({
  screenWidth,
  isIconOnly,
  sidebarOpen,
  isMobile,
  pathname,
  toggleSidebar,
}: IDashboardSidebar) => {
  const isMobileScreen = screenWidth <= 550;

  return (
    <>
      {isMobileScreen && sidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={cn(
          "h-full bg-white border-r border-[#e9ecef] transition-all duration-50 ease-in-out z-50",
          isIconOnly ? "w-20" : "w-64",
          isMobileScreen
            ? sidebarOpen
              ? "fixed top-0 left-0 translate-x-0"
              : "fixed top-0 left-0 -translate-x-full"
            : "static",
          "overflow-hidden",
          "block"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center w-full justify-between h-16 px-4 border-b border-[#e9ecef]">
            <Link href="/" className="flex items-center gap-2">
              <Logo
                onlyIcon={isIconOnly}
                className="min-w-[25px]"
                width={isIconOnly ? 30 : 100}
              />
            </Link>

            {!isMobileScreen && (
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex  items-center justify-center text-[#6c757d]"
                onClick={toggleSidebar}
              >
                <BurgerMenuIcon className="w-5 h-5" />
              </Button>
            )}

            {isMobileScreen && (
              <Button
                variant="ghost"
                size="icon"
                className="text-[#6c757d] md:hidden"
                onClick={toggleSidebar}
              >
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>

          {!isIconOnly && (
            <div className="p-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d]"
                  size={18}
                />
                <Input
                  placeholder="Search here"
                  className="pl-10 bg-[#f8f9fa] border-[#e9ecef] text-[#6c757d]"
                />
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto space-y-3 hide-scrollbar">
            {isIconOnly && (
              <div className="w-full h-auto flex items-center justify-center pt-4">
                <SearchButton />
              </div>
            )}
            {[mainMenuItems, analyticsItems, appsItems, settingsItems].map(
              (items, index) => (
                <div key={index}>
                  <SidebarSection
                    title={getTitleByIndex(index)}
                    items={items}
                    isIconOnly={isIconOnly}
                    pathname={pathname}
                  />
                  {isIconOnly &&
                    index !==
                      [mainMenuItems, analyticsItems, appsItems, settingsItems]
                        .length -
                        1 && (
                      <hr className="h-[1.5px] w-[35px] mx-auto bg-[var(--gray-4)] my-2" />
                    )}
                </div>
              )
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarSection = ({
  title,
  items,
  isIconOnly,
  pathname,
}: SidebarSectionProps) => (
  <div className="px-3 py-2 ">
    {!isIconOnly && (
      <h3 className="px-4 py-2 text-xs font-semibold leading-0.5 text-[#C7C7C7]">
        {title}
      </h3>
    )}
    <div
      className={cn("space-y-1", isIconOnly && "flex flex-col items-center")}
    >
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
          badge={item.badge}
          subItems={item.subItems}
          isIconOnly={isIconOnly}
          pathname={pathname}
        />
      ))}
    </div>
  </div>
);

export default DashboardSidebar;
