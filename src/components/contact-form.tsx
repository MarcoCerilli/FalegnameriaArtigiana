"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { services } from "@/lib/services";
import { useToast } from "@/hooks/use-toast";
import { getAssistedRequest } from "@/app/contatti/actions";
import { useState, useTransition } from "react";
import { Loader2, Wand2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido." }),
  phone: z.string().optional(),
  selectedServices: z.array(z.string()),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri." }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isAiLoading, startAiTransition] = useTransition();
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      selectedServices: [],
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Placeholder for submission logic
    toast({
      title: "Messaggio Inviato!",
      description: "Grazie per averci contattato. Ti risponderemo il prima possibile.",
    });
    form.reset();
    setAiSuggestions([]);
  }

  const handleGenerateRequest = () => {
    const selectedServices = form.getValues("selectedServices");
    const initialMessage = form.getValues("message");

    if (selectedServices.length === 0 && !initialMessage) {
        toast({
            variant: "destructive",
            title: "Dati insufficienti",
            description: "Seleziona almeno un servizio o scrivi un messaggio iniziale per usare l'assistente AI.",
        });
        return;
    }

    startAiTransition(async () => {
      const result = await getAssistedRequest({
        selectedServices: selectedServices.map(slug => services.find(s => s.slug === slug)?.title || slug),
        initialMessage: initialMessage,
      });

      if (result.success && result.data) {
        form.setValue("message", result.data.generatedMessage, { shouldValidate: true });
        setAiSuggestions(result.data.suggestedNextSteps);
        toast({
          title: "Messaggio generato con AI!",
          description: "Controlla il testo e invia la tua richiesta.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Errore AI",
          description: result.error,
        });
      }
    });
  };

  return (
    <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                        <Input placeholder="Il tuo nome" {...field} />
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
                        <Input placeholder="latua@email.com" {...field} />
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
                        <Input placeholder="Il tuo numero di telefono" {...field} />
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
                    <div className="mb-4">
                        <FormLabel className="text-base">Servizi di interesse</FormLabel>
                        <FormDescription>
                        Seleziona uno o più servizi per aiutarmi a capire meglio la tua richiesta.
                        </FormDescription>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((item) => (
                        <FormField
                        key={item.slug}
                        control={form.control}
                        name="selectedServices"
                        render={({ field }) => {
                            return (
                            <FormItem
                                key={item.slug}
                                className="flex flex-row items-start space-x-3 space-y-0"
                            >
                                <FormControl>
                                <Checkbox
                                    checked={field.value?.includes(item.slug)}
                                    onCheckedChange={(checked) => {
                                    return checked
                                        ? field.onChange([...field.value, item.slug])
                                        : field.onChange(
                                            field.value?.filter(
                                            (value) => value !== item.slug
                                            )
                                        );
                                    }}
                                />
                                </FormControl>
                                <FormLabel className="font-normal">
                                {item.title}
                                </FormLabel>
                            </FormItem>
                            );
                        }}
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
                        placeholder="Descrivi la tua richiesta o lascia che l'AI ti aiuti..."
                        className="min-h-[150px]"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit">Invia Messaggio</Button>
                    <Button type="button" variant="outline" onClick={handleGenerateRequest} disabled={isAiLoading}>
                        {isAiLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Wand2 className="mr-2 h-4 w-4" />
                        )}
                        Genera con AI
                    </Button>
                </div>

                {aiSuggestions.length > 0 && (
                    <Card className="bg-secondary mt-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline text-xl">
                                <Wand2 className="h-5 w-5"/>
                                Prossimi Passi Suggeriti
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2 text-secondary-foreground">
                                {aiSuggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
