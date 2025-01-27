import React from "react";
import Sidebar from "./Sidebar";
import HTMLLogo from "@/components/assets/htmlLogo.png";
import Image from "next/image";
import ComparisonChart from "./ComparisonChart";
import PieChart from "./PieChart";
import BottomNav from "./BottomNav";

const PageContainer = ({ setIsModalOpen, rank, percentile, correctAns }) => {
  return (
    <div className="max-w-screen h-full flex">
      {/* Sidebar and Bottom Navigation */}
      <Sidebar />
      <BottomNav />

      <div className="flex flex-col lg:pl-10 px-5 w-full">
        {/* Page Header */}
        <div className="my-6 text-gray-500 h-8">
          <h1 className="font-semibold hover:font-bold hover:scale-105 transition-all">
            Skill Test
          </h1>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row h-full gap-8">
          {/* Left Section */}
          <div className="flex flex-col gap-4 w-full lg:w-[60%]">
            {/* Skill Summary Card */}
            <div className="h-24 border-2 border-gray-100 rounded-lg p-2 flex justify-between items-center">
              <Image
                src={HTMLLogo}
                height={40}
                width={40}
                alt="HTML Logo"
                className="hover:scale-95 hover:rotate-45 transition-all"
              />
              <div>
                <h2 className="text-lg font-bold hover:underline transition-all">
                  Hyper Text Markup Language
                </h2>
                <p className="text-sm text-gray-700 font-semibold">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
              <button
                className="bg-indigo-900 text-white text-sm px-6 py-2 rounded hover:bg-blue-500 transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                Update
              </button>
            </div>

            {/* Quick Statistics */}
            <div className="bg-white border-2 border-gray-100 rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4 hover:underline transition-all">
                Quick Statistics
              </h2>
              <div className="flex justify-between">
                {/* Rank */}
                <StatisticCard
                  icon="🏆"
                  value={rank}
                  label="YOUR RANK"
                />

                {/* Percentile */}
                <StatisticCard
                  icon="📄"
                  value={`${percentile}%`}
                  label="PERCENTILE"
                  border
                />

                {/* Correct Answers */}
                <StatisticCard
                  icon="✅"
                  value={`${correctAns}/15`}
                  label="CORRECT ANSWERS"
                />
              </div>
            </div>

            {/* Comparison Chart */}
            <ComparisonChart yourPercentile={percentile} />
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 w-full lg:w-[40%]">
            {/* Syllabus Analysis */}
            <SyllabusAnalysis />

            {/* Question Analysis */}
            <div className="bg-white border-2 border-gray-100 rounded p-4">
              <h1 className="font-bold hover:underline transition-all">
                Question Analysis
              </h1>
              <p className="text-gray-500">
                <span className="font-bold">
                  You scored {correctAns} questions correct out of 15.
                </span>
                <span className={`${correctAns < 15 ? "block" : "hidden"}`}>
                  However, it still needs some improvement.
                </span>
                <span className={`${correctAns >= 15 ? "block" : "hidden"}`}>
                  Keep it up!
                </span>
              </p>
              <PieChart n={correctAns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Reusable component for statistic cards.
 */
const StatisticCard = ({ icon, value, label, border }) => (
  <div
    className={`text-center flex flex-col lg:flex-row w-1/3 items-center ${
      border ? "border-x-2 px-2 border-gray-200" : ""
    }`}
  >
    <div className="bg-gray-100 rounded-full h-min w-16 p-4 hover:scale-95 hover:rotate-45 transition-all">
      {icon}
    </div>
    <div className="flex flex-col items-center lg:items-start pl-2">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-gray-500 font-semibold text-sm">{label}</div>
    </div>
  </div>
);

/**
 * Component for syllabus-wise analysis.
 */
const SyllabusAnalysis = () => {
  const syllabusData = [
    { label: "HTML Tools, Forms, History", percent: 80, color: "blue" },
    { label: "Tags & References in HTML", percent: 60, color: "orange" },
    { label: "Tables & References in HTML", percent: 24, color: "red" },
    { label: "Tables & CSS Basics", percent: 96, color: "green" },
  ];

  return (
    <div className="bg-white border-2 border-gray-100 rounded py-6 px-8">
      <h2 className="font-bold mb-4 hover:underline transition-all">
        Syllabus Wise Analysis
      </h2>
      {syllabusData.map(({ label, percent, color }, index) => (
        <div key={index} className="flex flex-col gap-2 mb-4">
          <div className="flex justify-between">
            <span>{label}</span>
            <span className={`text-${color}-500 font-bold`}>{percent}%</span>
          </div>
          <div className="flex items-center">
            <div className={`h-2 w-5/6 bg-${color}-100 rounded`}> 
              <div
                className={`h-full bg-${color}-500 rounded`}
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageContainer;
