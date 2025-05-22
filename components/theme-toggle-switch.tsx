"use client";

import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export const ThemeToggleSwitch = () => {

  return (
    <div className="hidden lg:flex items-center space-x-3">
      <Sun className="w-5 h-5 text-[var(--blue)]" />
      <Switch
        className="h-[25px] w-[40px] data-[state=checked]:bg-blue-800 transition-colors"
        thumbClassName="h-[20px] w-[20px] data-[state=checked]:translate-x-[18px] translate-x-0 transition-transform bg-white rounded-full"
      />
      <Moon className="w-5 h-5 text-[var(--gray-4)] " />
    </div>
  );
};
