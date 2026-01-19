export default function RecommendationList({ recs }: any) {
  if (!recs || recs.length === 0) return null;

  return (
    <div style={{ marginTop: 24 }}>
      <h3>Rule-Based Optimization Insights</h3>

      {recs.map((r: any, i: number) => (
        <div
          key={i}
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 12 }}
        >
          <strong>{r.type}</strong>
          <p>{r.explanation}</p>
          <em>Impact: {r.impact}</em>
        </div>
      ))}
    </div>
  );
}
