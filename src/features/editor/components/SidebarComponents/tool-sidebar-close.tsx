import { ChevronLeft } from "lucide-react";

interface ToolSidebarCloseProps {
   onClick: ()=>void;
};


export const ToolSidebarClose = ({
   onClick,
}:ToolSidebarCloseProps)=>{
   return (
      <button
         onClick={onClick}
         className="absolute -right-[1.80rem] h-[70px] top-1/2 -translate-y-1/2 flex items-center justify-center bg-white border border-l-0 rounded-r-xl shadow-md group px-1 hover:bg-muted transition"
      >
         <ChevronLeft className="size-4 text-black group-hover:opacity-75 transition"/>
      </button>
   )
}