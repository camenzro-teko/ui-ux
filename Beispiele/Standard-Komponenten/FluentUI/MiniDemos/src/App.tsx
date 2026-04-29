import React from "react";
import { defaultDemo, demoMap, type DemoId } from "./demos";

const activeDemo = (import.meta.env.MODE as DemoId | undefined) ?? defaultDemo;

export const App = () => {
  const entry = demoMap[activeDemo] ?? demoMap[defaultDemo];
  const DemoComponent = entry.Component;

  return (
    <main className="page">
      <h1>FluentUI MiniDemo: {entry.title}</h1>
      <p className="hint">Aktiv via Vite-Mode (z. B. `npm run dev:buttons`).</p>
      <section className="demoCard">
        <DemoComponent />
      </section>
    </main>
  );
};
