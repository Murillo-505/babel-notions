export function wrapSelection(
  value,
  start,
  end,
  before,
  after = before,
  placeholder = "texto",
) {
  const selected = value.slice(start, end) || placeholder;
  const next =
    value.slice(0, start) + before + selected + after + value.slice(end);

  return {
    next,
    selectionStart: start + before.length,
    selectionEnd: start + before.length + selected.length,
  };
}

export function prefixLines(value, start, end, prefix) {
  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  const lineEnd = value.indexOf("\n", end);
  const blockEnd = lineEnd === -1 ? value.length : lineEnd;
  const block = value.slice(lineStart, blockEnd);
  const lines = block.split("\n");
  const prefixed = lines
    .map((line) => (line.startsWith(prefix) ? line : `${prefix}${line}`))
    .join("\n");

  const next = value.slice(0, lineStart) + prefixed + value.slice(blockEnd);

  return {
    next,
    selectionStart: lineStart,
    selectionEnd: lineStart + prefixed.length,
  };
}

export function wrapBlock(
  value,
  start,
  end,
  before,
  after = before,
  placeholder = "texto",
) {
  const selected = value.slice(start, end) || placeholder;
  const next =
    value.slice(0, start) + before + selected + after + value.slice(end);

  return {
    next,
    selectionStart: start + before.length,
    selectionEnd: start + before.length + selected.length,
  };
}

export function insertLink(value, start, end) {
  const selected = value.slice(start, end) || "texto";
  const link = `[${selected}](url)`;

  return {
    next: value.slice(0, start) + link + value.slice(end),
    selectionStart: start + selected.length + 3,
    selectionEnd: start + selected.length + 6,
  };
}
