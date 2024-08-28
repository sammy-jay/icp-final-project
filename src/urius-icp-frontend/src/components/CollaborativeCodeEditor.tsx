"use client";

import * as Y from "yjs";
import { yCollab } from "y-codemirror.next";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useEffect, useRef, useState } from "react";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { useMyPresence, useRoom } from "@liveblocks/react";
import LiveCursors from "./LiveCursors";

export default function CollaborativeCodeEditor() {
  const room = useRoom();
  const [element, setElement] = useState<HTMLElement>();

  const cursorPanel = useRef(null);
  const [{ cursor }] = useMyPresence();

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  // Set up Liveblocks Yjs provider and attach CodeMirror editor
  useEffect(() => {
    let provider: LiveblocksYjsProvider<any, any, any, any>;
    let ydoc: Y.Doc;
    let view: EditorView;

    if (!element || !room) {
      return;
    }

    // Create Yjs provider and document
    ydoc = new Y.Doc();
    provider = new LiveblocksYjsProvider(room as any, ydoc);
    const ytext = ydoc.getText("codemirror");
    const undoManager = new Y.UndoManager(ytext);

    // Set up CodeMirror and extensions
    const state = EditorState.create({
      doc: ytext.toString(),
      extensions: [
        basicSetup,
        javascript(),
        yCollab(ytext, provider.awareness, { undoManager }),
      ],
    });

    // Attach CodeMirror to element
    view = new EditorView({
      state,
      parent: element,
    });

    return () => {
      ydoc?.destroy();
      provider?.destroy();
      view?.destroy();
    };
  }, [element, room]);

  return (
    <div ref={cursorPanel} className="h-full">
      <LiveCursors
        cursorPanel={cursorPanel}
        name="Tolu"
        color={["#FF0099", "#FF7A00"]}
      />
      <div
        ref={(el) => {
          ref(el);
        }}
        className="w-full rounded-md overflow-y-auto text-[18px] h-full border-[1px] border-gray-200"
      />
    </div>
  );
}
