import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EnergyChart({ data }: { data: any[] }) {
  return (
    <div className="w-full rounded-2xl border border-[#1E232B] bg-[#0F141A] p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-[#E6E8EB]">
          Energy usage over time
        </h3>
        <p className="mt-1 text-xs text-[#6F7782]">
          Hourly baseline consumption
        </p>
      </div>

      {/* Chart */}
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="timestamp"
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
              cursor={{ stroke: "#2A2F36", strokeWidth: 1 }}
              contentStyle={{
                background: "#0B0E11",
                border: "1px solid #1E232B",
                borderRadius: "12px",
                fontSize: "12px",
                color: "#E6E8EB",
              }}
              labelStyle={{ color: "#9AA1AA" }}
            />
            <Line
              type="monotone"
              dataKey="energy_kwh"
              stroke="#34D399"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
              name="Energy (kWh)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
