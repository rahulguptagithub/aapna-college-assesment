import React from "react";

function Progress({ topics }) {
  // counters
  let levelCounts = { EASY: 0, MEDIUM: 0, HARD: 0 };
  let doneCounts = { EASY: 0, MEDIUM: 0, HARD: 0 };

  topics.forEach((topic) => {
    topic.subTopics.forEach((sub) => {
      const level = sub.level.toUpperCase(); // ensure consistency
      if (levelCounts[level] !== undefined) {
        levelCounts[level]++;
        if (sub.status === "Done") {
          doneCounts[level]++;
        }
      }
    });
  });

  // calculate percentage
  const percentages = {};
  Object.keys(levelCounts).forEach((level) => {
    percentages[level] =
      levelCounts[level] > 0
        ? Math.round((doneCounts[level] / levelCounts[level]) * 100)
        : 0;
  });

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-xl font-bold mb-6">Progress Reports</h1>

      <p>Easy: {percentages.EASY}%</p>
      <p>Medium: {percentages.MEDIUM}%</p>
      <p>Hard: {percentages.HARD}%</p>

      {/* Footer */}
      <div className="mt-16 text-center text-slate-500 text-sm">
        © 2024 Dashboard. All Rights Reserved.
      </div>
    </div>
  );
}

export default Progress;
