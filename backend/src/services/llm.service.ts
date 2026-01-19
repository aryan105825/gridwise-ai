import axios from "axios";

export async function generateLLMExplanation(context: any) {
  const prompt = `
You are an energy efficiency expert.

Given this analysis:
- Total baseline energy: ${context.baseline_kwh} kWh
- Total optimized energy: ${context.optimized_kwh} kWh
- Energy saved: ${context.energy_saved_kwh} kWh
- Peak hours detected: ${context.peak_hours}
- Waste hours detected: ${context.waste_hours}

Explain:
1. Why energy was wasted
2. Which operational decisions caused it
3. What actions should be taken

Be concise, factual, and non-marketing.
`;

  const res = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return res.data.choices[0].message.content;
}
