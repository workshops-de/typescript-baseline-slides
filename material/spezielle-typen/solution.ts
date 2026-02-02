const selectedId: string | null = null;

let payload: unknown = JSON.parse("{}");

function parseInput(value: unknown): string {
  if (typeof value === "string") return value;
  return "unbekannt";
}

function fail(message: string): never {
  throw new Error(message);
}

export { };
