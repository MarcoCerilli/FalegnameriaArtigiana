"use server";

import { generateAssistedRequest, type AssistedRequestGeneratorInput } from "@/ai/flows/assisted-request-generator-flow";

export async function getAssistedRequest(input: AssistedRequestGeneratorInput) {
  try {
    const result = await generateAssistedRequest(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating assisted request:", error);
    return { success: false, error: "Non è stato possibile generare il messaggio. Riprova più tardi." };
  }
}
