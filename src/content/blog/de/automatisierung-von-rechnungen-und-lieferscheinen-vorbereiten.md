---
id: facturas-preparar
title: Die Automatisierung von Rechnungen und Lieferscheinen vorbereiten
description: Die Schritte, mit denen Sie Dokumente, Tabellen und Prüfregeln vorbereiten, bevor Sie das Auslesen von Rechnungen und Lieferscheinen automatisieren.
date: 2026-04-28
category: automation
product: invoice-automation
---
Das automatische Auslesen von Rechnungen und Lieferscheinen bringt die besten Ergebnisse, wenn es gut vorbereitet ist. Technisches Fachwissen brauchen Sie dafür nicht: Es genügt, wenn Sie wissen, welche Dokumente Sie erhalten, welche Angaben Sie benötigen und wohin sie gelangen sollen. Dieser Leitfaden hilft Ihnen, diese Informationen vorab zusammenzutragen, damit die Einführung schneller geht und es keine Überraschungen gibt.

## 1. Sammeln Sie echte Beispieldokumente

Stellen Sie Beispiele dessen zusammen, was Sie tatsächlich erhalten: PDF-Rechnungen per E-Mail, Lieferscheine auf Papier, Handyfotos und gescannte Dokumente. Berücksichtigen Sie Ihre wichtigsten Lieferanten und auch solche, die Probleme bereiten, etwa einen handschriftlichen Lieferschein oder eine Rechnung mit sehr vielen Positionen. Je repräsentativer die Auswahl, desto besser passt die [[Automatisierung|automatizacion]].

## 2. Legen Sie fest, welche Angaben Sie brauchen

Nicht jedes Unternehmen braucht dasselbe. Markieren Sie, was für Sie wichtig ist:

- Lieferant und seine Steuernummer.
- Belegnummer und Datum.
- Nettobetrag, Steuern und Gesamtbetrag.
- Positionen: Artikelnummer, Beschreibung, Menge und Preis.
- Zugehörige Bestell- oder Lieferscheinnummer.

Wenn Sie für die Buchhaltung nur die Summen benötigen, ist der Ansatz einfacher, als wenn Sie den Lagerbestand Position für Position abgleichen möchten.

## 3. Bestimmen Sie Ziel und Format

Überlegen Sie, wohin die Daten gehen sollen:

| Ziel | Was Sie vorbereiten sollten |
| --- | --- |
| Tabelle oder Excel | Die genauen Spalten und ihre Reihenfolge |
| CSV-Datei | Das Format, das Ihre Buchhaltungssoftware akzeptiert |
| CRM, ERP oder Verwaltungssoftware | Welche Felder es erwartet und ob es Daten per [[Webhook|webhook]] annimmt |

Müssen die Daten in ein anderes System, wird diese [[Integration|integracion]] in dieser Phase geplant.

## 4. Ordnen Sie den Eingang der Dokumente

Vereinbaren Sie einen einzigen Eingangsweg, zum Beispiel eine E-Mail-Adresse nur für Lieferantenrechnungen oder einen Ordner, in den die Scans hochgeladen werden. Wenn jeder die Dokumente an einem anderen Ort ablegt, lässt sich nichts sauber automatisieren.

## 5. Legen Sie Prüfregeln fest

Die Automatisierung gibt Bescheid, wenn ein Dokument geprüft werden muss. Sie entscheiden, welche Fälle Sie immer prüfen möchten:

1. Neue Lieferanten, die noch nicht auf der Liste stehen.
2. Beträge oberhalb einer von Ihnen festgelegten Grenze.
3. Unscharfe oder unvollständige Dokumente.
4. Gesamtbeträge, die nicht mit der Summe der Positionen übereinstimmen.

Benennen Sie außerdem die Person, die sich um diese Hinweise kümmert.

## 6. Testen Sie mit einem echten Zeitraum

Bevor Sie es im Alltag einsetzen, verarbeiten Sie die Dokumente einiger Wochen und vergleichen das Ergebnis mit dem, was von Hand erfasst worden wäre. So prüfen Sie, ob die Daten dort und so ankommen, wie Sie es erwarten.

## 7. Schützen Sie die Daten

Rechnungen und Lieferscheine enthalten Angaben zu Lieferanten und mitunter zu Personen. Beschränken Sie den Zugriff auf diejenigen, die ihn brauchen, und behandeln Sie die Daten gemäß der [[DSGVO|rgpd]].

Mit dieser Vorbereitung passt sich die [Automatisierung von Rechnungen und Lieferscheinen](product:invoice-automation) vom ersten Tag an Ihre Dokumente an. Wie Sie die häufigsten Fehler im laufenden Betrieb vermeiden, lesen Sie in [Fehler bei der Rechnungsautomatisierung und wie Sie die Ergebnisse prüfen](post:facturas-errores).
