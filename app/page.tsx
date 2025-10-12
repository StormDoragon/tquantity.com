export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Timeless Quantity</h1>
        <p className="text-slate-300">
          Discover evergreen essentials and AI tools that compound your time.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <a className="btn" href="/tools">Explore AI Tools</a>
        <a className="btn" href="/deals">Today’s Deals</a>
      </section>

      <section className="rounded-2xl border border-cyan-600/30 bg-cyan-600/10 p-6">
        <h2 className="text-2xl font-bold">Free Prompt Vault (Weekly)</h2>
        <p className="mt-2 text-slate-300">Actionable prompts & evergreen product picks.</p>
        <form className="mt-4" method="post" action="#">
          <input className="w-full rounded-md bg-slate-900 border border-slate-700 p-3" placeholder="you@example.com" name="email" type="email" required />
          <button className="mt-3 rounded-md px-4 py-2 bg-cyan-500 text-slate-900 font-semibold" type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
