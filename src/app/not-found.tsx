import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] translate-y-[5vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-7xl font-semibold tracking-tight text-slate-900 sm:text-8xl">
        404
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8 px-6 py-3.5 text-[15px] font-semibold"
      >
        Back Home
      </Link>
    </main>
  );
}
