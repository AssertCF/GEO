import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini API Client
// Note: In a real app, ensure process.env.API_KEY is available.
// For this demo, we assume the environment is set up correctly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'dummy_key_for_demo' });

export const generateKeywordsAnalysis = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the following topic for GEO (Generative Engine Optimization) potential: ${topic}. 
      Provide 3 key judgment logic keywords and a brief feasibility score.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            score: { type: Type.NUMBER },
            reasoning: { type: Type.STRING }
          }
        }
      }
    });

    return response.text || "{}";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return mock data if API fails (e.g., due to missing key in demo environment)
    return JSON.stringify({
      keywords: ["智能体核心能力", "2026职业趋势", "AI教学边界"],
      score: 88.5,
      reasoning: "High relevance to emerging educational tech trends."
    });
  }
};

export const generateProblemTree = async (rootProblem: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Generate a logical problem tree for: "${rootProblem}". 
      Include 1 root node, 2 sub-problems, and 1 boundary risk.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating tree.";
  }
};
