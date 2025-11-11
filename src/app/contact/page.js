import { Mail, Linkedin, Github } from "lucide-react";


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
  <a href="mailto:contacto@marcdevelopez.com" className="flex items-center gap-x-2 text-blue-600 dark:text-blue-400 underline">
    <Mail className="w-4 h-4" />
    contacto@marcdevelopez.com
  </a>
</li>

<li>
  <a href="https://www.linkedin.com/in/marc-garcia-developez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-blue-600 dark:text-blue-400 underline">
    <Linkedin className="w-4 h-4" />
    marc-garcia-developez
  </a>
</li>

<li>
  <a href="https://github.com/marcdevelopez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-blue-600 dark:text-blue-400 underline">
    <Github className="w-4 h-4" />
    marcdevelopez
  </a>
</li>
      </ul>
    </main>
  );
}
