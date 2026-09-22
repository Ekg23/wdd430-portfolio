// This function servers a fallback while the page is loading.

export default function Loading() {
    return (
        <main className="animate-pulse space-y-10 p-6">
      <section className="space-y-4">
        <div className="h-10 w-2/3 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-5/6 rounded bg-slate-200" />
        <div className="h-10 w-40 rounded bg-slate-300" />
      </section>

      <section className="space-y-4">
        <div className="h-8 w-48 rounded bg-slate-200" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-40 rounded-xl bg-slate-200" />
          <div className="h-40 rounded-xl bg-slate-200" />
        </div>
      </section>

      <section className="space-y-4">
        <div className="h-8 w-40 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-4/5 rounded bg-slate-200" />
      </section>
    </main>
  );
    
}