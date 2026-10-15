export function TulipMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 52" className={className} aria-hidden="true">
      <path d="M20 52 C20 40 19 32 20 24" stroke="#5f6b2d" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M20 44 C12 42 8 36 7 30 C14 31 19 36 20 44Z" fill="#707c37" />
      <path d="M20 44 C28 40 31 35 32 29 C26 31 21 36 20 44Z" fill="#868b5a" />
      <path d="M8 8 C8 22 12 28 20 28 C28 28 32 22 32 8 C28 12 25 10 20 4 C15 10 12 12 8 8Z" fill="#a98ead" />
      <path d="M20 4 C15 10 13 18 17 28 C21 28 23 24 23 20 C23 14 22 8 20 4Z" fill="#c9b3cc" />
    </svg>
  );
}

/* Ilustração do hero: três tulipas dentro de um arco */
export function TulipsArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 480" className={className} role="img" aria-label="Ilustração de tulipas">
      <defs>
        <linearGradient id="arc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2e6e1" />
          <stop offset="1" stopColor="#e6e6d2" />
        </linearGradient>
        <linearGradient id="pet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9b3cc" />
          <stop offset="1" stopColor="#8f739a" />
        </linearGradient>
        <linearGradient id="pet2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9c8da" />
          <stop offset="1" stopColor="#a98ead" />
        </linearGradient>
      </defs>
      <path d="M0 480 V200 C0 90 90 0 200 0 C310 0 400 90 400 200 V480Z" fill="url(#arc)" />
      <g className="sway">
        <path d="M200 480 C198 400 202 320 200 250" stroke="#5f6b2d" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M200 420 C140 410 100 360 92 300 C150 310 196 350 200 420Z" fill="#707c37" />
        <path d="M200 400 C262 380 296 330 304 270 C250 290 204 330 200 400Z" fill="#868b5a" />
        <path d="M148 160 C148 235 168 268 200 268 C232 268 252 235 252 160 C232 190 218 176 200 120 C182 176 168 190 148 160Z" fill="url(#pet)" />
        <path d="M200 120 C176 160 168 215 188 268 C214 262 224 236 224 206 C224 172 214 146 200 120Z" fill="#e4d7e5" opacity=".85" />
      </g>
      <g className="sway" style={{ animationDelay: "-2.4s" }}>
        <path d="M96 480 C100 420 90 380 82 330" stroke="#5f6b2d" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M96 440 C56 430 34 392 30 352 C70 358 94 392 96 440Z" fill="#868b5a" />
        <path d="M52 250 C52 305 66 332 86 332 C108 332 120 305 118 252 C104 272 96 262 84 222 C74 262 66 270 52 250Z" fill="url(#pet2)" />
      </g>
      <g className="sway" style={{ animationDelay: "-4.2s" }}>
        <path d="M312 480 C306 430 312 392 322 350" stroke="#5f6b2d" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M312 450 C352 436 372 398 374 364 C334 370 314 404 312 450Z" fill="#707c37" />
        <path d="M282 270 C282 322 296 346 318 346 C340 346 352 322 352 272 C338 290 330 280 318 242 C306 280 298 288 282 270Z" fill="url(#pet)" />
      </g>
    </svg>
  );
}
