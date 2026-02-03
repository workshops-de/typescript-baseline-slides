---
layout: section
---

# Spezielle Typen

---
layout: little-what
---

# Die besonderen Typen `null`, `undefined`, `any`, `unknown` und `never` verstehen und bewusst einsetzen.

---
layout: why
---

# Warum spezielle Typen?

Diese Typen decken Randfälle ab: fehlendes Wissen über Daten, bewusst fehlende Werte oder unerreichbare Codepfade. Sie machen deinen Code robuster und expliziter.

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# null

::left::

- **Warum brauchst du den Typen?** Um das explizite Fehlen eines Werts zu markieren.
- **Semantische Bedeutung:** "Es gibt bewusst keinen Wert."
- **Nachteile:** Führt ohne Checks schnell zu Laufzeitfehlern.

::right::
<WindowMockup codeblock title="null.ts">

```ts {all} twoslash
const selectedId: string | null = null; // [!code word:null]
```

</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# undefined

::left::

- **Warum brauchst du den Typen?** Um "nicht vorhanden" oder "nicht initialisiert" auszudrücken.
- **Semantische Bedeutung:** "Dieser Wert existiert (aktuell) nicht."
- **Nachteile:** Kann leicht mit `null` verwechselt werden.

::right::
<WindowMockup codeblock title="undefined.ts">

<!-- prettier-ignore -->
```ts {all} twoslash
function findOrder(id: string): string | undefined {
  // [!code word:undefined]
  return id === 'A-100' ? 'A-100' : undefined;
}
```

<!-- prettier-ignore-end -->
</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# any

::left::

- **Warum brauchst du den Typen?** Als Ausweg bei Legacy-Code oder unsauber typisierten Bibliotheken.
- **Semantische Bedeutung:** "TypeScript ignoriert hier die Typprüfung."
- **Nachteile:** Verliert alle Typ-Sicherheiten, Fehler tauchen erst zur Laufzeit auf.

::right::
<WindowMockup codeblock title="any.ts">

<!-- prettier-ignore -->
```ts {all} twoslash
let payload: any = JSON.parse('{}'); // [!code word:any]
```

<!-- prettier-ignore-end -->
</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# unknown

::left::

- **Warum brauchst du den Typen?** Für Daten, deren Typ unklar ist, z. B. externe Inputs.
- **Semantische Bedeutung:** "Typ ist unbekannt, erst zur Laufzeit prüfen."
- **Nachteile:** Erfordert Guards, sonst keine Nutzung möglich.

::right::
<WindowMockup codeblock title="unknown.ts">

<!-- prettier-ignore -->
```ts {all} twoslash
function parse(value: unknown): string {  // [!code word:unknown]
  if (typeof value === 'string') return value;
  return 'unbekannt';
}
```

<!-- prettier-ignore-end -->
</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# never

::left::

- **Warum brauchst du den Typen?** Für Funktionen, die niemals zurückkehren.
- **Semantische Bedeutung:** "Dieser Codepfad kann nie eintreten."
- **Nachteile:** Kaum direkt verwendet, aber wichtig für exhaustive checks.

::right::
<WindowMockup codeblock title="never.ts">

<!-- prettier-ignore -->
```ts {all} twoslash
function fail(message: string): never {  // [!code word:never]
  throw new Error(message);
}
```

<!-- prettier-ignore-end -->
</WindowMockup>

---

# Exhaustiveness-Check mit never

Hier sorgt `never` dafür, dass alle Fälle behandelt wurden:

<WindowMockup codeblock title="exhaustive.ts">

<!-- prettier-ignore -->
```ts {all} twoslash
type Status = 'open' | 'closed';

function assertNever(value: never): never {
  throw new Error(`Unerwarteter Wert: ${value}`);
}

function formatStatus(status: Status): string {
  switch (status) {
    case 'open':   return 'Offen';
    case 'closed': return 'Geschlossen';
    default:       return assertNever(status);
  }
}
```

<!-- prettier-ignore-end -->
</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Exhaustiveness-Check: Neuer Fall

::left::
<Callout type="caution">
Wenn ein neuer Fall hinzukommt und nicht behandelt wird, meldet TypeScript einen Fehler.
</Callout>

::right::
<WindowMockup codeblock title="exhaustive-error.ts">

<!-- prettier-ignore -->
```ts {all} twoslash
// @errors: 2345
type Status = 'open' | 'closed' | 'archived'; // [!code word:archived]

function assertNever(value: never): never {
  throw new Error(`Unerwarteter Wert: ${value}`);
}

function formatStatus(status: Status): string {
  switch (status) {
    case 'open':   return 'Offen';
    case 'closed': return 'Geschlossen';
    default:       return assertNever(status);
  }
}
```

<!-- prettier-ignore-end -->

</WindowMockup>

---
layout: task
---

# Spezielle Typen
