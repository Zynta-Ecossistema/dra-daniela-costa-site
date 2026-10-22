"use client";

// Último recurso: substitui o layout raiz, por isso traz o próprio html, body e estilos mínimos.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "4rem 1.25rem",
          textAlign: "center",
          background: "#f7f1e7",
          color: "#42362a",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <h1 style={{ fontWeight: 400, fontSize: "2.2rem", lineHeight: 1.1 }}>Algo não saiu como esperado.</h1>
          <p style={{ marginTop: 16, lineHeight: 1.6, color: "#6b5b4e" }}>
            Tivemos um problema para carregar o site. Tente novamente em instantes.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{ marginTop: 28, padding: "14px 28px", border: 0, borderRadius: 999, background: "#43372e", color: "#f7f1e7", fontSize: 15, cursor: "pointer" }}
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
