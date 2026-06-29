"use client"
import { ChevronDown, MousePointerClick } from "lucide-react";
import { CiFileOn } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
}from "@/components/ui/dropdown-menu";

import { Logo } from "./logo";
import { Button } from "@/components/ui/button";




export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
      <Logo></Logo>

      <div className="w-full flex items-center gap-x-1 h-full">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="inline-flex items-center justify-center gap-1 rounded-md px-4 h-10 text-xs font-semibold tracking-widest uppercase whitespace-nowrap transition-all hover:bg-muted hover:text-foreground outline-none">
            File
            <ChevronDown className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem 
            onClick={()=>{}}// add functionality
            className="flex items-center gap-x-2">
              <CiFileOn className="size-8" />
              <div>
                <p>Open</p>
                <p className="text-xs text-muted-foreground">
                  Open a JSON file
                </p>
              </div>
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="mx-2 " />
        <Button 
        variant="ghost" 
        size="icon" 
        onClick={()=>{}} // add functionaity
        className={""}//add dynamic class
        >
          <MousePointerClick className="size-4">

          </MousePointerClick>
        </Button>
      </div>
    </nav>
  );
}