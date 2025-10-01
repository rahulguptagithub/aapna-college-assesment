import React, { useState } from "react";
import TopicCard from "./topicCard";

export default function Topics({ topics, setTopics }) {
  // toggle subtopic status and update parent topic status
  const handleToggle = (topicIndex, subIndex) => {
    setTopics((prev) =>
      prev.map((topic, tIdx) => {
        if (tIdx !== topicIndex) return topic;

        const updatedSub = topic.subTopics.map((s, sIdx) =>
          sIdx === subIndex
            ? { ...s, status: s.status === "Done" ? "Pending" : "Done" }
            : s
        );

        const allDone = updatedSub.every((s) => s.status === "Done");

        return {
          ...topic,
          subTopics: updatedSub,
          status: allDone ? "Done" : "Pending",
        };
      })
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-10">
        <h1 className="text-3xl font-bold text-center text-slate-900">
          Topics
        </h1>
        <p className="text-center text-slate-500 mt-2">
          Explore these exciting topics!
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="mt-8 space-y-6">
          {topics.map((t, idx) => (
            <TopicCard
              key={t.name}
              topic={t}
              topicIndex={idx}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
