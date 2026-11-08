import Link from "next/link";
import { ArrowLeft, Code2, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6">

      {/* Background decoration */}
      <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-100px] h-[400px] w-[400px] rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Code2 className="h-6 w-6 text-violet-600" />
        </div>

        {/* 404 */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          Error 404
        </p>

        <h1 className="text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl">
          Page not found<span className="text-violet-600">.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
          Looks like this page took a{" "}
          <span className="font-medium text-slate-700">
            permanent coffee break.
          </span>{" "}
          Even <code className="text-violet-600">console.log()</code> couldn't
          find it.
        </p>

        {/* Terminal */}
        <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-left shadow-xl">

          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

            <div className="ml-2 flex items-center gap-1.5 text-xs text-slate-500">
              <Terminal size={13} />
              terminal
            </div>
          </div>

          {/* Terminal Body */}
          <div className="space-y-2 p-5 font-mono text-sm">
            <p>
              <span className="text-violet-400">$</span>{" "}
              <span className="text-slate-300">find ./page</span>
            </p>

            <p className="text-red-400">
              Error: page does not exist
            </p>

            <p>
              <span className="text-violet-400">$</span>{" "}
              <span className="text-slate-300">
                cd /home
              </span>
              <span className="ml-1 inline-block h-4 w-[7px] animate-pulse bg-slate-400 align-middle" />
            </p>
          </div>
        </div>

        {/* Home Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="
              group inline-flex items-center gap-2
              rounded-lg bg-slate-900
              px-5 py-2.5
              text-sm font-semibold text-white
              shadow-sm
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-violet-600
              hover:shadow-lg
            "
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}