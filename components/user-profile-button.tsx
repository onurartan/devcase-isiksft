import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const UseProfileButton = () => {
  const userPictureURL =
    "https://avatars.trymagic.xyz/?name=Patricia%20Peter&width=256&height=256&is_gradient=false&include_text=true&dynamic_gradient=false&dynamic_colors=true";
  return (
    <button className="flex items-center gap-1 active:scale-95 hover:bg-[#e3e3e3] p-1 rounded-xl transition-all cursor-pointer">
      <Image
        src={userPictureURL}
        width={35}
        height={35}
        alt="Patricia Peter User Profile"
        className="rounded-full"
      />
      <div className="hidden sm:block mr-2 text-start">
        <div className="font-semibold">Patricia Peter</div>
        <div className="text-xs text-[#8F8F8F]">Super Admin</div>
      </div>
      <ChevronDown className="w-4 h-4 ml-1 text-[var(--gray-4)]" />
    </button>
  );
};

export default UseProfileButton;
