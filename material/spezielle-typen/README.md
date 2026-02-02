## Lernziel

Du verstehst die speziellen Typen `null`, `undefined`, `any`, `unknown` und `never` und kannst sie bewusst einsetzen.

## null

Warum brauchst du den Typen? Um das explizite Fehlen eines Werts zu markieren.
Semantische Bedeutung: "Es gibt bewusst keinen Wert."
Nachteile: Führt ohne Checks schnell zu Laufzeitfehlern.

### Beispiel

```ts
const selectedId: string | null = null;
```

## undefined

Warum brauchst du den Typen? Um "nicht vorhanden" oder "nicht initialisiert" auszudrücken (z. B. optionale Rückgaben oder fehlende Properties).
Semantische Bedeutung: "Dieser Wert existiert (aktuell) nicht." In JS wird `undefined` oft für fehlende API-Felder genutzt.
Nachteile: Kann leicht mit `null` verwechselt werden und führt ohne Checks zu Fehlern.

### Beispiel

```ts
function findOrder(id: string): string | undefined {
  return id === 'A-100' ? 'A-100' : undefined;
}
```

## any

Warum brauchst du den Typen? Als Ausweg bei Legacy-Code oder unsauber typisierten Bibliotheken.
Semantische Bedeutung: "TypeScript ignoriert hier die Typprüfung."
Nachteile: Verliert alle Typ-Sicherheiten, Fehler tauchen erst zur Laufzeit auf.

### Beispiel

```ts
let payload: any = JSON.parse('{}');
```

## unknown

Warum brauchst du den Typen? Für Daten, deren Typ unklar ist, z. B. externe Inputs.
Semantische Bedeutung: "Typ ist unbekannt, erst zur Laufzeit prüfen."
Nachteile: Erfordert Guards, sonst keine Nutzung möglich.

### Beispiel

```ts
function parse(value: unknown): string {
  if (typeof value === 'string') return value;
  return 'unbekannt';
}
```

## never

Warum brauchst du den Typen? Für Funktionen, die niemals zurückkehren oder für unerreichbare Fälle.
Semantische Bedeutung: "Dieser Codepfad kann nie eintreten."
Nachteile: Kaum direkt verwendet, aber wichtig für exhaustive checks.

### Beispiel

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

### Exhaustiveness-Check

Hier sorgt `never` dafür, dass alle Fälle behandelt wurden:

```ts
type Status = 'open' | 'closed';

function assertNever(value: never): never {
  throw new Error(`Unerwarteter Wert: ${value}`);
}

function formatStatus(status: Status): string {
  switch (status) {
    case 'open':
      return 'Offen';
    case 'closed':
      return 'Geschlossen';
    default:
      return assertNever(status);
  }
}
```

Wenn ein neuer Fall hinzukommt und nicht behandelt wird, meldet TypeScript einen Fehler:

```ts
type Status = 'open' | 'closed' | 'archived';
//                                ^ NEU!

function formatStatus(status: Status): string {
  switch (status) {
    case 'open':
      return 'Offen';
    case 'closed':
      return 'Geschlossen';
    default:
      return assertNever(status); // Fehler: Argument vom Typ "archived" ist nicht "never"
  }
}
```
