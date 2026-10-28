---
id: integraciones-paso-a-paso
title: Eine Integration zwischen Anwendungen Schritt für Schritt planen
description: Ein einfacher Leitfaden, wie Sie den ersten Ablauf zum Verbinden auswählen, beschreiben, was passieren soll, und alles Nötige zusammentragen, bevor Sie Ihre Tools integrieren.
date: 2026-04-13
category: automation
product: system-integrations
image: cta-bg.webp
---
Eine gute [[Integration|integracion]] beginnt lange bevor jemand eine Einstellung ändert. Sie beginnt mit einer klaren Beschreibung dessen, was passieren soll, zwischen welchen Tools und mit welchen Daten. Je besser der Ablauf definiert ist, desto schneller läuft er und desto weniger Überraschungen gibt es später. Diese Schritte gehen wir durch – und Sie können schon vorab damit beginnen.

## 1. Wählen Sie zum Start einen einzigen Ablauf

Versuchen Sie nicht, alles auf einmal zu verbinden. Nehmen Sie die Aufgabe, die am meisten Zeit kostet oder die meisten Fehler verursacht: Anfragen von der Website ins CRM übertragen, Bestellungen in einer Tabelle erfassen oder das Team benachrichtigen, wenn eine bestimmte E-Mail eingeht. Wenn das funktioniert, folgt der nächste Ablauf.

## 2. Beschreiben Sie, wie es heute läuft

Schreiben Sie Schritt für Schritt auf, was eine Person heute tut: wo sie nachsieht, was sie kopiert, wo sie es einfügt und wen sie informiert. Dabei zeigen sich oft überflüssige Schritte, die Sie vor der Automatisierung streichen sollten. Wer einen unordentlichen Ablauf automatisiert, sorgt nur dafür, dass die Unordnung schneller wird.

## 3. Formulieren Sie die Regel als „Wenn … dann …“

Jede [[Automatisierung|automatizacion]] lässt sich in einem Satz zusammenfassen:

- **Wenn** jemand das Kontaktformular absendet, **dann** wird ein Profil im CRM angelegt und der zuständige Vertriebsmitarbeiter per E-Mail benachrichtigt.
- **Wenn** eine Bestellung eingeht, **dann** wird der Kontrolltabelle eine Zeile hinzugefügt.
- **Wenn** sich die Telefonnummer eines Kunden im CRM ändert, **dann** wird sie auch im ERP aktualisiert.

Wenn Sie den Satz nicht formulieren können, ist der Ablauf noch nicht klar.

## 4. Listen Sie Tools und Zugänge auf

Notieren Sie für jedes beteiligte Tool:

| Angabe | Warum sie wichtig ist |
| --- | --- |
| Name und gebuchter Tarif | Manche Funktionen gibt es nur in bestimmten Tarifen |
| Wer Administratorzugang hat | Er wird benötigt, um die Verbindung zu autorisieren |
| Ob es eine [[API|api]] oder [[Webhooks|webhook]] bietet | Davon hängt ab, wie es angebunden wird |
| Wer intern verantwortlich ist | Diese Person ist Ansprechpartner, wenn sich etwas ändert |

## 5. Legen Sie fest, welche Daten übertragen werden

Geben Sie an, welche Felder von einem Tool ins andere wandern und wie sie jeweils heißen. So kann „Vollständiger Name“ im Formular im CRM „Kontakt“ heißen. Übertragen Sie nur das Nötige – bei personenbezogenen Daten gemäß der [[DSGVO|rgpd]].

## 6. Entscheiden Sie, was bei einem Fehler passiert

Ein Tool kann ausfallen, eine Angabe unvollständig ankommen. Vereinbaren Sie, wer in diesem Fall benachrichtigt wird und was zu tun ist. Besser, Sie wissen es vorher, als es zu erfahren, während ein Kunde wartet.

## 7. Testen Sie mit echten Fällen

Bevor die Integration dauerhaft läuft, testen Sie sie mit echten Beispielen: einem normalen Formular, einem mit Sonderzeichen, einem unvollständigen. Prüfen Sie, ob die Daten dort und so ankommen, wie sie sollen.

## 8. Dokumentieren Sie das Ergebnis

Halten Sie schriftlich fest, was die Integration tut, welche Tools sie verbindet und an wen man sich bei Fragen wendet. Diese Dokumentation spart Ihnen Zeit, wenn sich ein Tool ändert oder jemand Neues ins Team kommt.

Die [Integrationen und Prozessautomatisierung](product:system-integrations) umfassen Dokumentation und Support für jede Integration. Damit Ihre Automatisierungen auf Dauer funktionieren, lesen Sie [Automatisierungen, die zuverlässig laufen: häufige Fehler und Wartung](post:integraciones-mantener).
