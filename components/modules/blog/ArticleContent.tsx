import React from "react";
import Image from "next/image";

export interface ContentBlock {
  type: string;
  text?: string;
  id?: string;
  src?: string;
  alt?: string;
  layout?: string;
  imageSrc?: string;
  imageAlt?: string;
  content?: ContentBlock[];
  items?: (string | { text?: string; question?: string; answer?: string })[];
  headers?: string[];
  rows?: string[][];
}

interface ArticleContentProps {
  content: string | ContentBlock[];
}

function renderInlineText(text: string): React.ReactNode[] {
  if (!text) return [];
  const segments: React.ReactNode[] = [];
  const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|<b>(.*?)<\/b>|<i>(.*?)<\/i>|<a href=['"](.*?)['"]>(.*?)<\/a>)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      segments.push(<React.Fragment key={`text-${lastIndex}`}>{text.slice(lastIndex, matchIndex)}</React.Fragment>);
    }

    const boldText = match[2] || match[5];
    const italicText = match[3] || match[6];
    const codeText = match[4];
    const linkHref = match[7];
    const linkText = match[8];

    if (boldText) {
      segments.push(<strong key={`bold-${matchIndex}`} className="font-bold text-gray-900">{boldText}</strong>);
    } else if (italicText) {
      segments.push(<em key={`italic-${matchIndex}`} className="italic">{italicText}</em>);
    } else if (codeText) {
      segments.push(
        <code key={`code-${matchIndex}`} className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900">
          {codeText}
        </code>
      );
    } else if (linkHref && linkText) {
      segments.push(
        <a key={`link-${matchIndex}`} href={linkHref} className="text-primary underline hover:text-secondary transition-colors">
          {linkText}
        </a>
      );
    }

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push(<React.Fragment key={`text-${lastIndex}`}>{text.slice(lastIndex)}</React.Fragment>);
  }

  return segments;
}

function renderContentBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case "heading1":
      return <h1 key={index} id={block.id}>{renderInlineText(block.text || "")}</h1>;
    case "heading2":
      return <h2 key={index} id={block.id}>{renderInlineText(block.text || "")}</h2>;
    case "heading3":
      return <h3 key={index} id={block.id}>{renderInlineText(block.text || "")}</h3>;
    case "heading4":
      return <h4 key={index} id={block.id}>{renderInlineText(block.text || "")}</h4>;
    case "paragraph":
      return <p key={index}>{renderInlineText(block.text || "")}</p>;
    case "quote":
      return <blockquote key={index}>{renderInlineText(block.text || "")}</blockquote>;
    case "image":
      return (
        <div key={index} className="overflow-hidden">
          <Image
            src={block.src || block.imageSrc || ""}
            alt={block.alt || block.imageAlt || "Article image"}
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
          />
        </div>
      );
    case "list":
      return (
        <ul key={index}>
          {block.items?.map((item, itemIdx) => {
            const itemText = typeof item === "string" ? item : (item as any)?.text || "";
            return <li key={itemIdx}>{renderInlineText(itemText)}</li>;
          })}
        </ul>
      );
    case "orderedList":
      return (
        <ol key={index}>
          {block.items?.map((item, itemIdx) => {
            const itemText = typeof item === "string" ? item : (item as any)?.text || "";
            return <li key={itemIdx}>{renderInlineText(itemText)}</li>;
          })}
        </ol>
      );
    case "table":
      return (
        <div key={index} className="overflow-x-auto">
          <table>
            {block.headers && (
              <thead>
                <tr>
                  {block.headers.map((h, hIdx) => (
                    <th key={hIdx}>{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            {block.rows && (
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{renderInlineText(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      );
    case "splitSection":
      return (
        <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center ${block.layout === "imageLeft" ? "md:flex-row-reverse" : ""}`}>
          <div>
            {block.content?.map((subBlock, subIdx) => renderContentBlock(subBlock, subIdx))}
          </div>
          {block.imageSrc && (
            <div className="overflow-hidden">
              <Image
                src={block.imageSrc}
                alt={block.imageAlt || "Section image"}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      );
    default:
      return null;
  }
}

function isLikelyHtml(content: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(content);
}

function parseSimpleContent(content: string): React.ReactNode[] {
  const lines = content.replace(/\r/g, "").split("\n");
  const blocks: React.ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (/^#{1,3}\s+/.test(line)) {
      const level = line.match(/^#+/)?.[0].length ?? 1;
      const text = line.replace(/^#{1,3}\s+/, "");
      blocks.push(
        level === 1 ? <h1 key={`heading-${index}`}>{renderInlineText(text)}</h1>
        : level === 2 ? <h2 key={`heading-${index}`}>{renderInlineText(text)}</h2>
        : <h3 key={`heading-${index}`}>{renderInlineText(text)}</h3>
      );
      index += 1;
      continue;
    }

    if (/^!\[(.*?)\]\((.*?)\)$/.test(line)) {
      const match = line.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (match) {
        blocks.push(
          <div key={`image-${index}`} className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src={match[2]}
              alt={match[1] || "Blog image"}
              width={1200}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
        );
      }
      index += 1;
      continue;
    }

    if (/^\|.*\|/.test(line)) {
      const rows: string[][] = [];
      while (index < lines.length && /^\|.*\|/.test(lines[index].trim())) {
        const cells = lines[index]
          .trim()
          .split("|")
          .slice(1, -1)
          .map((cell) => cell.trim());
        rows.push(cells);
        index += 1;
      }

      if (rows.length > 0) {
        const isSeparator = rows[1]?.every((cell) => /^:?-{3,}:?$/.test(cell));
        const header = rows[0];
        const bodyRows = isSeparator ? rows.slice(2) : rows.slice(1);

        blocks.push(
          <div key={`table-${index}`} className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-600">
                  {header.map((cell, cellIndex) => (
                    <th key={`th-${cellIndex}`} className="border-b border-gray-200 px-4 py-3">{renderInlineText(cell)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rowIndex) => (
                  <tr key={`tr-${rowIndex}`} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                    {row.map((cell, cellIndex) => (
                      <td key={`td-${rowIndex}-${cellIndex}`} className="border-t border-gray-100 px-4 py-3">{renderInlineText(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (/^([-*]\s+|\d+\.\s+)/.test(line)) {
      const items: string[] = [];
      const ordered = /^\d+\.\s+/.test(line);
      while (index < lines.length) {
        const current = lines[index].trim();
        if (!current) {
          break;
        }
        if (/^([-*]\s+|\d+\.\s+)/.test(current)) {
          items.push(current.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, ""));
          index += 1;
        } else {
          break;
        }
      }

      const ListTag = ordered ? "ol" : "ul";
      blocks.push(
        <ListTag key={`list-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`item-${itemIndex}`}>{renderInlineText(item)}</li>
          ))}
        </ListTag>
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current) {
        break;
      }
      if (/^#{1,3}\s+/.test(current) || /^!\[/.test(current) || /^\|.*\|/.test(current) || /^([-*]\s+|\d+\.\s+)/.test(current)) {
        break;
      }
      paragraphLines.push(current);
      index += 1;
    }

    if (paragraphLines.length > 0) {
      blocks.push(
        <p key={`paragraph-${index}`}>
          {renderInlineText(paragraphLines.join(" "))}
        </p>
      );
    }
  }

  return blocks;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  if (!content) {
    return null;
  }

  if (Array.isArray(content)) {
    return <div className="article-body">{content.map((block, index) => renderContentBlock(block, index))}</div>;
  }

  const trimmedContent = content.trim();
  if (!trimmedContent) {
    return null;
  }

  if (isLikelyHtml(trimmedContent)) {
    return <div className="article-body" dangerouslySetInnerHTML={{ __html: trimmedContent }} />;
  }

  return <div className="article-body">{parseSimpleContent(trimmedContent)}</div>;
}

