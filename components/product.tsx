import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { CircleCheck } from "lucide-react";
import type { Product } from "@/types";
import { CheckedState } from "@radix-ui/react-checkbox";
import { DotsThreeCircle, OverdueIcon } from "@/constants/icons";

interface ProductProps {
  product: Product;
  isSelected: boolean;
  onSelect: (id: number, selected: CheckedState) => void;
}

export function Product({ product, isSelected, onSelect }: ProductProps) {
  return (
    <tr
      key={product.id}
      className={`border-b border-[#e9ecef] hover:bg-[#f9f9fb] ${
        isSelected
          ? "bg-white border-l-4 border-l-[var(--blue)] border border-[var(--gray-2)]"
          : ""
      }`}
    >
      <td className="p-3 truncate">
        <div className="flex items-center">
          <Checkbox
            id={`product-${product.id}`}
            checked={isSelected}
            onCheckedChange={(e) => onSelect(product.id, e)}
          />
          <div className="ml-4 flex items-center truncate">
            <div className="w-10 h-10 flex items-center justify-center bg-[#e9ecef] rounded-md mr-3 overflow-hidden">
              <Image
                src={product.imageUrl}
                width={50}
                height={50}
                alt={product.description || product.name}
                className="object-cover"
              />
            </div>
            <div className="truncate">
              <div className="font-medium truncate">{product.name}</div>
              <div className="text-xs text-[#6c757d] truncate">
                {product.category}
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="p-3 text-sm truncate">{product.id}</td>
      <td className="p-3 text-sm hidden lg:table-cell truncate text-[var(--gray-3)]">
        Dec 22, 2023
      </td>
      <td className="p-3 text-sm  table-cell truncate">
        ${product.price.toLocaleString() || "-"}
      </td>
      <td className="p-3  table-cell">
        <div
          className={`flex items-center justify-center h-[30px] w-[120px] px-2.5 py-0.5 rounded-md text-[14px] font-medium ${
            product.status
              ? "bg-[var(--dark-green-50)] text-[var(--dark-green)]"
              : "bg-[var(--soft-orange-50)] text-[var(--soft-orange)]"
          }`}
        >
          <span className="w-full text-center flex items-center gap-2 justify-center ">
            {product.status == true && <CircleCheck className="w-4.5 h-4.5" />}
            {product.status == false && <OverdueIcon className="w-5 h-5" />}
            {product.status === true && "Completed"}
            {product.status === false && "Canceled"}
          </span>
        </div>
      </td>
      <td className="p-3 text-center">
        <button className="p-0 text-[var(--gray-3)] cursor-pointer active:scale-95">
          <DotsThreeCircle className="w-6 h-6" />
        </button>
      </td>
    </tr>
  );
}
