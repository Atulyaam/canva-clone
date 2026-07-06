import { cn } from "@/lib/utils";
import { ActiveTool } from "../../types";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShapeTool } from "./shape-tool";

// Basic shapes
import {
  FaCircle,
  FaSquare,
  FaHeart,
  FaStar,
  FaPlay,
  FaCloud,
  FaFlag,
} from "react-icons/fa";

import {
  IoTriangle,
  IoDiamond,
  IoChatbubble,
  IoEllipse,
  IoSquare,
  IoShieldCheckmark,
} from "react-icons/io5";

// Tb shapes (outline style)
import {
  TbHexagon,
  TbOctagon,
  TbPentagon,
  TbRectangle,
  TbStar,
  TbCloud,
  TbHeart,
  TbBolt,
  TbDroplet,
  TbArrowBadgeRight,
  TbArrowBadgeLeft,
  TbArrowBadgeUp,
  TbArrowBadgeDown,
  TbDiamond,
} from "react-icons/tb";

// Pi shapes
import {
  PiMoonFill,
  PiLightningFill,
  PiDropFill,
  PiChatCircleFill,
} from "react-icons/pi";

// Bi shapes
import { BiSolidRectangle } from "react-icons/bi";
import {
  PiArrowRightFill,
  PiArrowLeftFill,
  PiArrowUpFill,
  PiArrowDownFill,
} from "react-icons/pi";
import { RiDonutChartFill } from "react-icons/ri";
import { MdOutlineCropLandscape } from "react-icons/md";

interface ShapesSidebarProps {
  editor: any; // TODO:Change type
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const ShapeSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ShapesSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };
  return (
    <aside
      className={cn(
        // yaha per height footer ke hisab se calculate ho rahi hai toh as footer icn change the height
        "bg-white relative border-r z-[40] w-[360px] h-[calc(100%-52px)] flex flex-col overflow-hidden",
        activeTool === "shapes" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Shapes"
        description="Add shapes to your canvas"
      />
      <ScrollArea>
        <div className="grid grid-cols-3 gap-3 p-4">
          {/* Basic filled */}
          <ShapeTool onClick={() => editor?.addCircle()} icon={FaSquare} />
          <ShapeTool onClick={() => {}} icon={FaCircle} />
          <ShapeTool onClick={() => {}} icon={IoEllipse} />
          <ShapeTool onClick={() => {}} icon={IoTriangle} />
          <ShapeTool
            onClick={() => {}}
            icon={IoTriangle}
            iconClassName="rotate-180"
          />
          <ShapeTool onClick={() => {}} icon={IoDiamond} />
          <ShapeTool onClick={() => {}} icon={TbDiamond} />
          <ShapeTool onClick={() => {}} icon={FaStar} />
          <ShapeTool onClick={() => {}} icon={TbStar} />

          {/* Polygons */}
          <ShapeTool onClick={() => {}} icon={TbHexagon} />
          <ShapeTool onClick={() => {}} icon={TbOctagon} />
          <ShapeTool onClick={() => {}} icon={TbPentagon} />

          {/* Rectangles */}
          <ShapeTool onClick={() => {}} icon={TbRectangle} />
          <ShapeTool onClick={() => {}} icon={BiSolidRectangle} />
          <ShapeTool onClick={() => {}} icon={MdOutlineCropLandscape} />
          <ShapeTool onClick={() => {}} icon={IoSquare} />

          {/* Arrows */}
          <ShapeTool onClick={() => {}} icon={PiArrowRightFill} />
          <ShapeTool onClick={() => {}} icon={PiArrowLeftFill} />
          <ShapeTool onClick={() => {}} icon={PiArrowUpFill} />
          <ShapeTool onClick={() => {}} icon={PiArrowDownFill} />
          <ShapeTool onClick={() => {}} icon={TbArrowBadgeRight} />
          <ShapeTool onClick={() => {}} icon={TbArrowBadgeLeft} />
          <ShapeTool onClick={() => {}} icon={TbArrowBadgeUp} />
          <ShapeTool onClick={() => {}} icon={TbArrowBadgeDown} />

          {/* Nature & misc */}
          <ShapeTool onClick={() => {}} icon={FaCloud} />
          <ShapeTool onClick={() => {}} icon={TbCloud} />
          <ShapeTool onClick={() => {}} icon={TbDroplet} />
          <ShapeTool onClick={() => {}} icon={PiDropFill} />
          <ShapeTool onClick={() => {}} icon={PiMoonFill} />
          <ShapeTool onClick={() => {}} icon={TbBolt} />
          <ShapeTool onClick={() => {}} icon={PiLightningFill} />
          <ShapeTool onClick={() => {}} icon={FaFlag} />

          {/* Hearts & chat */}
          <ShapeTool onClick={() => {}} icon={FaHeart} />
          <ShapeTool onClick={() => {}} icon={TbHeart} />
          <ShapeTool onClick={() => {}} icon={IoChatbubble} />
          <ShapeTool onClick={() => {}} icon={PiChatCircleFill} />
          <ShapeTool onClick={() => {}} icon={IoShieldCheckmark} />

          {/* Play */}
          <ShapeTool onClick={() => {}} icon={FaPlay} />
          <ShapeTool
            onClick={() => {}}
            icon={FaPlay}
            iconClassName="rotate-180"
          />
          <ShapeTool onClick={() => {}} icon={RiDonutChartFill} />
        </div>
      </ScrollArea>

      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
