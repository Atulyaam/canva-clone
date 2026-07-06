import { cn } from "@/lib/utils";
import type{ LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface ShapeToolProps{
   onClick: ()=>void;
   icon:LucideIcon | IconType,
   iconClassName?:string;
}


export const ShapeTool = ({
   onClick,
   icon:Icon,
   iconClassName
}:ShapeToolProps)=>{

   return (
      <button
      onClick={onClick}
      className="aspect-square size-20 border border-gray-100 rounded-md p-1 hover:bg-gray-200 transition"
      >
         <Icon className={cn(
           "h-full w-full", iconClassName 
         )} />
      </button>
   )
}