---
title: "Beregn din fedtprocent: Enkel udregning med højde og vægt"
seo_title: "Fedtprocent • Beregn din fedtprocent ud fra din højde og vægt »"
permalink: /artikel/udregning-af-fedtprocent
redirect_from:
  - /udregn-fp/
excerpt: "Beregn din fedtprocent med en udregning med din højde og vægt i denne simple beregner. Beregneren udregner også dit BMI."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80
  caption: Photo by i yunmai on Unsplash
  teaser: https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
category:
  - Test
tags:
  - fedtprocent
  - test
  - kropskomposition
  - skinfold
last_modified_at: 2020-02-11T23:14:14Z
toc: true
feature_row:
  - image_path: https://cdn6.tales.dk/00039/91685/cover.1589756619.jpg
    alt: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    title: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    excerpt: "Skrevet af BS, William D., PhD McArdle, M.Ed, Frank I. Katch, Victor L. Katch - og indeholder bl.a. formlen til at udregne fedtprocenten."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=55214&htmlurl=https://bogreolen.dk/exercise-physiology_bs_9781451193831"
    btn_label: "Læs mere"
    btn_class: "btn--success"
---

*[BMI]: Body Mass Index

Nedenunder kan du udregne dit body mass index (BMI) og fedtprocent og sammenligne dig med _det normale_. Målingen er indirekte og tager ikke højde for, om din vægt skyldes muskler eller fedt.

Der er mange metoder til at måle kropskomposition. De vigtigste parametre for mig er styrke, hurtighed, udholdenhed, springhøjde. Det er de parametre, du har brug for i livet, mens kropssammensætningen jo ikke tilføjer noget til dit liv.

## Udregn din fedtprocent

{% include calculate-fat-percent.html %}

## Beregn din fedtprocent fra højde og vægt

Fedtprocenten er den relative del af kropsvægten, som udgøres af fedt. Du har behov for fedt for overhovedet at kunne holde varmen. 

Formularen oven for benytter sig af to forskellige udregninger til at estimere fedtprocenten.

### Heitmann beregning af fedtprocent

Heitmann bruger i sin formel køn, BMI og alder.

#### Mænd

{% include math formula="PBF = \frac{0.988 * BMI + 0.242 * weight (kg) + 0.094 * age - 30.18;}{weight (kg)}" %}

#### Kvinder

{% include math formula="PBF = \frac{0.988 * BMI + 0.344 * weight (kg) + 0.094 * age - 30.18}{height (m)^2}" %}

### Durnin & Womersley udregning af fedtprocent

Durnin & Womersley bruger i sin formel køn og alder.

#### Mænd

PBF = 1.34 * BMI - 12.47

#### Kvinder

PBF = 1.37 * BMI - 3.47

### Duerenberg et al. udregning

PBF = 1.20 * BMI + 0.23 * age - 10.8 * sex[^note] - 5.4;

[^note]: sex: men = 1; female = 0

## Usikkerhed ved udregning af fedtprocent

Udregningen af fedtprocent i formularen har en standardfejl på på 3,9%. Det betyder, at den værdi du har udregnet i formularen kan svinge med 3,9% ift. den virkelige værdi. Fedtprocenten er udregnet på baggrund af BMI og er således behæftet med de samme usikkerheder som BMI er.

## Andre typer målinger af kropskomposition

{% assign site_posts = site.posts | where: "category", "Test" | where: "tags", "kropskomposition" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html %}
  {% endfor %}
{% endif %}

## Referencer om BMI og fedtprocentmåling

Predicting Body Composition in College Students Using the Womersley and Durnin Body Mass Index Equation Jeremy P. Loenneke*1BCDG, MS; Kathryn M. Hirt2CDG, MS; Jacob M. Wilson3CDG, PhD; Jeremy T Barnes4ABDG, PhD; Thomas J Pujol4ABDG, EdD

Evaluation of body fat estimated from body mass index, skinfolds and impedance. A comparative study. BL Heitmann - European journal of clinical nutrition, 1990 - europepmc.org

Duerenberg et al. https://www.ncbi.nlm.nih.gov/pubmed/2043597

{% include feature_row type="left" %}
