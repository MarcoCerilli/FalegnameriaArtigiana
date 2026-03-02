import ContactForm from "@/components/contact-form";

export default function ContattiPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl text-primary">Contattami</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Hai un'idea o un progetto in mente? Compila il modulo qui sotto, o usa il nostro assistente AI per creare una richiesta dettagliata.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
