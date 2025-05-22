import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const SearchButton = ({ className }: { className?: string }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("text-[var(--dark-blue)] bg-[var(--gray-1)]", className)}
    >
      <Search className="w-5 h-5" />
    </Button>
  );
};

export default SearchButton;
