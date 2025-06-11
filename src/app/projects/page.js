// Esta línea exporta la función como página pública.
// `default` significa que es la función principal del archivo.
// Esta función es un "componente" en React. Representa una página entera.
export default function ProjectsPage() {
  // Dentro de la función, devolvemos el contenido que queremos mostrar
  // Devolvemos un bloque JSX (como HTML con superpoderes de JavaScript).
  return (
    <main className="p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* ShuttleBiz */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">🚌 ShuttleBiz</h2>
          <p className="mb-4">
            Flutter-based mobile app for organizing shared shuttle rides, with
            real-time chat, GPS tracking, and seat booking.
          </p>
          <a
            href="https://github.com/marcdevelopez/shuttlebiz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Mini Experiments */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">✏️ Mini Experiments</h2>
          <p className="mb-4">
            Small Flutter or frontend apps to test features like auth, maps, UI
            design, form validation, and integration before applying them to
            larger projects.
          </p>
          <a
            href="https://github.com/marcdevelopez?tab=repositories&q=mini&type=source"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            View mini projects on GitHub →
          </a>
        </div>
      </div>
    </main>
  );
}
