import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function WhatsappButton() {
  const { content } = useLanguage();

  return (
    <a
      href={content.profile.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
