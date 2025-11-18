import { colorSwatches } from "./color";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 py-16">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Typography system
        </p>
        <h1 className="h1">Heading H1</h1>
      </header>

      <section className="space-y-6">
        <h2 className="h2">Heading H2</h2>
        <h3 className="h3">Heading H3</h3>
        <h4 className="h4">Heading H4</h4>
      </section>

      <section className="space-y-6">
        <p className="text-large">Text Large</p>
        <p className="text-medium">Text Medium</p>
        <p className="text-small">Text Small</p>
        <p className="text-extra-small">Text Extra Small</p>
      </section>

      <section className="space-y-6">
        <p className="text-large text-shadow-1">
          text-shadow: 4.57px 6.09px 0 var(--alabaster);
        </p>
        <p className="text-large text-shadow-2">
          text-shadow: 8px 8px 1px var(--alabaster);
        </p>
        <p className="text-large text-shadow-3">
          text-shadow: 5px 6px 1px var(--alabaster);
        </p>
        <p className="text-large text-shadow-4">
          text-shadow: 3px 4px 0 var(--alabaster);
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Color palette
            </p>
            <p className="text-medium">Brand & UI Swatches</p>
          </div>
          <p className="text-sm text-zinc-500">
            {colorSwatches.length} tokens
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {colorSwatches.map(({ name, hex, variable }) => (
            <div
              key={variable}
              className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white/80 p-4 shadow-sm"
            >
              <div
                className="h-16 w-16 rounded-md border border-black/10"
                style={{ backgroundColor: hex }}
              />
              <div className="text-right">
                <p className="text-sm font-medium text-zinc-900">{name}</p>
                <p className="text-sm text-zinc-500">{hex}</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                  {variable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
