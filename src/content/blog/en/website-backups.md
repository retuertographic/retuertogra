---
id: mantenimiento-copias
title: "Website backups: what to keep, where and how often"
description: What a website backup should include, where it's best stored, how often to make one and how to check that it actually works.
date: 2026-08-25
category: maintenance
product: web-maintenance
---
A [[backup|copia-seguridad]] is a website's life insurance. While everything works it seems unnecessary, but the day an update fails, someone deletes a page by mistake or the site is attacked, it's the only thing standing between a scare and a disaster. Simply having one isn't enough: it has to be complete, recent and stored in the right place.

## What it should include

A website has two parts and the backup must cover both:

- **The files**: the code, the theme, the [[plugins|plugin]], the images and any uploaded documents.
- **The database**: the text, pages, products, orders, users and settings.

A backup of only the files or only the database won't let you recover the whole site. If you have an online shop or forms that store requests, the database changes every day and is the most sensitive part.

## Where to store it

The golden rule is never to keep the backup only on the same server as the website. If the server fails or is attacked, the backup disappears with it. The recommended approach is to keep at least one copy elsewhere, in a storage service separate from your [[hosting|hosting]]. Many providers include automatic backups, but it's worth knowing how many days they keep them and how they are restored.

## How often

It depends on how much your website changes:

| Type of website | Indicative frequency |
| --- | --- |
| Company website that is rarely updated | Weekly and before every change |
| Website with a blog or frequent news | Daily |
| Online shop or website with forms and bookings | Daily or several times a day |

On top of that, always make a manual backup just before updating the [[CMS|cms]] or any add-on.

## How long to keep them

The latest backup alone isn't enough: sometimes a problem takes days to be noticed and the most recent backup already contains the fault. Keeping several backups from different dates, for example those from the last week plus a monthly one, lets you go back to a point when everything was fine.

## Check that it works

A backup that has never been restored is an untested promise. Every so often, restore a backup in a test environment and check that the site loads, the images appear and the forms work.

## Protect the data

Backups contain the same information as the website, including customers' personal data. They must be stored with restricted access and in compliance with [[GDPR|rgpd]], just like the website itself.

Backups are part of [basic website maintenance](product:web-maintenance). To see the rest of the tasks, read [What website maintenance includes](post:mantenimiento-web).
