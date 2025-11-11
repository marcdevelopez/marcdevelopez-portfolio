// /src/app/shuttlebiz-license/page.js

"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ShuttlebizLicensePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/docs/license.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <main className="p-8 sm:px-10 lg:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">ShuttleBiz License</h1>
      <article className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-justify">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
