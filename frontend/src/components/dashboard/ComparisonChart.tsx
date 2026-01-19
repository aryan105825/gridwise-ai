import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ComparisonChart({ base, optimized }: any) {
  const chartData = [
    { name: "Current", value: base },
    { name: "Optimized", value: optimized },
  ];

  return (
    <div className="w-full rounded-2xl border border-[#1E232B] bg-[#0F141A] p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-[#E6E8EB]">
          Energy usage comparison
        </h3>
        <p className="mt-1 text-xs text-[#6F7782]">
          Before and after optimization
        </p>
      </div>

      {/* Chart */}
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barGap={24}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9AA1AA", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6F7782", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              contentStyle={{
                background: "#0B0E11",
                border: "1px solid #1E232B",
                borderRadius: "12px",
                fontSize: "12px",
                color: "#E6E8EB",
              }}
              labelStyle={{ color: "#9AA1AA" }}
            />
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              fill="#34D399"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
