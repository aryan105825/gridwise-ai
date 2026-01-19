import { useState } from "react";
import {api} from "../services/api";

type EnergyRow = {
  timestamp: string;
  building_id?: string;
  energy_kwh: number;
  temperature_c?: number;
  occupancy?: number;
  hvac_status?: string;
  lighting_status?: string;
  equipment_status?: string;
};

type FileUploadProps = {
  onData: (rows: EnergyRow[]) => void;
};

export default function FileUpload({ onData }: FileUploadProps) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    const res = await api.post<{ data: EnergyRow[] }>(
      "/upload",
      formData
    );

    setLoading(false);

    onData(res.data.data);
  };

  return (
    <div className="w-full max-w-md">
      <label className="block text-sm text-[#9AA1AA] mb-3">
        Upload energy usage data
      </label>

      <div className="relative flex items-center justify-center rounded-2xl border border-dashed border-[#2A2F36] bg-[#0F141A] px-6 py-10 hover:border-[#3A4048] transition">
        <input
          type="file"
          accept=".csv"
          onChange={handleUpload}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />

        <div className="text-center pointer-events-none">
          <p className="text-sm text-[#E6E8EB]">
            Select a CSV file
          </p>
          <p className="mt-1 text-xs text-[#6F7782]">
            Building energy usage data
          </p>
        </div>
      </div>

      {loading && (
        <p className="mt-4 text-sm text-emerald-400">
          Uploading…
        </p>
      )}
    </div>
  );
}
