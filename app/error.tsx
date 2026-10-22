"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-paper px-5 py-16 text-center">
      <div className="max-w-xl">
        <h1 className="h-display text-[clamp(2rem,5vw,3rem)]">
          Algo não saiu <em>como esperado.</em>
        </h1>
        <p className="mt-5 leading-relaxed text-ink-soft">
          Tivemos um problema para carregar esta página. Tente novamente em instantes.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-cocoa px-7 py-4 text-[0.95rem] text-paper transition-colors hover:bg-cocoa-2"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
