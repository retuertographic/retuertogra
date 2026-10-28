---
id: integraciones-mantener
title: "Automatisierungen, die zuverlässig laufen: häufige Fehler und Wartung"
description: Warum eine Integration, die funktioniert hat, plötzlich ausfallen kann, welche Fehler Sie beim Automatisieren vermeiden sollten und eine einfache Checkliste für die Pflege.
date: 2026-03-14
category: automation
product: system-integrations
image: catalog-web-maintenance.webp
---
Eine gut gemachte [[Automatisierung|automatizacion]] arbeitet im Stillen: Daten gelangen von einem Tool ins andere, und niemand muss daran denken. Diese Stille ist zugleich ihre Schwachstelle. Fällt sie eines Tages aus und niemand bemerkt es, kommen Bestellungen wochenlang nicht in der Kontrolltabelle an oder Anfragen nicht im CRM. Dies sind die häufigsten Fehler – und so vermeiden Sie sie.

## Warum etwas ausfällt, das funktioniert hat

Die Tools, die Sie verbinden, verändern sich mit der Zeit, auch wenn Sie selbst nichts anfassen:

- Eine Anwendung aktualisiert ihre [[API|api]] oder ändert die Art, wie sie Daten sendet.
- Jemand benennt ein Formularfeld oder eine Tabellenspalte um.
- Ein Passwort läuft ab, oder der Benutzer, der die Verbindung autorisiert hat, wird gelöscht.
- Der Tarif eines Tools ändert sich, und eine benötigte Funktion fällt weg.

Keine dieser Änderungen ist schlimm, wenn sie rechtzeitig bemerkt wird. Das Problem ist, nichts davon zu erfahren.

## Häufige Fehler

### Keine Fehlerbenachrichtigungen

Jede [[Integration|integracion]] sollte jemanden benachrichtigen, wenn sie ihre Aufgabe nicht erledigen kann. Ohne solche Hinweise ist das erste Anzeichen meist ein Kunde, der fragt, warum er keine Antwort erhalten hat.

### Niemand ist zuständig

Ist niemand für die Automatisierung verantwortlich, prüft auch niemand die Hinweise oder gibt Änderungen weiter. Benennen Sie eine Person im Team als internen Ansprechpartner.

### Das private Konto eines Mitarbeiters verbinden

Hängt die Verbindung am Konto einer Person und verlässt diese das Unternehmen, fällt die Integration mit ihr weg. Verwenden Sie nach Möglichkeit Firmenkonten.

### Nichts dokumentieren

Monate später weiß niemand mehr, was jede Automatisierung tat oder welcher [[Webhook|webhook]] Daten wohin schickte. Eine kurze Beschreibung jeder Integration erspart stundenlange Spurensuche.

### Zu viel auf einmal automatisieren

Mehrere neue Automatisierungen gleichzeitig machen es schwer zu erkennen, welche fehlschlägt. Führen Sie sie nacheinander ein und prüfen Sie jede, bevor Sie zur nächsten übergehen.

### Schleifen erzeugen

Aktualisiert Tool A das Tool B und Tool B wiederum Tool A, können Daten doppelt entstehen oder E-Mails zweimal verschickt werden. Legen Sie immer fest, welches Tool für welche Angabe maßgeblich ist.

## Monatliche Checkliste

1. Gab es diesen Monat Fehlerbenachrichtigungen? Wurden sie behoben?
2. Testen Sie jede wichtige Integration mit einem echten Vorgang: Senden Sie ein Formular ab und prüfen Sie, ob es ankommt.
3. Prüfen Sie, ob ein Tool Änderungen oder Updates angekündigt hat.
4. Vergewissern Sie sich, dass die Konten, die die Verbindungen autorisieren, noch aktiv sind.
5. Aktualisieren Sie die Dokumentation, wenn sich etwas geändert hat.

## Woran Sie erkennen, ob es sich noch lohnt

Wählen Sie zwei einfache [[KPIs|kpi]]: wie oft jede Automatisierung gelaufen ist und wie oft sie fehlgeschlagen ist. Wird eine Automatisierung kaum genutzt, hat sich vielleicht der Ablauf geändert und sie wird nicht mehr gebraucht. Schlägt sie häufig fehl, ist eine Überprüfung fällig.

Die [Integrationen und Prozessautomatisierung](product:system-integrations) umfassen Dokumentation und Support für jede Integration. Damit auch Ihre Website gepflegt bleibt, lesen Sie [Was Website-Wartung umfasst und warum Sie sie nicht vergessen sollten](post:mantenimiento-web).
