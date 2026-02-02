## Lernziel

Du kannst Klassen in TypeScript schreiben, inklusive Konstruktor, Methoden, Vererbung und Zugriffsmodifikatoren.

## Warum brauchst du Klassen?

Klassen helfen, Daten und Verhalten zu bündeln. Das macht Code einfacher zu strukturieren, wiederzuverwenden und zu testen, besonders wenn ein Modell viele Methoden braucht.

## Warum gab es Klassen in JavaScript?

Vor ES6 war OOP in JS umständlich (Prototype-Ketten, Funktionskonstruktoren). `class` brachte eine klare, bekannte Syntax und machte Vererbung verständlicher und wartbarer.

## Kurzüberblick

- `class` bündelt Daten und Verhalten.
- `public`, `private`, `protected`, `#` steuern den Zugriff.
- `extends` und `super` nutzen Vererbung.

### `private` vs `#`

- `private` ist eine TypeScript-Restriktion zur Compile-Zeit: Der Zugriff wird vom Type-Checker verhindert, zur Laufzeit ist das Feld technisch normal.
- `#` sind echte private Klassenfelder in JavaScript: Diese Felder sind zur Laufzeit gekapselt und von außen nicht erreichbar.
- In TypeScript bedeutet das: `private` hilft beim Refactoring, `#` garantiert echte Laufzeit-Privatsphäre.

## Beispiel

```ts
class Order {
  public id: string;
  protected total: number;
  private legacySecret: string;
  #secretCode: string;

  constructor(id: string, total: number, secretCode: string) {
    this.id = id;
    this.total = total;
    this.legacySecret = secretCode;
    this.#secretCode = secretCode;
  }

  public format(): string {
    const masked = this.#maskCode();
    return `Bestellung ${this.id} | Code: ${masked} | Gesamt: ${this.total.toFixed(2)} EUR`;
  }

  #maskCode(): string {
    return this.#secretCode.slice(-2).padStart(this.#secretCode.length, '*');
  }
}

class VipOrder extends Order {
  private discount: number;

  constructor(id: string, total: number, secretCode: string, discount: number) {
    super(id, total, secretCode);
    this.discount = discount;
  }

  public format(): string {
    const discounted = this.total * (1 - this.discount);
    return `VIP ${this.id} | Gesamt: ${discounted.toFixed(2)} EUR`;
  }
}
```

## Kurzschreibweise im Konstruktor

TypeScript erlaubt, Felder direkt im Konstruktor zu deklarieren und zu initialisieren. Dadurch fallen die expliziten Felddeklarationen und Zuweisungen weg.

### Beispiel

```ts
class Order {
  constructor(
    public id: string,
    protected total: number,
    private legacySecret: string
  ) {}

  public format(): string {
    return `Bestellung ${this.id} | Gesamt: ${this.total.toFixed(2)} EUR`;
  }
}
```
