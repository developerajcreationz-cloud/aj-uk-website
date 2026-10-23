// Fails when two blog posts claim the same keyword, or a post targets a service page's keyword.
// One keyword, one page: the service page owns commercial queries, each post owns one informational task.
import { readFileSync, readdirSync } from "node:fs";

const dir = "src/content/posts/";
const skip = new Set(["index.ts", "types.ts", "categories.ts"]);
const norm = (k) =>
  k
    .toLowerCase()
    .replace(/\b(uk|us|usa|2026)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

const owners = new Map();
for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts") && !skip.has(f))) {
  const text = readFileSync(dir + file, "utf8");
  const primary = text.match(/primaryKeyword: "([^"]+)"/)?.[1];
  const secondary = [...(text.match(/secondaryKeywords: \[([\s\S]*?)\]/)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map(
    (m) => m[1],
  );
  for (const k of [primary, ...secondary].filter(Boolean)) {
    const key = norm(k);
    owners.set(key, [...(owners.get(key) ?? []), file.replace(".ts", "")]);
  }
}

const services = readFileSync("src/content/services.ts", "utf8");
const serviceKeywords = [...services.matchAll(/\n\s+keyword: "([^"]+)"/g)].map((m) => norm(m[1]));

const problems = [];
for (const [key, slugs] of owners) {
  if (new Set(slugs).size > 1) problems.push(`"${key}" is claimed by ${[...new Set(slugs)].join(", ")}`);
  if (serviceKeywords.includes(key)) problems.push(`"${key}" (${slugs.join(", ")}) is a service page keyword`);
}

if (problems.length) {
  console.error("Keyword cannibalisation:\n - " + problems.join("\n - "));
  process.exit(1);
}
console.log(`Keyword check passed: ${owners.size} keywords, each owned by one page.`);
