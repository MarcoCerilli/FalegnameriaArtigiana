"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { services } from "@/lib/services";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Il nome deve contenere almeno 2 caratteri." })
    .max(120, { message: "Il nome è troppo lungo." }),
  email: z
    .string()
    .trim()
    .email({ message: "Inserisci un indirizzo email valido." })
    .max(200),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Numero di telefono troppo lungo." })
    .optional()
    .refine(
      (val) => !val || val === "" || /^[+\d\s().-]{6,30}$/.test(val),
      { message: "Inserisci un numero di telefono valido." },
    ),
  selectedServices: z.array(z.string()),
  message: z
    .string()
    .trim()
    .min(10, { message: "Il messaggio deve contenere almeno 10 caratteri." })
    .max(5000, { message: "Il messaggio supera il limite consentito." }),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Devi accettare l'informativa sulla privacy per inviare la richiesta.",
  }),
  website: z.string().max(200).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      selectedServices: [],
      message: "",
      privacyAccepted: false,
      website: "",
    },
  });

  useEffect(() => {
    const requestedService = searchParams.get("servizio");
    if (!requestedService) return;
    const exists = services.some((s) => s.slug === requestedService);
    if (exists) {
      const current = form.getValues("selectedServices");
      if (!current.includes(requestedService)) {
        form.setValue("selectedServices", [...current, requestedService]);
      }
    }
  }, [searchParams, form]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setIsSent(false);
    try {
      const readableServices = values.selectedServices
        .map((slug) => services.find((s) => s.slug === slug)?.title || slug)
        .join(", ");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          subject: readableServices || "Richiesta generica",
          message: values.message,
          privacyAccepted: values.privacyAccepted,
          website: values.website || "",
        }),
      });

      if (response.ok) {
        toast({
          title: "Messaggio inviato!",
          description:
            "Grazie per averci contattato. Ti risponderemo entro 24 ore.",
        });
        form.reset();
        setIsSent(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          typeof errorData.error === "string"
            ? errorData.error
            : "Errore durante l'invio",
        );
      }
    } catch (error: unknown) {
      const description =
        error instanceof Error
          ? error.message
          : "Non è stato possibile inviare la richiesta. Riprova più tardi.";
      toast({
        variant: "destructive",
        title: "Errore di invio",
        description,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="shadow-lg border-border">
      <CardContent className="p-6 md:p-8">
        {isSent && (
          <div
            role="status"
            className="mb-8 flex items-start gap-3 rounded-2xl border border-primary/25 bg-secondary/60 p-4 text-foreground"
          >
            <CheckCircle2
              className="h-5 w-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div className="text-sm">
              <p className="font-bold">Richiesta ricevuta correttamente</p>
              <p className="text-muted-foreground mt-0.5">
                Ti risponderemo al più presto via email o telefono.
              </p>
            </div>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot anti-spam invisibile agli utenti reali */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website-field">Sito web</label>
              <input
                id="website-field"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...form.register("website")}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome e Cognome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Il tuo nome"
                        autoComplete="name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="latua@email.com"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono (Opzionale)</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Es. 347 1234567"
                      autoComplete="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="selectedServices"
              render={() => (
                <FormItem>
                  <div className="mb-3">
                    <FormLabel className="text-base">
                      Servizi di interesse
                    </FormLabel>
                    <FormDescription>
                      Seleziona uno o più servizi per indirizzare al meglio la
                      richiesta.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {services.map((item) => (
                      <FormField
                        key={item.slug}
                        control={form.control}
                        name="selectedServices"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.slug)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.slug])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.slug,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer w-full">
                              {item.title}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Messaggio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descrivi la tua richiesta (dimensioni indicative, zona, tempistiche desiderate)..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacyAccepted"
              render={({ field }) => (
                <FormItem className="space-y-2 rounded-xl border border-border bg-secondary/30 p-4">
                  <div className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(checked === true)
                        }
                      />
                    </FormControl>
                    <div className="leading-snug">
                      <FormLabel className="font-normal text-sm text-foreground cursor-pointer">
                        Ho letto l&apos;
                        <Link
                          href="/privacy"
                          className="text-primary font-semibold underline underline-offset-4 hover:opacity-80"
                        >
                          Informativa sulla Privacy
                        </Link>{" "}
                        e acconsento al trattamento dei dati personali per
                        rispondere alla mia richiesta.
                      </FormLabel>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto rounded-full px-10 bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              {isSubmitting && (
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
