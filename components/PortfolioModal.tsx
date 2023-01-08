import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { SectionTitleModal } from "./SectionTitleModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Modal } from "react-bootstrap";

interface IPortfolioModal {
  title: string;
  show: boolean;
  handleClose: () => void;
  data: string;
}

function PortfolioModal({ title, show, handleClose, data }: IPortfolioModal) {
  const [portfolioInfo, setPortfolioInfo] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetch(data)
      .then((res) => res.text())
      .then((itemData) => {
        if (!cancelled) {
          // noinspection JSCheckFunctionSignatures
          setPortfolioInfo(itemData);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = true;
    };
  }, [data]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      className="mi-portfolio-modal"
    >
      <Modal.Body>
        <SectionTitleModal title={title} />
        <ReactMarkdown
          children={portfolioInfo}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  // @ts-ignore
                  style={materialDark}
                  language={match[1]}
                  children={String(children).replace(/\n$/, "")}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
        <button onClick={handleClose} className="mi-button text-white">
          Return
        </button>
      </Modal.Body>
    </Modal>
  );
}

export { PortfolioModal };
