
import { fabric } from "fabric";

import { useCallback, useState } from "react";
import { useAutoResize } from './use_auto_resize';

export const useEditor = ()=>{
   const[canvas,setCanvas] = useState<fabric.Canvas| null>(null);

   const[container,setContainer] = useState<HTMLDivElement|null>(null);



   // --------------------------------
   // this hook make work space always in center in all window sizes 
   useAutoResize({
      canvas,
      container,
   });


// ------------------------------------
   const init = useCallback(({
      initialCanvas,
      initialContainer,
   }:{
      initialCanvas:fabric.Canvas;
      initialContainer:HTMLDivElement
   })=>{
      // Styling the controles of the workkspace pages 
      fabric.Object.prototype.set({
         cornerColor: "FFF",
         cornerStyle:"circle",
         borderColor:"#3b82f6",
         borderScaleFactor:1.5,
         transparentCorners:false,
         borderOpacityWhenMoving:1,
         cornerStrokeColor:"#3b82f6",

      })
      const initialWorkSpace = new fabric.Rect({
         width:600,
         height:500,
         name:"clip",
         fill:"white",
         selectable:false,
         hasControls:false,
         shadow: new fabric.Shadow({
            color:"rgba(0,0,0,0.8)",
            blur:5,
         })
      })

      const test = new fabric.Rect({
         width:100,
         height:100,
         fill:"black"
      })

      initialCanvas.setWidth(
         initialContainer.offsetWidth,
      )
      initialCanvas.setHeight(
         initialContainer.offsetHeight,
      )

      initialCanvas.add(initialWorkSpace);
      initialCanvas.centerObject(initialWorkSpace);
      initialCanvas.clipPath= initialWorkSpace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);

      initialCanvas.add(test);
      initialCanvas.centerObject(test);
      // initialCanvas.clipPath = test;
   
   },[]);
   return {init};
}
