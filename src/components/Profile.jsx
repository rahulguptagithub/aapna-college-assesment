import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome {user?.email?.split("@")[0]}
      </h1>
      <p className="text-lg">Email: {user?.email}</p>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        © 2024 Dashboard. All Rights Reserved.
      </div>
    </div>
  );
}

export default Profile;
