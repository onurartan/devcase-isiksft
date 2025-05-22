"use client";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  PlusCircle,
  RefreshCw,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductTable } from "@/components/product-table";
import { TrendDownIcon, TrendUPIcon } from "@/constants/icons";
import { statsCards } from "@/constants/items";
import { useProductContext } from "@/context/ProductContext";
import getPageNumbers from "@/utils/getPageNumbers";
import { useMemo } from "react";
import SearchButton from "./search-button";

export function ProductDashboard() {
  const { data, isLoading, page, setPage } = useProductContext();

  const totalPages = data?.totalPages || 1;
  const totalProducts = data?.totalItems || 0;
  const currentPage = data?.currentPage;
  const pageNumbers = useMemo(() => {
    return getPageNumbers(page, totalPages);
  }, [page, totalPages]);

  const pageSize = data?.products?.length ?? 0;
  const startIndex = (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, totalProducts);

  return (
    <div className="mt-5">
      <div className="mb-6">
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {statsCards.map((card, index) => (
            <div key={index} className="bg-[#ffffff] p-4 rounded-lg shadow-box">
              <div className="text-sm text-[var(--gray-4)] mb-1">
                {card.title}
              </div>
              <div className="text-2xl font-bold mb-1 text-[var(--black-1)]">
                {card.value}
              </div>
              <div
                className={`flex items-center text-sm ${
                  card.isPositive
                    ? "text-[var(--dark-green)]"
                    : "text-[var(--soft-orange)]"
                }`}
              >
                {card.isPositive ? (
                  <TrendUPIcon className="w-4 h-4 mr-1" />
                ) : (
                  <TrendDownIcon className="w-4 h-4 mr-1" />
                )}
                <span>{card.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-[#ffffff] rounded-lg shadow-box p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-lg font-semibold mb-2 md:mb-0">All Products</h2>

          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
            <div className="relative w-full hidden md:block sm:w-auto">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--dark-blue)]"
                size={16}
              />
              <Input
                placeholder="Search item..."
                className="pl-10 w-full sm:w-auto bg-[#f8f9fa] border-[#e9ecef] text-[var(--dark-blue)]"
              />
            </div>

            <div className="flex gap-2">
              <SearchButton className="border md:hidden" />

              <Button
                variant="ghost"
                size="icon"
                className="text-[var(--dark-blue)] border hidden md:flex"
              >
                <RefreshCw className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-[var(--dark-blue)] border hidden md:flex"
              >
                <Calendar className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-[var(--dark-blue)] border"
              >
                <MoreVertical className="w-5 h-5" />
              </Button>

              <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-[#ffffff]">
                <PlusCircle className="w-4 h-4 mr-2 text-[var(--green)]" />
                Add New Product
              </Button>
            </div>
          </div>
        </div>

        <ProductTable />

        {/* Pagination */}
        {isLoading && ""}
        {!isLoading && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-[var(--dark-blue)]">
            <div className="text-[var( --white-gray)]">
              {" "}
              Showing{" "}
              <span className="text-[#333] font-semibold">
                {" "}
                {startIndex} to {endIndex}
              </span>{" "}
              of{" "}
              <span className="text-[#333] font-semibold">{totalProducts}</span>{" "}
              products
            </div>

            <div className="flex items-center mt-4 sm:mt-0">
              <Button
                variant="ghost"
                size="icon"
                className="text-[var(--dark-blue)]"
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
                disabled={page === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {pageNumbers.map((page) => (
                <Button
                  key={page}
                  variant="ghost"
                  size="sm"
                  className={`mx-1 ${
                    currentPage === page
                      ? "bg-[#4f46e5] text-white"
                      : "text-[var(--dark-blue)] border"
                  }`}
                  onClick={() => setPage(page)}
                  disabled={page == currentPage}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                className="text-[var(--dark-blue)]"
                onClick={() => {
                  if (page < totalPages) {
                    setPage(page + 1);
                  }
                }}
                disabled={page === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
