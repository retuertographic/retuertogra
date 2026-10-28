---
id: mantenimiento-copias
title: "Datensicherung Ihrer Website: was, wo und wie oft"
description: Was eine Datensicherung Ihrer Website enthalten sollte, wo Sie sie am besten aufbewahren, wie oft Sie sie erstellen und wie Sie prüfen, ob sie wirklich funktioniert.
date: 2026-08-25
category: maintenance
product: web-maintenance
---
Die [[Datensicherung|copia-seguridad]] ist die Lebensversicherung einer Website. Solange alles läuft, wirkt sie überflüssig. Doch an dem Tag, an dem ein Update schiefgeht, jemand versehentlich eine Seite löscht oder die Website angegriffen wird, ist sie das Einzige, was einen Schreck von einer Katastrophe trennt. Dass es sie gibt, genügt nicht: Sie muss vollständig und aktuell sein und am richtigen Ort liegen.

## Was sie enthalten muss

Eine Website besteht aus zwei Teilen, und die Sicherung muss beide abdecken:

- **Die Dateien**: Code, Theme, [[Plugins|plugin]], Bilder und hochgeladene Dokumente.
- **Die Datenbank**: Texte, Seiten, Produkte, Bestellungen, Benutzer und Einstellungen.

Eine Sicherung nur der Dateien oder nur der Datenbank reicht nicht, um die ganze Website wiederherzustellen. Haben Sie einen Onlineshop oder Formulare, die Anfragen speichern, ändert sich die Datenbank täglich und ist der empfindlichste Teil.

## Wo sie aufbewahrt wird

Die goldene Regel: Bewahren Sie die Sicherung nie nur auf demselben Server auf wie die Website. Fällt der Server aus oder wird er angegriffen, verschwindet die Sicherung mit ihm. Empfehlenswert ist mindestens eine Kopie außerhalb, bei einem anderen Speicherdienst als dem [[Hosting|hosting]]. Viele Anbieter bieten automatische Sicherungen an, Sie sollten aber wissen, wie viele Tage sie aufbewahrt werden und wie man sie wiederherstellt.

## Wie oft

Das hängt davon ab, wie oft sich Ihre Website ändert:

| Art der Website | Richtwert |
| --- | --- |
| Unternehmenswebsite, die selten aktualisiert wird | Wöchentlich und vor jeder Änderung |
| Website mit Blog oder häufigen Neuigkeiten | Täglich |
| Onlineshop oder Website mit Formularen und Reservierungen | Täglich oder mehrmals am Tag |

Erstellen Sie außerdem immer direkt vor einem Update des [[CMS|cms]] oder einer Erweiterung eine manuelle Sicherung.

## Wie lange aufbewahren

Die letzte Sicherung allein genügt nicht: Manchmal wird ein Problem erst nach Tagen bemerkt, und die jüngste Sicherung enthält den Fehler bereits. Bewahren Sie mehrere Sicherungen mit unterschiedlichem Datum auf, etwa die der letzten Woche und einige monatliche. So können Sie zu einem Zeitpunkt zurückkehren, an dem alles in Ordnung war.

## Prüfen Sie, ob sie funktioniert

Eine Sicherung, die nie wiederhergestellt wurde, ist ein ungeprüftes Versprechen. Stellen Sie von Zeit zu Zeit eine Sicherung in einer Testumgebung wieder her und prüfen Sie, ob die Website lädt, die Bilder erscheinen und die Formulare funktionieren.

## Schützen Sie die Daten

Sicherungen enthalten dieselben Informationen wie die Website, einschließlich personenbezogener Daten von Kunden. Sie müssen mit eingeschränktem Zugriff und im Einklang mit der [[DSGVO|rgpd]] aufbewahrt werden, genau wie die Website selbst.

Datensicherungen gehören zur [Website-Wartung Basis](product:web-maintenance). Die übrigen Aufgaben finden Sie in [Was Website-Wartung umfasst](post:mantenimiento-web).
