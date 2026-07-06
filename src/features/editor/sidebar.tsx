"use client"

import { 
   LayoutTemplate,
   ImageIcon,
   Pencil,
   Shapes,
   Sparkles,
   Type,
   Settings,
   Upload,
   Layers2,
   SlidersHorizontal,
   Smile,
   Grid2x2,
   MousePointer2,
   Link,
 } from "lucide-react";
import { SidebarItem } from "./components/SidebarComponents/sidebar-item";
import { ActiveTool } from "./types"


interface SidebarProps {
   activeTool:ActiveTool;
   onChangeActiveTool:(tool:ActiveTool)=>void
}

export const Sidebar = (
   {
      activeTool,
      onChangeActiveTool,

   }:SidebarProps
)=>{
   return (
     <aside className="bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto">
       <ul className="flex flex-col">


         <SidebarItem
           icon={LayoutTemplate}
           label="Templates"
           isActive={activeTool === "templates"}
           onClick={() => onChangeActiveTool("templates")}
         />

         <SidebarItem
           icon={ImageIcon}
           label="Image"
           isActive={activeTool === "image"}
           onClick={() => onChangeActiveTool("image")}
         />

         <SidebarItem
           icon={Type}
           label="Text"
           isActive={activeTool === "text"}
           onClick={() => onChangeActiveTool("text")}
         />

         <SidebarItem
           icon={Shapes}
           label="Shapes"
           isActive={activeTool === "shapes"}
           onClick={() => onChangeActiveTool("shapes")}
         />

         <SidebarItem
           icon={Pencil}
           label="Draw"
           isActive={activeTool === "draw"}
           onClick={() => onChangeActiveTool("draw")}
         />

         <SidebarItem
           icon={Smile}
           label="Stickers"
           isActive={activeTool === "stickers"}
           onClick={() => onChangeActiveTool("stickers")}
         />

         <SidebarItem
           icon={Upload}
           label="Upload"
           isActive={activeTool === "upload"}
           onClick={() => onChangeActiveTool("upload")}
         />

         <SidebarItem
           icon={Layers2}
           label="Layers"
           isActive={activeTool === "layers"}
           onClick={() => onChangeActiveTool("layers")}
         />

         <SidebarItem
           icon={SlidersHorizontal}
           label="Filter"
           isActive={activeTool === "filter"}
           onClick={() => onChangeActiveTool("filter")}
         />

         <SidebarItem
           icon={Sparkles}
           label="AI"
           isActive={activeTool === "ai"}
           onClick={() => onChangeActiveTool("ai")}
         />

         <SidebarItem
           icon={Grid2x2}
           label="Grid"
           isActive={activeTool === "grid"}
           onClick={() => onChangeActiveTool("grid")}
         />

         <SidebarItem
           icon={Link}
           label="Links"
           isActive={activeTool === "links"}
           onClick={() => onChangeActiveTool("links")}
         />

         <SidebarItem
           icon={Settings}
           label="Settings"
           isActive={activeTool === "settings"}
           onClick={() => onChangeActiveTool("settings")}
         />

       </ul>
     </aside>
   );
}