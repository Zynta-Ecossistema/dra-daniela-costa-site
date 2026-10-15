import { waLink, SOBRE_PLANOS } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(SOBRE_PLANOS)}
      aria-label="Conversar pelo WhatsApp"
      className="fixed z-30 right-4 bottom-4 sm:right-6 sm:bottom-6 flex items-center gap-2.5 bg-cocoa text-paper pl-4 pr-5 h-14 rounded-full shadow-[0_14px_30px_-10px_rgba(67,55,46,0.6)] hover:bg-cocoa-2 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.200Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.400-.7-2.400-1.300-3.300-2.900-.2-.3.2-.3.700-1 .1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.300-.7.700-1 1.500-.9 2.400.2 1.300 1 2.500 2 3.500 1.500 1.600 3.400 2.400 4.700 2.600.9.100 1.800-.3 2.300-1 .2-.3.2-.6.1-.7l-.4-.2Z" />
      </svg>
      <span className="text-[0.9rem] hidden sm:inline">WhatsApp</span>
    </a>
  );
}
