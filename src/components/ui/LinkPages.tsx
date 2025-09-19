import { DynamicIcon } from 'lucide-react/dynamic';

export const LinksPages = () => {
  return (
    <div
      className="fixed top-1/2 right-0 -translate-y-1/2 z-20 flex flex-col bg-blue-600/90 dark:bg-blue-700/90 border-l-2 border-blue-500 rounded-l-md shadow-lg overflow-hidden"
    >
      <a
        href="https://github.com/jaisemberg2022/CRUD-App-react.git"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex items-center justify-center p-4 text-white hover:bg-blue-500/20 transition border-b border-blue-300"
      >
        <DynamicIcon name="github" size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/jaidertoro2003/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center justify-center p-4 text-white hover:bg-blue-500/20 transition border-b border-blue-300"
      >
        <DynamicIcon name="linkedin" size={22} />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=573007288938&text=Contactame%20para%20conocer%20más%20acerca%20de%20mí"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex items-center justify-center p-4 text-white hover:bg-blue-500/20 transition"
      >
        <DynamicIcon name="phone" size={22} />
      </a>
    </div>
  );
};
