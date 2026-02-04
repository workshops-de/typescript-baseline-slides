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
- Änderung an einem Ort statt in vielen Dateien
- Weniger Copy-Paste und weniger Fehler

---
layout: default
---

# Inline-Typen vermeiden

- Inline-Typen werden lang und wiederholen sich
- Kleine Änderungen erzeugen Drift zwischen Modellen
- Interfaces sind ideal für Objektformen
- Types sind flexibel für Aliase und Kombinationen

---
layout: little-what
---

# interface

Ein `interface` beschreibt die Form von Objekten und lässt sich mit `extends` erweitern.

---
layout: why
---

# interface

- Ideal für Domain-Modelle mit Objektstruktur
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

Ein `type` ist ein Alias für einen Typ und kann Typen kombinieren, z. B. mit `&`.

---
layout: why
---

# type

- Auch für Nicht-Objekte nutzbar
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

---
layout: task
---

# Types & Interfaces - Wiederverwendung
