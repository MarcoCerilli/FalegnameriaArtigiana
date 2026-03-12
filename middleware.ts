import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware per reindirizzare da /home a / (se necessario)
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Se il file ha un'estensione (es. .jpg, .png, .svg), lascialo passare sempre
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/images')
  ) {
    return NextResponse.next()
  };

  //1. Permetti accesso risorse statiche (es. immagini, css, js)
  if (pathname.startsWith("/_next/") || pathname.startsWith("/images/")) {
    return NextResponse.next();
  }

  //2. Permetto a me di vedere il sito se aggiungo ?preview= true
  if (searchParams.get("preview") === "true") {
    return NextResponse.next();
  }

  // 3. evito loop infinito sew sono gia su coming-soon
  if (pathname === "/coming-soon") {
    return NextResponse.next();
  }

  // 4. Reindirizzo tutti gli altri utenti alla pagina di coming soon
  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

// Configuro il middleware per essere eseguito solo su alcune rotte
export const config = {
  matcher: [
    /*
     * Match tutte le rotte tranne quelle che iniziano con:
     * - api (rotte API)
     * - _next/static (file statici)
     * - _next/image (ottimizzazione immagini)
     * - favicon.ico (icona del browser)
     * - images (la tua cartella delle foto)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
