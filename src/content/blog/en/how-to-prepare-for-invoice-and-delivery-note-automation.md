---
id: facturas-preparar
title: How to prepare for invoice and delivery note automation
description: The steps to get your documents, spreadsheets and review rules ready before you automate the reading of invoices and delivery notes.
date: 2026-04-28
category: automation
product: invoice-automation
---
Automating the reading of invoices and delivery notes works best when it's well prepared. You don't need to be a tech expert: you just need to be clear about which documents you receive, which details you need and where they have to go. This guide helps you gather that information before you start, so that setting it up is quicker and there are no surprises.

## 1. Gather a sample of real documents

Collect examples of what you actually receive: PDF invoices that arrive by email, paper delivery notes, photos taken on a phone and scanned documents. Include your main suppliers and also any that cause you trouble, such as a handwritten delivery note or an invoice with lots of lines. The more representative the sample, the better the [[automation|automatizacion]] will fit.

## 2. Decide which details you need

Not every business needs the same thing. Tick what matters to you:

- The supplier and their tax ID.
- Document number and dates.
- Net amount, taxes and total.
- Line items: reference, description, quantity and price.
- Related order or delivery note number.

If you only need totals for the accounts, the approach is simpler than if you want to track stock line by line.

## 3. Define the destination and its format

Think about where the data should go:

| Destination | What to prepare |
| --- | --- |
| Spreadsheet or Excel | The exact columns and their order |
| CSV file | The format your accounting software accepts |
| CRM, ERP or management software | Which fields it takes and whether it accepts data by [[webhook|webhook]] |

If the data has to reach another system, that [[integration|integracion]] is designed at this stage.

## 4. Organise how documents come in

Agree on a single entry point: for example, an email address used only for supplier invoices, or a folder where scans are uploaded. If everyone saves documents in a different place, nothing automates well.

## 5. Set review rules

The automation alerts you when a document needs checking. You decide which cases you always want to review:

1. New suppliers that weren't on the list.
2. Amounts above a threshold you set.
3. Blurred or incomplete documents.
4. Totals that don't match the sum of the lines.

Also name the person responsible for dealing with those alerts.

## 6. Run a trial with a real period

Before using it day to day, process a few weeks' worth of documents and compare the result with what would have been typed in by hand. That way you can check the data comes out where and how you expect.

## 7. Look after the data

Invoices and delivery notes contain details of suppliers and sometimes of individuals. Limit access to those who need it and handle them in line with [[GDPR|rgpd]].

With this preparation, [Invoice and delivery note automation](product:invoice-automation) fits your documents from day one. To avoid the most common slip-ups once it's running, read [Invoice automation mistakes and how to check the results](post:facturas-errores).
