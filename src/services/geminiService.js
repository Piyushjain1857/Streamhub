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

export const generateMovieDatabase = async () => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3-flash-preview",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `Generate a database of 100 movies and web series. 
    Requirements:
    - 60 titles should be from the year 2026 (imagine they are the latest releases).
    - 40 titles should be trending/popular titles from 2024-2025.
    - Include a mix of "Movie" and "Web Series" categories.
    - For each item, provide: id (unique string), title, category, rating (float 7.0-9.8), description (catchy, 1 sentence), image (Unsplash URL with relevant keywords), backdrop (Unsplash URL wide).
    
    Return ONLY a JSON array of objects.
    Example object:
    {
      "id": "m1",
      "title": "Neon Horizons",
      "category": "Movie",
      "rating": 9.2,
      "description": "A breathtaking journey through a cyberpunk future where memories are currency.",
      "image": "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=500&h=750&fit=crop",
      "backdrop": "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1920&h=1080&fit=crop"
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text());
  } catch (error) {
    console.error("Gemini Database Generation Error:", error);
    return []; // Return empty array so App.jsx can handle it
  }
};
