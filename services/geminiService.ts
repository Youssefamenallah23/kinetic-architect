
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // Initializing with the environment variable directly as per guidelines
    aiClient = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY});
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const client = getClient();
    // Using recommended model 'gemini-3-flash-preview' for basic text tasks
    const model = 'gemini-2.5-flash';
    
    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9, // Slightly creative/witty
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    // Directly accessing the .text property from GenerateContentResponse
    return result.text || "I'm processing that logic...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the neural core interrupted. Try again.";
  }
};
