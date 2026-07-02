import {IceCream, type LucideIcon} from "lucide-react";
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button";

interface sidebarItemProps{
   icon:LucideIcon;
   label:string;
   isActive?:boolean;
   onClick:()=>void;
}

export const SidebarItem = ({
   icon:Icon,// remaaped icon to Icon
   label,
   isActive,
   onClick

}:sidebarItemProps)=>{
   return(
      <Button
      variant={"ghost"}
      onClick={onClick}
      className={cn(
         "w-full h-14 p-2 py-1 flex flex-col rounded-none", 
         isActive && "bg-muted text-primary"
      )}
      >
         <Icon className="size-4 stroke-2 shrink-0"/>
         <span className="mt-1 text-[10px]">
            {label}
         </span>
      </Button>
   )

}

