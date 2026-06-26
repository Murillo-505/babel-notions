function renderInline(text) {
  const parts = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("**")) {
      parts.push(
        <strong key={`${match.index}-b`}>{token.slice(2, -2)}</strong>,
      );
    } else if (token.startsWith("*")) {
      parts.push(<em key={`${match.index}-i`}>{token.slice(1, -1)}</em>);
    } else if (token.startsWith("`")) {
      parts.push(
        <code key={`${match.index}-c`} className="markdown-inline-code">
          {token.slice(1, -1)}
        </code>,
      );
    } else if (token.startsWith("[")) {
      const labelEnd = token.indexOf("]");
      const urlStart = token.indexOf("(") + 1;
      const urlEnd = token.lastIndexOf(")");
      parts.push(
        <a
          key={`${match.index}-a`}
          href={token.slice(urlStart, urlEnd)}
          target="_blank"
          rel="noreferrer"
          className="markdown-link"
        >
          {token.slice(1, labelEnd)}
        </a>,
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function MarkdownPreview({ content }) {
  if (!content.trim()) {
    return (
      <p className="markdown-preview-empty text-sm italic text-zinc-600">
        Nada para visualizar ainda.
      </p>
    );
  }

  const blocks = [];
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  let index = 0;
  let listItems = null;
  let codeLines = null;

  function flushList() {
    if (!listItems) return;

    blocks.push(
      <ul key={`list-${index}`} className="markdown-list">
        {listItems.map((item, itemIndex) => (
          <li key={itemIndex}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = null;
    index += 1;
  }

  function flushCode() {
    if (!codeLines) return;

    blocks.push(
      <pre key={`code-${index}`} className="markdown-code-block">
        <code>{codeLines.join("\n")}</code>
      </pre>,
    );
    codeLines = null;
    index += 1;
  }

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushList();

      if (codeLines) {
        flushCode();
      } else {
        codeLines = [];
      }

      continue;
    }

    if (codeLines) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushList();
      continue;
    }

    if (line.startsWith("# ")) {
      flushList();
      blocks.push(
        <h1 key={`h1-${index}`} className="markdown-h1">
          {renderInline(line.slice(2))}
        </h1>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2 key={`h2-${index}`} className="markdown-h2">
          {renderInline(line.slice(3))}
        </h2>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      blocks.push(
        <h3 key={`h3-${index}`} className="markdown-h3">
          {renderInline(line.slice(4))}
        </h3>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      flushList();
      blocks.push(
        <blockquote key={`quote-${index}`} className="markdown-quote">
          {renderInline(line.slice(2))}
        </blockquote>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      if (!listItems) {
        listItems = [];
      }

      listItems.push(line.slice(2));
      continue;
    }

    flushList();
    blocks.push(
      <p key={`p-${index}`} className="markdown-paragraph">
        {renderInline(line)}
      </p>,
    );
    index += 1;
  }

  flushList();
  flushCode();

  return <div className="markdown-preview">{blocks}</div>;
}

export default MarkdownPreview;
