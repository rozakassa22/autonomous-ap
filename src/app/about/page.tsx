import Link from "next/link";

export default function About() {
  return (
    <div className="grid place-items-center min-h-screen p-8 sm:p-20">
      <main className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-emerald-400">
          About 🚀
        </h1>
       
        <Link
          href="/"
          className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300 transition"
        >
          Go to About
        </Link>
      </main>
    </div>
  );
}
