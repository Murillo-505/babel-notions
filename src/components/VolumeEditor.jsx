import { useRef, useState } from "react";

import MarkdownPreview from "./MarkdownPreview";

import {
  insertLink,
  prefixLines,
  wrapBlock,
  wrapSelection,
} from "../utils/markdownFormatting";

const TOOLBAR_ACTIONS = [
  { id: "bold", label: "B", title: "Negrito (Ctrl+B)", className: "font-bold" },
  { id: "italic", label: "I", title: "Itálico (Ctrl+I)", className: "italic" },
  { id: "h2", label: "H", title: "Título" },
  { id: "list", label: "Lista", title: "Lista com marcadores" },
  { id: "quote", label: "Citação", title: "Citação" },
  { id: "code", label: "</>", title: "Bloco de código" },
  { id: "link", label: "Link", title: "Inserir link" },
];

function applyFormat(action, value, start, end) {
  switch (action) {
    case "bold":
      return wrapSelection(value, start, end, "**");
    case "italic":
      return wrapSelection(value, start, end, "*");
    case "h2":
      return prefixLines(value, start, end, "## ");
    case "list":
      return prefixLines(value, start, end, "- ");
    case "quote":
      return prefixLines(value, start, end, "> ");
    case "code":
      return wrapBlock(value, start, end, "```\n", "\n```", "código");
    case "link":
      return insertLink(value, start, end);
    default:
      return { next: value, selectionStart: start, selectionEnd: end };
  }
}

function VolumeEditor({ value, onChange, editorRef, placeholder }) {
  const [mode, setMode] = useState("write");
  const localRef = useRef(null);
  const textareaRef = editorRef ?? localRef;

  function updateContent(next, selectionStart, selectionEnd) {
    onChange(next);

    requestAnimationFrame(() => {
      const element = textareaRef.current;

      if (!element) return;

      element.focus();
      element.setSelectionRange(selectionStart, selectionEnd);
    });
  }

  function handleFormat(action) {
    const element = textareaRef.current;

    if (!element) return;

    const { next, selectionStart, selectionEnd } = applyFormat(
      action,
      value,
      element.selectionStart,
      element.selectionEnd,
    );

    updateContent(next, selectionStart, selectionEnd);
  }

  function handleKeyDown(event) {
    if (!(event.ctrlKey || event.metaKey)) return;

    if (event.key === "b") {
      event.preventDefault();
      handleFormat("bold");
    }

    if (event.key === "i") {
      event.preventDefault();
      handleFormat("italic");
    }
  }

  return (
    <div className="volume-editor-shell">
      <div className="volume-editor-toolbar">
        <div className="flex flex-wrap gap-1">
          {TOOLBAR_ACTIONS.map((action) => (
            <button
              key={action.id}
              type="button"
              title={action.title}
              disabled={mode === "preview"}
              onClick={() => handleFormat(action.id)}
              className={`volume-editor-toolbar-btn ${action.className ?? ""}`}
            >
              {action.label}
            </button>
          ))}
        </div>

        <div className="volume-editor-tabs">
          <button
            type="button"
            className={`volume-editor-tab ${mode === "write" ? "volume-editor-tab-active" : ""}`}
            onClick={() => setMode("write")}
          >
            Escrever
          </button>
          <button
            type="button"
            className={`volume-editor-tab ${mode === "preview" ? "volume-editor-tab-active" : ""}`}
            onClick={() => setMode("preview")}
          >
            Visualizar
          </button>
        </div>
      </div>

      {mode === "write" ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="volume-editor input w-full resize-y"
        />
      ) : (
        <div className="volume-editor-preview">
          <MarkdownPreview content={value} />
        </div>
      )}
    </div>
  );
}

export default VolumeEditor;
