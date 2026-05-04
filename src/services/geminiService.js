import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const getMovieInsight = async (movieTitle, category) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const prompt = `Give me a very short (max 20 words), catchy, and exciting "Why Watch" insight for the ${category} "${movieTitle}". Make it sound like a premium streaming service recommendation. Focus on the vibe or a key highlight.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "An epic journey awaits you in this title.";
  }
};

export const getMovieDetails = async (movieTitle, category) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const prompt = `Provide a premium summary for the ${category} "${movieTitle}". 
    Format the response as a JSON-like structure (but just text) with these sections:
    - Summary: A compelling 3-sentence overview.
    - Why Watch: 3 bullet points on why it's a must-watch.
    - Mood: 3 keywords describing the vibe (e.g., Intense, Mind-bending, Heartwarming).
    Keep it professional and enticing.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Details Error:", error);
    return "Experience this masterpiece today.";
  }
};
