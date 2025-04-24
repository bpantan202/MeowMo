"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function MeowLogForm() {
  return (
    <div>
      <div className="bg-slate-300 rounded-lg h-[1000px] p-10">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="bg-white" />
        </LocalizationProvider>
      </div>
    </div>
  );
}
