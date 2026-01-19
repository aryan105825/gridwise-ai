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
    <div className="mx-auto max-w-7xl space-y-20 px-6 py-12">
      {/* 1. Energy behavior */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Energy Usage Over Time
        </h2>

        <div className="rounded-2xl border border-white/10 bg-[#0b0f14] p-4 shadow-lg">
          <EnergyChart data={rawData} />
        </div>
      </section>

      {/* 2. Comparison + Impact */}
      <section className="space-y-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Optimization Impact
        </h2>

        <div className="rounded-2xl border border-white/10 bg-[#0b0f14] p-4 shadow-lg">
          <ComparisonChart base={totalBase} optimized={totalOpt} />
        </div>

        <MetricsCards
          totals={result.totals}
          impact={result.impact}
        />

        <CalculationExplanation assumptions={result.assumptions} />
      </section>

      {/* 3. Recommendations */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Optimization Insights
        </h2>

        <RecommendationList recs={result.recommendations} />

        <AIExplanation text={result.ai_explanation} />
      </section>
    </div>
  );
}
