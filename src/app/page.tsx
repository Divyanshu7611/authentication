import Image from "next/image";
import SignUpForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#E5E5E5]">
      <div className="z-10 max-w-lg items-center justify-between font-mono text-sm lg:flex">
        <SignUpForm />
      </div>
    </main>
  );
}
