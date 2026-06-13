import { Window } from "happy-dom";

const markdownPaths = ["README.md", "data/README.md"];

const window = new Window();
Object.assign(globalThis, {
  window,
  document: window.document,
  Element: window.Element,
  HTMLElement: window.HTMLElement,
  SVGElement: window.SVGElement,
});

const { default: mermaid } = await import("mermaid");

mermaid.initialize({ startOnLoad: false });

let failed = false;

for (const path of markdownPaths) {
  const file = Bun.file(path);
  if (!(await file.exists())) {
    continue;
  }

  const markdown = await file.text();
  const blocks = [...markdown.matchAll(/```mermaid\n([\s\S]*?)\n```/g)];

  for (const [index, match] of blocks.entries()) {
    const source = match[1];
    if (!source) {
      continue;
    }

    try {
      await mermaid.parse(source, { suppressErrors: false });
    } catch (error) {
      failed = true;
      console.error(`Invalid Mermaid diagram in ${path}, block ${index + 1}:`);
      console.error(error instanceof Error ? error.message : error);
    }
  }
}

if (failed) {
  process.exit(1);
}
