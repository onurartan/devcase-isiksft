import type React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
  subItems?: Array<{ icon: React.ReactNode; label: string; href: string }>;
  isIconOnly: boolean;
  pathname: string;
}

import { useState } from "react";

export function SidebarItem({
  icon,
  label,
  href,
  badge,
  subItems,
  isIconOnly,
  pathname,
}: SidebarItemProps) {
  const isActive = pathname === href;
  const hasSubmenu = subItems && subItems.length > 0;

  const [isOpen, setIsOpen] = useState(isActive);

  const toggleSubMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={hasSubmenu ? toggleSubMenu : undefined}
        className={cn(
          "flex items-center w-full px-4 pl-2 py-2 text-sm rounded-lg text-left",
          isActive
            ? "bg-[var(--blue)] text-white"
            : "text-[var(--gray-4)] hover:bg-[#f8f9fa]",
          isIconOnly && "justify-center"
        )}
        title={isIconOnly ? label : undefined}
      >
        <span
          className={cn(
            isIconOnly ? "mr-0" : "mr-2",
            hasSubmenu && "text-[var(--green)]"
          )}
        >
          {icon}
        </span>
        {!isIconOnly && <span>{label}</span>}
        {!isIconOnly && hasSubmenu && (
          <ChevronDown
            className={cn(
              "w-4 h-4 ml-auto transition-transform",
              isOpen && "rotate-180"
            )}
          />
        )}
        {badge && (
          <span
            className={cn(
              "ml-auto text-xs font-semibold rounded-full flex items-center justify-center",
              isIconOnly
                ? "absolute top-0 right-0 w-4 h-4"
                : "w-6 h-6 bg-[var(--green)] text-[var(--black-1)]"
            )}
          >
            {badge}
          </span>
        )}
      </button>

      {!isIconOnly && isOpen && hasSubmenu && (
        <div className="">
          {subItems.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={cn(
                "flex items-center px-2 py-1.5 text-sm rounded-none bg-[#f5f5f5]",
                pathname === subItem.href
                  ? "text-[var(--blue)] "
                  : "text-[#6c757d] hover:text-[var(--blue)] "
              )}
            >
              {subItem.icon}
              <span className="ml-2">{subItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
