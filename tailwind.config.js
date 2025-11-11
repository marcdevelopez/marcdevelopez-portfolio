/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Asegura que Tailwind analice todos tus archivos fuente
    "./public/docs/*.md", // Para que reconozca también el contenido de tu license.md si es necesario
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
