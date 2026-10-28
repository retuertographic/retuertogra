---
id: integraciones-mantener
title: "Automations that keep working: common mistakes and how to maintain them"
description: Why an integration that used to work can stop working, which mistakes to avoid when automating processes and a simple checklist to keep them up to date.
date: 2026-03-14
category: automation
product: system-integrations
image: catalog-web-maintenance.webp
---
A well-built [[automation|automatizacion]] works quietly: data passes from one tool to another and nobody has to think about it. That quietness is also its weak spot. If one day it stops working and nobody notices, orders don't reach the tracking sheet or requests don't get into the CRM for weeks. These are the most common mistakes and how to avoid them.

## Why something that worked stops working

The tools you connect change over time, even if you don't touch anything:

- An app updates its [[API|api]] or changes the way it sends data.
- Someone renames a form field or a spreadsheet column.
- A password expires or the user who authorised the connection is removed.
- A tool's plan changes and a feature you rely on disappears.

None of these changes is serious if it's spotted in time. The problem is not finding out.

## Common mistakes

### No failure alerts

Every [[integration|integracion]] should alert someone when it can't complete its task. Without those alerts, the first symptom is usually a customer asking why nobody has replied.

### Nobody in charge

If nobody is responsible for the automation, nobody checks the alerts or passes on changes. Name someone on the team as the internal contact.

### Connecting an employee's personal account

If the connection depends on one person's account and that person leaves the company, the integration goes with them. Use company accounts wherever possible.

### Not documenting

Months later, nobody remembers what each automation did or which [[webhook|webhook]] sent data where. A short write-up of each integration saves hours of detective work.

### Automating too much at once

Several new automations at the same time make it hard to tell which one is failing. Add them one at a time and check each before moving on.

### Creating loops

If tool A updates tool B and tool B updates tool A, data can be duplicated or emails sent twice. Always decide which tool is in charge of each piece of data.

## Monthly checklist

1. Were there any failure alerts this month? Were they resolved?
2. Run a real test of each important integration: submit a form and check that it arrives.
3. Check whether any tool has announced changes or updates.
4. Confirm that the accounts authorising the connections are still active.
5. Update the documentation if anything has changed.

## How to tell if it's still worth it

Pick a couple of simple [[KPIs|kpi]]: how many times each automation has run and how many times it has failed. If an automation is hardly used, the process may have changed and it may no longer be needed. If it fails often, it's time to review it.

[Integrations and process automation](product:system-integrations) include documentation and support for every integration. To look after your website too, read [What website maintenance includes and why you shouldn't skip it](post:mantenimiento-web).
