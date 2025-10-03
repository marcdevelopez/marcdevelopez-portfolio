import Image from "next/image";

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
          <div className="flex items-center mb-2">
            <Image
              src="/images/projects/hand-icon-strong-color.svg"
              alt="ShuttleBiz Icon"
              width={32}
              height={32}
              className="mr-3"
            />
            <h2 className="text-2xl font-semibold">ShuttleBiz</h2>
          </div>
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

        {/* Flutter & Dart Labs */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            📚 Flutter & Dart Labs
          </h2>
          <p className="mb-4">
            A structured learning repo to explore Flutter and Dart fundamentals.
            Includes mini-labs for UI, logic, navigation, state, HTTP, and
            real-world features. Ideal for practicing before applying to larger
            projects like ShuttleBiz.
          </p>
          <a
            href="https://github.com/marcdevelopez/flutter-dart-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Flutter Map Experiments */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            🗺️ Flutter Map Experiments
          </h2>
          <p className="mb-4">
            Practice project with the flutter_map package. Shows current
            location, lets you enter a destination, and draws a route using
            external APIs. Uses a clean, modular structure and Git flow with
            feature branches.
          </p>
          <a
            href="https://github.com/marcdevelopez/flutter_map_experiments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </main>
  );
}
