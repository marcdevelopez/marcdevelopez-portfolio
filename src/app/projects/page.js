// Esta línea exporta la función como página pública.
// `default` significa que es la función principal del archivo.
export default function () {
  // Dentro de la función, devolvemos el contenido que queremos mostrar
  return (
    <main className="p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🚌 ShuttleBiz</h2>
        <p>ShuttleBiz is a Flutter-based mobile app...</p>
      </section>
    </main>
  );
}
