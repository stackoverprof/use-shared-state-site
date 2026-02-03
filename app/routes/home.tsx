import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "use-shared-state - React state sharing made simple" },
    {
      name: "description",
      content:
        "A lightweight React hook for sharing state across components with localStorage persistence and cross-tab sync.",
    },
  ];
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="code-block rounded-lg p-4 text-sm overflow-x-auto">
      <code className="text-zinc-300">{children}</code>
    </pre>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="gradient-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>
            </svg>
            use-shared-state
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/stackoverprof/use-shared-state"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@stackoverprof/use-shared-state"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              npm
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Zero dependencies
            </div>
          </div>

          <h1 className="animate-fade-in-delay-1 text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Shared state</span>
            <br />
            made simple
          </h1>

          <p className="animate-fade-in-delay-2 text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
            A drop-in replacement for useState with cross-component sharing,
            localStorage persistence, and cross-tab sync.
          </p>

          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.npmjs.com/package/@stackoverprof/use-shared-state"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://github.com/stackoverprof/use-shared-state"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <CodeBlock>npm install @stackoverprof/use-shared-state</CodeBlock>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Drop-in replacement"
              description="Works exactly like useState. Just change the import and add a key - that's it."
            />
            <FeatureCard
              title="localStorage persistence"
              description="Prefix your key with @ to automatically persist state to localStorage."
            />
            <FeatureCard
              title="Cross-tab sync"
              description="Persistent state automatically syncs across browser tabs in real-time."
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <FeatureCard
              title="TypeScript ready"
              description="Full type safety with generics. Your state is fully typed out of the box."
            />
            <FeatureCard
              title="Zero dependencies"
              description="Only requires React >=16.8.0. Nothing else. Tiny bundle size."
            />
            <FeatureCard
              title="Performance optimized"
              description="Only components using the changed key re-render. No cascade re-renders."
            />
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple API
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-zinc-500 mb-2">Memory-only state (shared across components)</p>
              <CodeBlock>{`import useSharedState from "@stackoverprof/use-shared-state";

const [count, setCount] = useSharedState("counter", 0);`}</CodeBlock>
            </div>

            <div>
              <p className="text-sm text-zinc-500 mb-2">Persistent state (localStorage + cross-tab sync)</p>
              <CodeBlock>{`// Just prefix the key with @
const [user, setUser] = useSharedState("@user", { name: "John" });`}</CodeBlock>
            </div>

            <div>
              <p className="text-sm text-zinc-500 mb-2">Use in any component</p>
              <CodeBlock>{`// ComponentA.tsx
const [cart, setCart] = useSharedState("@cart", []);
setCart([...cart, newItem]);

// ComponentB.tsx - automatically in sync!
const [cart] = useSharedState("@cart", []);
<span>Items: {cart.length}</span>`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-zinc-400 text-center mb-12">
            The @ prefix is all you need
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Without @</h3>
              <CodeBlock>{`useSharedState("counter", 0)`}</CodeBlock>
              <p className="text-sm text-zinc-400">
                Stored in memory. Shared across components. Lost on page refresh.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">With @</h3>
              <CodeBlock>{`useSharedState("@counter", 0)`}</CodeBlock>
              <p className="text-sm text-zinc-400">
                Stored in localStorage. Survives refresh. Syncs across tabs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Utils */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Utilities included</h2>
          <p className="text-zinc-400 text-center mb-12">
            Manage your shared state programmatically
          </p>

          <CodeBlock>{`import { sharedStateUtils } from "@stackoverprof/use-shared-state";

sharedStateUtils.getKeys();           // List all keys
sharedStateUtils.getSize();           // Check state size
sharedStateUtils.delete("counter");   // Remove specific key
sharedStateUtils.clear(true);         // Clear all (including persistent)
sharedStateUtils.getPersistentKeys(); // List @ keys only`}</CodeBlock>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stop prop drilling</h2>
          <p className="text-zinc-400 mb-8">
            Share state between components without Context boilerplate.
          </p>
          <a
            href="https://www.npmjs.com/package/@stackoverprof/use-shared-state"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-cyan-600 text-white font-medium hover:bg-cyan-500 transition-colors"
          >
            npm install @stackoverprof/use-shared-state
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-zinc-500">
            MIT License • Built by{" "}
            <a
              href="https://github.com/stackoverprof"
              className="text-zinc-400 hover:text-white"
            >
              stackoverprof
            </a>
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/stackoverprof/use-shared-state"
              className="text-sm text-zinc-500 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@stackoverprof/use-shared-state"
              className="text-sm text-zinc-500 hover:text-white"
            >
              npm
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
