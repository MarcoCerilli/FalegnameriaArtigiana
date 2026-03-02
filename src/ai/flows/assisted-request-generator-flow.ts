'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating AI-assisted inquiry messages.
 *
 * - generateAssistedRequest - A function that helps users formulate a clear and detailed inquiry message for the artisan.
 * - AssistedRequestGeneratorInput - The input type for the generateAssistedRequest function.
 * - AssistedRequestGeneratorOutput - The return type for the generateAssistedRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistedRequestGeneratorInputSchema = z.object({
  selectedServices: z
    .array(z.string())
    .describe('A list of specific services the user is interested in (e.g., "Falegnameria", "Tappezzeria Nautica", "Installazione Infissi").'),
  initialMessage: z
    .string()
    .optional()
    .describe(
      'An optional initial message draft provided by the user. If provided, the AI should elaborate on this and make it more detailed.'
    ),
});
export type AssistedRequestGeneratorInput = z.infer<
  typeof AssistedRequestGeneratorInputSchema
>;

const AssistedRequestGeneratorOutputSchema = z.object({
  generatedMessage: z
    .string()
    .describe('The AI-assisted, detailed inquiry message for the artisan, ready to be sent.'),
  suggestedNextSteps: z
    .array(z.string())
    .describe('A list of suggestions for the user on what additional information might be helpful for the artisan, or what to expect next.'),
});
export type AssistedRequestGeneratorOutput = z.infer<
  typeof AssistedRequestGeneratorOutputSchema
>;

export async function generateAssistedRequest(
  input: AssistedRequestGeneratorInput
): Promise<AssistedRequestGeneratorOutput> {
  return assistedRequestGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assistedRequestGeneratorPrompt',
  input: {schema: AssistedRequestGeneratorInputSchema},
  output: {schema: AssistedRequestGeneratorOutputSchema},
  prompt: `Sei un assistente AI per un artigiano specializzato in:
- Falegnameria (anche nautica)
- Tappezzeria Nautica
- Installazione Infissi
- Installazione Zanzariere
- Installazione Portoni Blindati

Il tuo compito è aiutare un potenziale cliente a formulare una richiesta di contatto chiara e dettagliata per l'artigiano.
L'obiettivo è assicurare che l'artigiano abbia tutte le informazioni necessarie per fornire una risposta efficace e un preventivo accurato.

Prendi in considerazione i seguenti dettagli forniti dal cliente:

Servizi di interesse: {{#if selectedServices}}{{#each selectedServices}}- {{{this}}}
{{/each}}{{else}}Nessun servizio specifico selezionato.{{/if}}

Messaggio iniziale del cliente: {{#if initialMessage}}{{{initialMessage}}}{{else}}Nessun messaggio iniziale fornito.{{/if}}


Genera un messaggio di richiesta dettagliato e professionale che l'artigiano possa ricevere. Il messaggio dovrebbe:
1. Salutare l'artigiano in modo cortese.
2. Menzionare chiaramente i servizi di interesse del cliente.
3. Elaborare il messaggio iniziale del cliente (se presente), suggerendo l'inclusione di dettagli importanti come: dimensioni approssimative, materiali preferiti, stile desiderato, ubicazione del progetto, urgenza, e qualsiasi altra informazione rilevante per i servizi scelti.
4. Mantenere un tono educato e professionale.
5. Non firmare il messaggio a nome del cliente, ma lasciare spazio per la sua firma.

Inoltre, fornisci un elenco di "suggestedNextSteps" al cliente, indicando quali ulteriori informazioni potrebbero essere utili all'artigiano o cosa aspettarsi dopo l'invio della richiesta. Ogni elemento della lista deve essere una frase concisa.

Esempio di "suggestedNextSteps":
- Potrebbe essere utile allegare foto o disegni del progetto.
- Specifichi la sua disponibilità per un eventuale sopralluogo.
- L'artigiano la contatterà a breve per discutere i dettagli.
`,
});

const assistedRequestGeneratorFlow = ai.defineFlow(
  {
    name: 'assistedRequestGeneratorFlow',
    inputSchema: AssistedRequestGeneratorInputSchema,
    outputSchema: AssistedRequestGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate assisted request.');
    }
    return output;
  }
);
