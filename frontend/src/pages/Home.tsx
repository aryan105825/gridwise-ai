import { useState } from "react";
import FileUpload from "../components/FileUpload";
import Dashboard from "./Dashboard";
import { useOptimization } from "../hooks/useOptimization";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const { result, optimize, loading } = useOptimization();
  const [uploadSuccess, setUploadSuccess] = useState(false);

  async function loadDemo() {
    const res = await fetch("/sample-data/office-building.csv");
    const text = await res.text();

    const rows = text
      .split("\n")
      .slice(1)
      .map((line) => {
        const [timestamp, building_id, energy_kwh] = line.split(",");
        return {
          timestamp,
          building_id,
          energy_kwh: Number(energy_kwh),
        };
      });

    setData(rows);
  }

  return (
    <div className="min-h-screen bg-[#0B0E11] text-[#E6E8EB]">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            GridWise AI
          </h1>
          <p className="max-w-2xl text-[#9AA1AA]">
            Analyze building energy usage and receive clear, explainable
            recommendations to reduce cost and carbon emissions.
          </p>
        </header>

        {/* Data input */}
        <section className="space-y-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={loadDemo}
              className="px-6 py-3 rounded-xl border border-[#2A2F36] text-sm font-medium hover:border-[#3A4048] transition"
            >
              Load demo dataset
            </button>
          </div>

          <FileUpload
            onData={(rows) => {
              setData(rows);
              setUploadSuccess(true);
            }}
          />

          {uploadSuccess && (
            <div className="rounded-xl border border-[#1E3A2B] bg-[#0F1A14] px-4 py-3 text-sm text-emerald-400">
              File uploaded successfully ({data.length} records)
            </div>
          )}

          {uploadSuccess && (
            <button
              onClick={() => optimize(data)}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-emerald-400 text-[#0B0E11] text-sm font-medium hover:bg-emerald-300 transition"
            >
              {loading ? "Optimizing…" : "Run optimization"}
            </button>
          )}
        </section>

        {/* Results */}
        {result && (
          <section>
            {result && (
              <Dashboard
                rawData={result.baseline}
                optimizedData={result.optimized}
                result={result}
              />
            )}
          </section>
        )}
      </div>
    </div>
  );
}
