import { shallow } from "@liveblocks/react";
import { useOthersMapped, useUpdateMyPresence } from "@liveblocks/react";
import React, { MutableRefObject, useEffect } from "react";
import Cursor from "./Cursor";
import { useBoundingClientRectRef } from "../utils/useBoundingClientRectRef";

type Props = {
  // The element that's used for pointer events and scroll position
  cursorPanel: MutableRefObject<HTMLElement | null>;
  name?: string;
  color: [string, string];
};

/**
 * This file shows you how to create a reusable live cursors component for your product.
 * The component takes a reference to another element ref `cursorPanel` and renders
 * cursors according to the location and scroll position of this panel.
 * Make sure that cursorPanel has a CSS position set, and that LiveCursors is placed inside
 */
export default function LiveCursors({ cursorPanel, name, color }: Props) {
  
  const updateMyPresence = useUpdateMyPresence();

  const others = useOthersMapped(
    (other) => ({
      cursor: other.presence.cursor,
      info: other.info,
    }),
    shallow
  );
  const rectRef = useBoundingClientRectRef(cursorPanel);

  useEffect(() => {
    if (!(cursorPanel?.current instanceof HTMLElement)) {
      console.warn(
        'Pass `ref` containing HTMLElement to `<LiveCursors scrollRef=""`.'
      );
      return;
    }

    // If cursorPanel, add live cursor listeners
    const updateCursor = (event: PointerEvent) => {
      if (!cursorPanel?.current) {
        return;
      }
      const x =
        event.clientX 
      const y =
        event.clientY

      updateMyPresence({
        cursor: {
          x: Math.round(x),
          y: Math.round(y),
        },
      });
    };

    const removeCursor = () => {
      updateMyPresence({
        cursor: null,
      });
    };

    cursorPanel.current.addEventListener("pointermove", updateCursor);
    cursorPanel.current.addEventListener("pointerleave", removeCursor);

    // Clean up event listeners
    const oldRef = cursorPanel.current;
    return () => {
      if (!oldRef) {
        return;
      }
      oldRef.removeEventListener("pointermove", updateCursor);
      oldRef.removeEventListener("pointerleave", removeCursor);
    };
  }, [updateMyPresence, cursorPanel]);

  return (
    <>
      {
        /**
         * Iterate over other users and display a cursor based on their presence
         */
        others.map(([id, other]) => {
          if (other.cursor == null) {
            return null;
          }

          return (
            <Cursor
              variant="basic"
              key={id}
              color={color}
              x={400}
              y={400}
              // x={other?.cursor?.x}
              // y={other?.cursor?.y}
            />
          );
        })
      }
    </>
  );
}
