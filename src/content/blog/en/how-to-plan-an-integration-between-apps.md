---
id: integraciones-paso-a-paso
title: How to plan an integration between apps, step by step
description: A simple guide to choosing the first process to connect, describing what should happen and gathering what you need before integrating your tools.
date: 2026-04-13
category: automation
product: system-integrations
image: cta-bg.webp
---
A good [[integration|integracion]] starts long before anyone touches a setting. It starts with a clear description of what you want to happen, between which tools and with which data. The better the process is defined, the faster it gets up and running and the fewer surprises it brings later. These are the steps we follow, and you can get a head start on them yourself.

## 1. Pick a single process to start with

Don't try to connect everything at once. Choose the task that takes the most time or causes the most errors: moving website requests into the CRM, logging orders in a spreadsheet or alerting the team when a certain email arrives. Once it works, move on to the next.

## 2. Describe how it's done today

Write down, step by step, what someone does now: where they look, what they copy, where they paste it and whom they tell. This exercise often reveals unnecessary steps worth removing before automating. Automating a messy process only makes the mess move faster.

## 3. Put the rule as "when… then…"

Any [[automation|automatizacion]] can be summed up in one sentence:

- **When** someone submits the contact form, **then** a profile is created in the CRM and the salesperson gets an email alert.
- **When** an order comes in, **then** a row is added to the tracking sheet.
- **When** a customer's phone number changes in the CRM, **then** it's updated in the ERP too.

If you can't write the sentence, the process isn't clear yet.

## 4. List the tools and access

For each tool involved, note down:

| Detail | Why it matters |
| --- | --- |
| Name and plan | Some features are only available on certain plans |
| Who has admin access | It'll be needed to authorise the connection |
| Whether it offers an [[API|api]] or [[webhooks|webhook]] | It determines how it will be connected |
| Who is responsible internally | They'll be the contact if something changes |

## 5. Define which data travels

Specify which fields pass from one tool to another and what they're called in each. For example, "Full name" on the form might be "Contact" in the CRM. Send only what's needed: if there's personal data, do it in line with [[GDPR|rgpd]].

## 6. Decide what happens if something fails

A tool might be down or a piece of data might arrive incomplete. Agree who gets the alert in that case and what they should do. Better to know beforehand than to find out with a customer waiting.

## 7. Test with real cases

Before leaving it running, test the integration with real examples: a normal form, one with special characters, an incomplete one. Check the data arrives where and how it should.

## 8. Document the result

Write down what the integration does, which tools it connects and whom to ask if there are questions. That documentation will save you time when a tool changes or someone new joins the team.

[Integrations and process automation](product:system-integrations) include documentation and support for every integration. To keep your automations working over time, read [Automations that keep working: common mistakes and how to maintain them](post:integraciones-mantener).
