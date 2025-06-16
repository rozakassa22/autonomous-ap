import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen md:grid-cols-[1fr_2fr] font-[family-name:var(--font-geist-sans)]">
      <aside className="flex items-center justify-center bg-[#fcfafa] relative overflow-hidden">
        <div className="flex-col items-center justify-center w-full max-w-[480px]  px-6 sm:px-10 flex flex-col gap-8 text-center md:text-start">
          <header className="text-center space-y-3">
            <h1 className="text-3xl font-extrabold text-gray-900">Welcome</h1>
            <p className="text-gray-500">
              Effectively and optimized workflows for managing Invoices.
            </p>
          </header>

          <Image
            src="/dashboard.svg"
            alt="Analytics dashboard illustration"
            width={400}
            height={350}
            priority
            className="mx-auto md:mx-0"
          />
        </div>
      </aside>

      <section className="relative flex flex-col items-center justify-center p-8 sm:p-20 bg-white">
   
        <Image
          src="/setting.svg"
          alt="Settings"
          width={25}
          height={25}
          className="hidden md:block absolute top-6 right-6 cursor-pointer"
        />

        <div className="w-full max-w-[440px] space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>


          <form className="space-y-2">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                defaultValue="demo@minimals.cc"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
             <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-emerald-500"
                >
                  Forgot password?
                </Link>
              </div>

            <div >
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="6+ characters"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />

             
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 py-3 text-sm font-semibold text-white
                   hover:bg-gray-800 transition mt-4"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
