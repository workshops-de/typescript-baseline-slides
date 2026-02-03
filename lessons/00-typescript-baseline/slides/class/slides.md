---
layout: section
---

# Klassen in TypeScript

---
layout: little-what
---

# Daten und Verhalten in einer Einheit bündeln mit Konstruktor, Methoden und Zugriffsmodifikatoren

---
layout: why
---

# Warum brauchst du Klassen?

Klassen helfen, Daten und Verhalten zu bündeln. Das macht Code einfacher zu strukturieren, wiederzuverwenden und zu testen, besonders wenn ein Modell viele Methoden braucht.

---
layout: image-right
image: https://cover.sli.dev
---

# Historie: Warum gab es Klassen in JavaScript?

Vor ES6 war OOP in JS umständlich (Prototype-Ketten, Funktionskonstruktoren). `class` brachte eine klare, bekannte Syntax und machte Vererbung verständlicher und wartbarer.

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Kurzüberblick

::left::

- `class` bündelt Daten und Verhalten.
- `public`, `private`, `protected`, `#` steuern den Zugriff.
- `extends` und `super` nutzen Vererbung.

::right::

<WindowMockup codeblock title="order.ts">

<!-- prettier-ignore -->
```ts {1|2|3|4|5,14|*}
class Order {  // [!code word:class]
  public id: string; // [!code word:public]
  protected total: number; // [!code word:protected]
  private legacySecret: string; // [!code word:private]
  #secretCode: string; // [!code word:#]

  constructor(id: string, total: number, secretCode: string) {
    this.id = id;
    this.total = total;
    this.legacySecret = secretCode;
    this.#secretCode = secretCode;
  }

  #maskCode(): string {
    return this.#secretCode.slice(-2).padStart(this.#secretCode.length, '*');
  }
}
```

<!-- prettier-ignore-end -->

</WindowMockup>

---

# `private` vs `#`

- `private` ist eine TypeScript-Restriktion zur Compile-Zeit: Der Zugriff wird vom Type-Checker verhindert, zur Laufzeit ist das Feld technisch normal.
- `#` sind echte private Klassenfelder in JavaScript: Diese Felder sind zur Laufzeit gekapselt und von außen nicht erreichbar.
- In TypeScript bedeutet das: `private` hilft beim Refactoring, `#` garantiert echte Laufzeit-Privatsphäre.

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Vererbung mit extends und super

::left::

- Eine eine Klasse kann von einer anderen erben.

<v-clicks>

- Mit `extends` wird die Vererbeung eingeleitet.
- Der Basiskonstruktor wird mit `super` gerufen.

</v-clicks>

::right::
<WindowMockup codeblock title="vip-order.ts">

<!-- prettier-ignore -->
```ts {all|5|9|*}{at:1} twoslash
class Order {
  constructor(public id: string, protected total: number) {}
}

class VipOrder extends Order { // [!code word:extends]
  private discount: number;

  constructor(id: string, total: number, discount: number) {
    super(id, total); // [!code word:super]
    this.discount = discount;
  }

  // ...
}
```

<!-- prettier-ignore-end -->
</WindowMockup>

---

# Kurzschreibweise im Konstruktor

<WindowMockup codeblock title="shorthand.ts">

```ts {all} twoslash
class Order {
  constructor(
    public id: string,
    protected total: number,
    private legacySecret: string
  ) {}

  // ...
}
```

</WindowMockup>

<br />

<Callout type="info">
TypeScript erlaubt, Felder direkt im Konstruktor zu deklarieren und zu initialisieren. Dadurch fallen die expliziten Felddeklarationen und Zuweisungen weg.
</Callout>

---
layout: task
---

# Klassen in TypeScript
