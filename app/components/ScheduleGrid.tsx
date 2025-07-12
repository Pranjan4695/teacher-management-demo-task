import React from "react";

// Example availability data
const availability = [
  { day: "Tuesday", time: "4:30pm", label: "available" },
  { day: "Friday", time: "2:30pm", label: "available" },
];

// Unavailable blocks for Saturday and Sunday
const isUnavailable = (day: string) => {
  // Mark all Saturday and Sunday as unavailable
  return day === "Saturday" || day === "Sunday";
};

const ScheduleGrid = () => {
  // Render each cell with correct color and label
  const renderCell = (day: string, time: string) => {
    const available = availability.find(
      (a) => a.day === day && a.time === time
    );
    if (isUnavailable(day)) {
      return (
        <td
          key={`${day}-${time}`}
          className="h-10 border border-gray-300 bg-gray-400"
          style={{ backgroundColor: "#bdbdbd" }}></td>
      );
    }
    if (available) {
      return (
        <td
          key={`${day}-${time}`}
          className="h-10 border border-gray-300 text-green-900 font-semibold text-xs text-center align-middle"
          style={{
            backgroundColor: "#8fffa0",
            color: "#1a4d1a",
            fontWeight: 600,
            fontSize: "13px",
            verticalAlign: "middle",
          }}>
          {available.label}
        </td>
      );
    }
    return (
      <td
        key={`${day}-${time}`}
        className="h-10 border border-gray-300"
        style={{ backgroundColor: "#e0e0e0" }}></td>
    );
  };

  return (
    <div>
      <div className="bg-white rounded-xl shadow p-4 overflow-auto">
        <h3 className="text-md font-medium text-gray-700 mb-2">
          <th className="p-2 text-left">Availability</th>
          <th className="p-2 text-center">Unavailable Time</th>
          <th className="p-2 text-center">Students</th>
          <th className="p-2 text-center">Schedule</th>
          <th className="p-2 text-center">Inspection Lessons</th>
          <th className="p-2 text-center">Unscheduled Lessons</th>
          <th className="p-2 text-center">Time Vaucher</th>
          <th className="p-2 text-center">Comments</th>
          <th className="p-2 text-center">History</th>
        </h3>
        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
          <table className="w-full text-sm border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-2 text-left"></th>
                <th className="p-2 text-center">Monday</th>
                <th className="p-2 text-center">Tuesday</th>
                <th className="p-2 text-center">Wednesday</th>
                <th className="p-2 text-center">Thursday</th>
                <th className="p-2 text-center">Friday</th>
                <th className="p-2 text-center bg-gray-400 text-white">
                  Saturday
                </th>
                <th className="p-2 text-center bg-gray-400 text-white">
                  Sunday
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "All Day",
                "6am",
                "8am",
                "10am",
                "11am",
                "1pm",
                "2pm",
                "3pm",
                "4pm",
              ].map((hour) => (
                <tr key={hour}>
                  <td className="p-2 bg-gray-100 text-gray-600">{hour}</td>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => {
                    const getLabel = () => {
                      if (day === "Tuesday" && hour === "2pm")
                        return "core fern";
                      if (day === "Thursday" && hour === "10am")
                        return "sovi fern";
                      return "";
                    };

                    const isAvailable =
                      (day === "Tuesday" &&
                        ["2pm", "3pm", "4pm"].includes(hour)) ||
                      (day === "Thursday" &&
                        ["10am", "11am", "1pm", "2pm", "3pm", "4pm"].includes(
                          hour
                        ));
                    const isTimeAvailable =
                      ["6am"].includes(hour) || ["8am"].includes(hour);

                    const isAllDatAvailable = ["All Day"].includes(hour);

                    const isWeekend = day === "Saturday" || day === "Sunday";
                    return (
                      <td
                        key={`${day}-${hour}`}
                        className={`h-12 border text-center text-xs align-top ${
                          isWeekend
                            ? "bg-gray-400"
                            : isAvailable
                            ? "bg-green-300 text-green-900 font-semibold"
                            : isTimeAvailable
                            ? "bg-gray-200"
                            : isAllDatAvailable
                            ? "bg-gray-100"
                            : "bg-gray-300"
                        }`}>
                        {getLabel()}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleGrid;
