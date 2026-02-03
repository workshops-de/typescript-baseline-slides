## Aufgabe

Ergänze die passenden speziellen Typen.

1. `selectedId` soll explizit "kein Wert" erlauben (null).
2. `payload` soll defensiver typisiert werden, damit `any` entfernt werden kann.
3. `parseInput` soll `unknown` entgegennehmen und nur nach Check nutzen.

## Startcode

```typescript
const selectedId = null;

let payload = JSON.parse('{}');

function parseInput(value: any) {
  return 'unbekannt';
}

function fail(message: string) {
  throw new Error(message);
}

export {};
```
