import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Controllo immediato per file statici e risorse Next.js
  // Se il percorso contiene un punto (estensione file) o inizia con cartelle di sistema, passa oltre
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/images') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // 2. Permetto a te di vedere il sito con ?preview=true
  if (searchParams.get("preview") === "true") {
    return NextResponse.next();
  }

  // 3. Evito loop infinito se sono già su /coming-soon
  if (pathname === "/coming-soon") {
    return NextResponse.next();
  }

  // 4. Reindirizzo tutto il resto alla pagina di coming soon
  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

// Configurazione semplificata per evitare errori di parsing Regex
export const config = {
  matcher: [
    /*
     * Applica il middleware a tutte le rotte tranne quelle escluse esplicitamente.
     * Usiamo un array di stringhe invece di una regex complessa per stabilità.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|coming-soon).*)',
  ],
};