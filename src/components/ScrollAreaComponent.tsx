import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ScrollAreaComponent({ children }: Props) {
  return (
    <ScrollArea.Root className="ScrollAreaRoot">
      <ScrollArea.Viewport className="ScrollAreaViewport">
        <div style={{ margin: "0px 15px 0px 0px" }}>{children}</div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>

      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
}

export default ScrollAreaComponent;
