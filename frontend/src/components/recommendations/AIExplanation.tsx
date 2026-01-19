export default function AIExplanation({ text }: { text: string | null }) {
  if (!text) return null;

  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-[#0b0f14] p-6 shadow-lg shadow-emerald-500/5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-400">
        AI-Generated Explanation
      </h3>

      <p className="whitespace-pre-line text-sm leading-relaxed text-gray-300">
        {text}
      </p>
    </div>
  );
}
