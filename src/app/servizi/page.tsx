import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services, type Service } from '@/lib/services';
import Link from 'next/link';

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link href={`/servizi/${service.slug}`} className="block group h-full">
      <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
        <CardHeader>
          <div className="mb-4">
            <Icon className="h-12 w-12 text-primary group-hover:text-accent-foreground" />
          </div>
          <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
          <CardDescription className="pt-2">{service.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm font-semibold text-primary group-hover:text-accent-foreground">
                Scopri di più &rarr;
            </p>
        </CardContent>
      </Card>
    </Link>
  );
}


export default function ServiziPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl text-primary">I Miei Servizi</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Dalla precisione della falegnameria alla robustezza dei portoni blindati, offro soluzioni complete e su misura per ogni esigenza, garantendo sempre la massima qualità e professionalità.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
