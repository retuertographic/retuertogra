---
id: facturas-errores
title: Invoice automation mistakes and how to check the results
description: The most frequent slip-ups when automating the reading of invoices and delivery notes, and a simple way to check every month that the data is reliable.
date: 2026-02-27
category: automation
product: invoice-automation
---
Once reading invoices and delivery notes is automated, the risk changes: you stop typing, but you also stop looking at every document. That's exactly the point, as long as there's a system of checks in place. These are the mistakes worth avoiding and a simple routine to make sure the [[automation|automatizacion]] keeps doing its job properly.

## Frequent mistakes

### Ignoring review alerts

The system alerts you when a document needs checking: a blurred photo, an unknown supplier or a total that doesn't add up. If nobody deals with those alerts, doubtful documents pile up and the data is left incomplete. Assign someone responsible and a fixed time of day or week to review them.

### Trusting it without checking

Just because the process is automatic doesn't mean you never need to look at it. Comparing a small sample of documents against the exported data every now and then lets you spot any mismatch in good time.

### Changing the spreadsheet without warning

If someone adds, deletes or moves columns in the destination Excel file, or changes the fields the management software receives, the data can end up in the wrong place. Any change to the destination should be flagged beforehand so the [[integration|integracion]] can be adjusted.

### Several entry points

Some documents arrive in the general inbox, others on the manager's phone and others stay in a tray in the stockroom. Anything that doesn't come in through the agreed channel doesn't get processed. Keep a single entry point and remind both the team and your suppliers.

### Not handling supplier changes

When a supplier changes the layout of its invoice, or you start working with a new one, check the first few documents with extra care.

## How to measure the results

Pick a few [[KPIs|kpi]] and note them down every month:

| Indicator | What it tells you |
| --- | --- |
| Documents processed | The real volume the system handles |
| Documents that needed review | Which suppliers or formats cause the most work |
| Errors found in the sample | Whether data quality is holding up |
| Hours spent on the task | How much time you've won back compared with typing by hand |

Always compare with your starting point. If you noted how many hours went on typing up documents before automating, you'll know from your own figures how much you've gained.

## A monthly review in five steps

1. Check there are no outstanding alerts.
2. Pick a few documents at random and compare them with what was exported to the sheet or system.
3. See whether any supplier regularly triggers reviews.
4. Confirm that data sent by [[webhook|webhook]] has reached your CRM or ERP.
5. Note the month's indicators and compare them with the previous one.

Half an hour a month gives you peace of mind that your purchasing, accounting and stock data is reliable.

[Invoice and delivery note automation](product:invoice-automation) includes classification, validation and alerts when a document needs review. If you'd also like to connect your company's other tools, read [How to plan an integration between apps, step by step](post:integraciones-paso-a-paso).
