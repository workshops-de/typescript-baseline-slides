---
layout: section
transition: slide-left
---

# Typisierung & Wiederverwendung

---
layout: little-what
---

Du nutzt `type` oder `interface`, um wiederverwendbare Typisierungen zu bauen und zu erweitern, die in anderen Dateien aufgegriffen und verwendet werden kann.

---
layout: why
---

# Warum wiederverwenden?

- Gemeinsame Strukturen bleiben konsistent
- Aenderung an einem Ort statt in vielen Dateien
- Weniger Copy-Paste und weniger Fehler

---
layout: default
---

# Inline-Typen vermeiden

- Inline-Typen werden lang und wiederholen sich
- Kleine Aenderungen erzeugen Drift zwischen Modellen
- Interfaces sind ideal fuer Objektformen
- Types sind flexibel fuer Aliase und Kombinationen

---
layout: little-what
---

# interface

Ein `interface` beschreibt die Form von Objekten und laesst sich mit `extends` erweitern.

---
layout: why
---

# interface

- Ideal fuer Domain-Modelle mit Objektstruktur
- Erweiterungen bleiben lesbar und konsistent

---
layout: default
---

# Beispiel

<WindowMockup codeblock>
```ts
interface Customer {
  name: string;
  vip?: boolean;
}
interface OrderBase {
  id: string;
  customer: Customer;
}
interface OrderWithTotal extends OrderBase {
  total: number;
}
```
</WindowMockup>

---
layout: little-what
---

# type

Ein `type` ist ein Alias fuer einen Typ und kann Typen kombinieren, z. B. mit `&`.

---
layout: why
---

# type

- Auch fuer Nicht-Objekte nutzbar
- Flexible Kombinationen und Varianten

---

# Beispiel

<WindowMockup codeblock>
```ts
type OrderWithNote = OrderBase & { note?: string };
type OrderId = string;
type Amount = number;
```
</WindowMockup>
