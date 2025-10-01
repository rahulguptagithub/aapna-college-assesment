import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Topics from "./components/topics";
import Progress from "./components/Progress";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const initialTopics = [
    {
      name: "Algorithms",
      status: "Pending",
      subTopics: [
        {
          name: "Sorting Algorithms",
          status: "Pending",
          leetcode: "https://leetcode.com",
          youtube: "https://youtube.com",
          article: "https://medium.com",
          level: "EASY",
        },
        {
          name: "Searching Algorithms",
          status: "Done",
          leetcode: "https://leetcode.com",
          youtube: "https://youtube.com",
          article: "https://medium.com",
          level: "EASY",
        },
        {
          name: "Dynamic Programming",
          status: "Done",
          leetcode: "https://leetcode.com",
          youtube: "https://youtube.com",
          article: "https://medium.com",
          level: "MEDIUM",
        },
        {
          name: "Greedy Algorithms",
          status: "Done",
          leetcode: "https://leetcode.com",
          youtube: "https://youtube.com",
          article: "https://medium.com",
          level: "MEDIUM",
        },
        {
          name: "Divide and Conquer",
          status: "Done",
          leetcode: "https://leetcode.com",
          youtube: "https://youtube.com",
          article: "https://medium.com",
          level: "MEDIUM",
        },
        {
          name: "Backtracking",
          status: "Done",
          leetcode: "https://leetcode.com",
          youtube: "https://youtube.com",
          article: "https://medium.com",
          level: "HARD",
        },
      ],
    },
    {
      name: "Data Structures",
      status: "Pending",
      subTopics: [
        {
          name: "Arrays",
          status: "Pending",
          leetcode: "https://leetcode.com",
          youtube: "https://youtube.com",
          article: "https://medium.com",
          level: "EASY",
        },
      ],
    },
  ];
  // ✅ central topics state here
  const [topics, setTopics] = useState(initialTopics);

  // keep state in sync if localStorage changes
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />}
      <Routes>
        {/* Login page */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        {/* Protected pages */}
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/topics"
          element={
            isLoggedIn ? (
              <Topics topics={topics} setTopics={setTopics} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/progress"
          element={
            isLoggedIn ? <Progress topics={topics} /> : <Navigate to="/login" />
          }
        />

        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
