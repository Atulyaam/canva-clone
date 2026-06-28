import { fabric } from "fabric";
import { useCallback, useEffect } from "react";

interface useAutoResizeProps{
   canvas:fabric.Canvas |null,
   container:HTMLDivElement|null
}

export const useAutoResize = ({
   canvas,
   container,
}:useAutoResizeProps)=>{
   // -----autozoom function jo rezise ke hisab se auto zoom karegaa--------------------
   const autoZoom = useCallback(()=>{
      if(!container || !canvas) return;

      const height  = container.offsetHeight;
      const width = container.offsetWidth;
      canvas.setWidth(width);
      canvas.setHeight(height);

      const center = canvas.getCenter();
      const zoomRatio = 0.85;
      const localWorkSpace = canvas
      .getObjects()
      .find((object)=>object.name==="clip");

// @ts-ignore
      const scale = fabric.util.findScaleToFit(localWorkSpace,{
         width:width,
         height:height
      });

      const zoom = zoomRatio*scale;
      canvas.setViewportTransform(fabric.iMatrix.concat());
      canvas.zoomToPoint(new fabric.Point(center.left,center.top),zoom);

      if(!localWorkSpace) return;

      const workspaceCenter = localWorkSpace.getCenterPoint();
      const viewportTransform = canvas.viewportTransform;
      if(
         canvas.width=== undefined ||
         canvas.height=== undefined ||
         !viewportTransform
      ){
         return;
      }

      // Bug fix: was /20 (typo), should be /2 to center horizontally
      viewportTransform[4] = canvas.width/2-workspaceCenter.x*viewportTransform[0];
      viewportTransform[5] = canvas.height/2- workspaceCenter.y * viewportTransform[3];
      canvas.setViewportTransform(viewportTransform);

      localWorkSpace.clone((cloned:fabric.Rect)=>{
         canvas.clipPath = cloned;
         canvas.requestRenderAll();
      })

   },[canvas,container])

   // -----------ye auto rezie karega ------
   useEffect(()=>{
      let resizeObserver: ResizeObserver|null = null
      if(canvas && container){
         resizeObserver = new ResizeObserver(()=>{
            // Bug fix: was just referencing autoZoom, not calling it
            autoZoom();
         });
         resizeObserver.observe(container);
         // Bug fix: call autoZoom once on mount so canvas centers immediately
         autoZoom();
      }
      return ()=>{
         if(resizeObserver){
            resizeObserver.disconnect();
         }
      }

   },[
      canvas,
      container,
      autoZoom,
   ])
}