import EnergyChart from "../components/dashboard/EnergyChart";
import ComparisonChart from "../components/dashboard/ComparisonChart";
import MetricsCards from "../components/dashboard/MetricsCards";
import RecommendationList from "../components/recommendations/RecommendationList";
import CalculationExplanation from "../components/dashboard/CalculationExplanation";
import AIExplanation from "../components/recommendations/AIExplanation";

export default function Dashboard({ rawData, optimizedData, result }: any) {
  if (!rawData || !optimizedData || !result) return null;
  if (!result) return null;

  const totalBase = rawData.reduce((a: number, b: any) => a + b.energy_kwh, 0);
  const totalOpt = result.optimized.reduce(
    (a: number, b: any) => a + b.optimized_kwh,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* 1. Energy behavior */}
      <section>
        <EnergyChart data={rawData} />
      </section>

      {/* 2. Comparison */}
      <section className="space-y-10">
        <ComparisonChart base={totalBase} optimized={totalOpt} />
        <MetricsCards totals={result.totals}
          impact={result.impact} />
      </section>
      <CalculationExplanation assumptions={result.assumptions} />
      {/* 3. Recommendations */}
      <section>

        <RecommendationList recs={result.recommendations} />

        <AIExplanation text={result.ai_explanation} />
      </section>
    </div>
  );
}
