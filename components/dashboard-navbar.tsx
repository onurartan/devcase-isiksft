"use client";

import type React from "react";

import { Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import UseProfileButton from "./user-profile-button";
import {
  BurgerMenuIcon,
  NotificationIcon,
  SettingsIcon,
} from "@/constants/icons";
import { cn } from "@/lib/utils";
import { ThemeToggleSwitch } from "./theme-toggle-switch";
import Logo from "./Logo";

interface IDasboardNabarProps {
  toggleSidebar: () => void;
}

type NButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const DashboardNavbar = ({ toggleSidebar }: IDasboardNabarProps) => {
  return (
    <header className="flex items-center px-5 py-4 md:rounded-xl max-md:border-b max-md:border-b-[var(--gray-2)] bg-[#ffffff]">
      <nav className="w-full h-full flex items-center justify-between">
        <Logo onlyIcon className="sm:hidden" width={35} />

        <div className="hidden md:block ">
          <h3 className=" md:text-xl font-bold">Products</h3>
          <p className=" **:text-[var(--gray-4)] text-[16px]">
            Manage your products
          </p>
        </div>

        <div className="hidden sm:flex ml-auto  items-center space-x-4">
          <ThemeToggleSwitch />

          <div className="hidden md:block w-px h-8 bg-[#C2C2C2] mx-4" />

          <div className="hidden lg:block">
            <NButton>
              <Globe className="w-5 h-5" />
            </NButton>
          </div>

          <div className="relative hidden lg:block">
            <NButton>
              <div className="relative">
                <NotificationIcon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-[var(--green)] text-[var(--black-1)]">
                  12
                </span>
              </div>
            </NButton>
          </div>

          <div className="hidden lg:block relative">
            <NButton>
              <Mail className="w-5 h-5" />
            </NButton>
          </div>

          <div className="hidden lg:block relative">
            <NButton>
              <SettingsIcon className="w-6 h-6" />
            </NButton>
          </div>

          <UseProfileButton />
        </div>

        <Button className="md:hidden" onClick={toggleSidebar}>
          <BurgerMenuIcon className="w-8 h-8 text-black" />
        </Button>
      </nav>
    </header>
  );
};

/**
 * Navbar Buttonu
 */
export const NButton = ({ className, children }: NButtonProps) => {
  return (
    <button
      className={cn(
        "p-1 cursor-pointer w-[35px] h-[35px] flex items-center justify-center active:scale-95 hover:bg-[#f2f2f2] rounded-lg text-[var(--gray-4)]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default DashboardNavbar;
