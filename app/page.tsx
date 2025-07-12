import React from "react";
import { Metadata } from "next";
import ProfileCard from "@/app/components/ProfileCard";
import PersonalProfileCard from "@/app/components/PersonalProfileCard";
import ScheduleGrid from "@/app/components/ScheduleGrid";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Teacher Management System",
  description: "Modern UI for managing teacher schedules and profiles.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen text-sm font-sans">
      <Sidebar />
      <div className="flex-1 bg-[#f6f7fb]">
        <Header />
        <main className="p-6 space-y-6">
          <div className="text-gray-700 text-lg font-semibold flex items-center space-x-2">
            <span>Teachers / Alynia Allan</span>
            <span className="text-gray-500 text-xl">👤</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileCard />
            <PersonalProfileCard />
          </div>
          <ScheduleGrid />
        </main>
      </div>
    </div>
  );
}
