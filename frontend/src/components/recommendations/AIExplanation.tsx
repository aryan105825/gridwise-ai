export default function AIExplanation({ text }: { text: string | null }) {
  if (!text) return null;

  return (
    <div style={{ marginTop: 24 }}>
      <h3>AI-Generated Explanation (Groq)</h3>
      <p style={{ whiteSpace: "pre-line" }}>
        {text}
      </p>
    </div>
  );
}
