"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ShuttlebizLicensePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    // ✅ Cargar el archivo Markdown desde la carpeta /docs
    fetch("/docs/license.md")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar license.md");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => {
        console.error("Error al cargar license.md:", err);
        setContent("⚠️ Error al cargar el archivo de licencia.");
      });
  }, []);

  return (
    <main className="p-8 sm:px-10 lg:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        ShuttleBiz License
      </h1>

      <article className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
