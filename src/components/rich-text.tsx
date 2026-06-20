import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

type RichTextProps = {
  text: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

const markdownComponents: Components = {
  a({ href, children }) {
    if (!href) {
      return <>{children}</>;
    }

    const externalLinkProps = isExternalHref(href)
      ? { target: "_blank", rel: "noreferrer" }
      : {};

    return (
      <a className="rich-text__link" href={href} {...externalLinkProps}>
        {children}
      </a>
    );
  },
  ol({ children }) {
    return <ol className="rich-text__list">{children}</ol>;
  },
  p({ children }) {
    return <p className="rich-text__paragraph">{children}</p>;
  },
  ul({ children }) {
    return <ul className="rich-text__list">{children}</ul>;
  },
};

export function RichText({ text }: RichTextProps) {
  return (
    <div className="rich-text">
      <ReactMarkdown
        allowedElements={["a", "br", "li", "ol", "p", "ul"]}
        unwrapDisallowed
        components={markdownComponents}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
