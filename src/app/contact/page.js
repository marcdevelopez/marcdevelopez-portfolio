export default function Contact() {
  return (
    <main className="p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="mb-4">
        If you&apos;d like to get in touch with me for a collaboration, freelance opportunity,
        or just to say hello — feel free to reach out!
      </p>

      <ul className="space-y-2">
        <li>
          📧 Email:{" "}
          <a
            href="mailto:marcdevelopez@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            marcdevelopez@gmail.com
          </a>
        </li>
        <li>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/marc-garcia-developez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            marc-garcia-developez
          </a>
        </li>
        <li>
          🧑‍💻 GitHub:{" "}
          <a
            href="https://github.com/marcdevelopez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            marcdevelopez
          </a>
        </li>
      </ul>
    </main>
  );
}
