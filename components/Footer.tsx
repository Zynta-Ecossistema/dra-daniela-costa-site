import { TulipMark } from "./Tulip";

export function Footer() {
  return (
    <footer className="bg-paper-2 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <TulipMark className="h-9 w-7" />
          <p className="font-serif leading-tight">
            Mente, Corpo e Hormônios
            <span className="block text-[0.62rem] tracking-[0.22em] text-ink-soft font-sans mt-1">MEDICINA INTEGRADA</span>
          </p>
        </div>
        <p className="text-[0.78rem] text-ink-soft leading-relaxed max-w-md">
          Dra. Daniela Lima da Costa · CRM-SP 272263. As informações deste site têm caráter educativo e não substituem
          consulta médica. Cada pessoa é avaliada individualmente.
        </p>
      </div>
    </footer>
  );
}
