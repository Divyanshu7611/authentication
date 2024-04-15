import React from "react";
import LoginPage from "@/components/LoginPage";

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#E5E5E5]">
      <div className="z-10 max-w-lg items-center justify-between font-mono text-sm lg:flex">
        <LoginPage />
      </div>
    </main>
  );
}

export default page;
