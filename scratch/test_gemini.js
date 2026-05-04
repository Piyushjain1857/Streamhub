import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCTtghfZm-qcwogCuECJqATVHIbe8AEdYk";
const genAI = new GoogleGenerativeAI(API_KEY);

async function test() {
  try {
    // There isn't a direct listModels in the client SDK like this usually, 
    // but we can try to hit the API or just try another model.
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const result = await model.generateContent("Hello");
    console.log("SUCCESS:", (await result.response).text());
  } catch (error) {
    console.error("FAILURE:", error);
  }
}

test();
