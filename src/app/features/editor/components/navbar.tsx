"use client"
import { 
  ChevronDown, 
  MousePointerClick,
  Redo2,
  Undo2 ,
  Download
} from "lucide-react";
import { CiFileOn } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import {Hint} from "../../../../components/hint"

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
}from "@/components/ui/dropdown-menu";

import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { BsCloudCheck } from "react-icons/bs";
import { ActiveTool } from "../types";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeTool: ActiveTool;
  onChangeActiveTool:(tool:ActiveTool)=>void
}


export const Navbar = ({
  activeTool,
  onChangeActiveTool
}:NavbarProps) => {
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
              onClick={() => {}} // add functionality
              className="flex items-center gap-x-2"
            >
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
        <Hint label="select" side="bottom" sideOffset={10}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>onChangeActiveTool("select")} 
            className={cn(activeTool === "select" && "bg-gray-100")} 
          >
            <MousePointerClick className="size-4"></MousePointerClick>
          </Button>
        </Hint>

        <Hint label="undo" side="bottom" sideOffset={10}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // add functionaity
            className={""} //add dynamic class
          >
            <Undo2 className="size-4"></Undo2>
          </Button>
        </Hint>

        <Hint label="Redo" side="bottom" sideOffset={10}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // add functionaity
            className={""} //add dynamic class
          >
            <Redo2 className="size-4"></Redo2>
          </Button>
        </Hint>

        <Separator orientation="vertical" className="mx-2 " />

        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="size-[20px] text-muted-foreground" />
          <div className="text-xs text-muted-foreground">Saved</div>
        </div>

        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button size={"sm"} variant={"ghost"}>
                Export
                <Download className="size-4 ml-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={"min-w-60"}>
              <DropdownMenuItem
                className={"flex items-center gap-x-2"}
                onClick={() => {}} // TODO: Add functionality
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>JSON</p>
                  <p className="text-xs text-muted-foreground">
                    Save for later Editing
                  </p>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                className={"flex items-center gap-x-2"}
                onClick={() => {}} // TODO: Add functionality
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>PNG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for Sharing on Web
                  </p>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                className={"flex items-center gap-x-2"}
                onClick={() => {}} // TODO: Add functionality
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>JPG</p>
                  <p className="text-xs text-muted-foreground">
                    Best For Printing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"flex items-center gap-x-2"}
                onClick={() => {}} // TODO: Add functionality
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>SVG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for editing in vector software
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Add user Button Component */}
        </div>
      </div>
    </nav>
  );
}