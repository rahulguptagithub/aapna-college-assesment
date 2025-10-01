import React, { useState } from "react";

export default function TopicCard({ topic, topicIndex, onToggle }) {
  const [isOpen, setIsOpen] = useState(true); // open by default
  const allDone = topic.subTopics.every((s) => s.status === "Done");

  return (
    <div className="rounded-lg border border-none shadow-sm overflow-hidden">
      {/* header */}
      <div
        className="flex items-center justify-between bg-cyan-400 px-5 py-3 cursor-pointer"
        onClick={() => setIsOpen((v) => !v)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg font-semibold text-white">{topic.name}</span>
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${
              allDone ? "bg-green-600 text-white" : "bg-red-500 text-white"
            }`}
          >
            {allDone ? "Done" : "Pending"}
          </span>
        </div>

        {/* chevron */}
        <svg
          className={`w-5 h-5 text-white transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-gradient-to-b from-cyan-50 to-white ${
          isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Sub Topics
          </h3>

          <div className="rounded-lg bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-cyan-100 text-slate-700">
                    <th className="w-12 border border-none px-3 py-3 text-center"></th>
                    <th className="border border-none px-4 py-3 text-left">
                      Name
                    </th>
                    <th className="w-40 border border-none px-4 py-3 text-center">
                      LeetCode Link
                    </th>
                    <th className="w-40 border border-none px-4 py-3 text-center">
                      YouTube Link
                    </th>
                    <th className="w-40 border border-none px-4 py-3 text-center">
                      Article Link
                    </th>
                    <th className="w-24 border border-none px-4 py-3 text-center">
                      Level
                    </th>
                    <th className="w-28 border border-none px-4 py-3 text-center">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {topic.subTopics.map((sub, i) => (
                    <tr
                      key={sub.name}
                      className={`${
                        i % 2 === 0 ? "bg-white" : "bg-gray-100"
                      } hover:bg-slate-100`}
                    >
                      <td className="border border-none px-3 py-3 text-center align-middle">
                        <input
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                          checked={sub.status === "Done"}
                          onChange={() => onToggle(topicIndex, i)}
                        />
                      </td>

                      <td className="border border-none px-4 py-3 align-middle">
                        {sub.name}
                      </td>

                      <td className="border border-none px-4 py-3 text-center align-middle">
                        <a
                          href={sub.leetcode || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Practise
                        </a>
                      </td>

                      <td className="border border-none px-4 py-3 text-center align-middle">
                        <a
                          href={sub.youtube || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch
                        </a>
                      </td>

                      <td className="border border-none px-4 py-3 text-center align-middle">
                        <a
                          href={sub.article || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Read
                        </a>
                      </td>

                      <td className="border border-none px-4 py-3 text-center align-middle font-semibold">
                        {sub.level}
                      </td>

                      <td className="border border-none px-4 py-3 text-center align-middle font-semibold">
                        <span className="text-slate-700">{sub.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
