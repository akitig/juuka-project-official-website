export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm tracking-[0.3em] text-neutral-400">
          JUUKA PROJECT
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          獣化プロジェクト
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-neutral-300">
          獣化という欲望・創作・身体感覚・生活感覚をめぐって、
          人が集まり、語り、作り、残していくための場所です。
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/lt/"
            className="rounded-full border border-neutral-600 px-5 py-3 text-sm text-neutral-100 transition hover:border-neutral-300"
          >
            LT会を見る
          </a>
          <a
            href="/activities/"
            className="rounded-full border border-neutral-600 px-5 py-3 text-sm text-neutral-100 transition hover:border-neutral-300"
          >
            活動実績を見る
          </a>
        </div>
      </section>
    </main>
  );
}