import React from 'react'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Link } from 'react-router-dom'
const energyData = [
  { t: "00", actual: 420, optimized: 420 },
  { t: "04", actual: 460, optimized: 440 },
  { t: "08", actual: 610, optimized: 520 },
  { t: "12", actual: 680, optimized: 540 },
  { t: "16", actual: 720, optimized: 560 },
  { t: "20", actual: 640, optimized: 530 },
  { t: "24", actual: 500, optimized: 500 },
];
export default function Landing() {
  return (
    <main className="bg-[#0B0E11] text-[#E6E8EB] antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-40 grid lg:grid-cols-2 gap-20 items-center">
          {/* COPY */}
          <div>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Energy decisions,
              <br />
              <span className="text-emerald-400">made visible.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[#A7ADB5]">
              GridWise AI analyzes building energy behavior in real time and
              shows exactly where optimization reduces cost and emissions —
              before decisions are made.
            </p>

            <div className="mt-14 flex gap-6">
              <Link to="/home">
                <button className="px-8 py-4 rounded-xl bg-[#E6E8EB] text-[#0B0E11] text-sm font-medium hover:bg-white transition">
                  Lets get started
                </button>
              </Link>
              <button className="px-8 py-4 rounded-xl border border-[#2A2F36] text-sm font-medium hover:border-[#3A4048] transition">
                Read the Method
              </button>
            </div>
          </div>

          {/* CHART */}
          <div className="relative h-[360px] rounded-2xl border border-[#1E232B] bg-[#0F141A] p-6">
            <p className="text-sm text-[#6F7782] mb-4">
              Daily energy profile (kWh)
            </p>

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={energyData}>
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#3A4048"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="optimized"
                  stroke="#34D399"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#0B0E11",
                    border: "1px solid #1E232B",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "#9AA1AA" }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="absolute bottom-6 right-6 text-sm text-emerald-400">
              −18% peak reduction
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-[#1B1F26]" />

      {/* INSIGHT */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-medium leading-snug">
              Dashboards show data.
              <br />
              Decisions need context.
            </h2>
            <p className="mt-6 text-[#9AA1AA]">
              Seeing usage is not the same as understanding impact. Optimization
              requires prediction, simulation, and explanation — together.
            </p>
          </div>

          <div className="space-y-6 text-[#9AA1AA]">
            <p>• Peaks discovered too late</p>
            <p>• Inefficiencies hidden in averages</p>
            <p>• No quantified carbon impact</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[#12161C]">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl font-medium">
            Optimization with measurable outcomes.
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-semibold text-emerald-400">−18%</p>
              <p className="mt-3 text-sm text-[#9AA1AA]">
                Energy usage
              </p>
            </div>
            <div>
              <p className="text-5xl font-semibold">$4,200</p>
              <p className="mt-3 text-sm text-[#9AA1AA]">
                Monthly savings
              </p>
            </div>
            <div>
              <p className="text-5xl font-semibold">1.3t</p>
              <p className="mt-3 text-sm text-[#9AA1AA]">
                CO₂ avoided
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>

  );
};

