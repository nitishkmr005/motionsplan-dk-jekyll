---
title: "Udregning af fedtprocent"
redirect_from: /artikel/udregning-af-fedtprocent
language: da
header:
  overlay_image: /assets/images/2051761_50.jpg
  teaser: /assets/images/2051761_50.jpg
tags:
  - fedtprocent
  - udregning
category:
  - Ernæring
last_modified_at: 2019-03-06T23:14:14Z
---

Nedenunder kan du udregne, om du er tynd eller tyk ift. det normale. Du skal dog være opmærksom på, at det er en indirekte måling, som ikke tager højde for, om din vægt skyldes muskler eller fedt.

Den bedste måling er altid spejlet - formularen kan kun være for sjov.

 { alert("\\nTallene skal være større end nul.") OK = false; } if (!OK) { field.focus(); field.select(); } else field.value = value; return OK; } man = true; // Nødvendig for NN 2.x, og Opera 3.2x sammen med onClick i radio-buttons function Calculate(form) { OK = true; a = parseInt(form.age.value); h = parseInt(form.height.value); w = parseInt(form.weight.value); OK = checkNumber(a, form.age, "Alder"); if (OK) OK = checkNumber(h, form.height, "Højde"); if (OK) OK = checkNumber(w, form.weight, "Vægt"); if (OK) { h = h / 100; BMI = w / (h \* h); if (man) fm = 0.988 \* BMI + 0.242 \* w + 0.094 \* a -30.18; else fm = 0.988 \* BMI + 0.344 \* w + 0.094 \* a -30.18; fp = fm / w \* 100; if (BMI<10) window.alert("Jeg er ret sikker på, at du har tastet de forkerte værdier ind. BMI er sandsynligvis mere end mindst 15, og dit BMI er under 10. Det betyder, at resten af udregningerne også er forkerte!") form.BMI.value = Math.round(BMI \* 100) / 100; form.fedtmasse.value = Math.round(fm \* 100) / 100; form.fedtprocent.value = Math.round(fp \* 100) / 100; } } function Reset(form) // Nødvendig for NN 2.x og IE 3.x { man = true; form.age.value = ""; form.height.value = ""; form.weight.value = ""; } //--> Køn: Mand KvindeAlder: årHøjde: cmVægt: kgBody mass index (BMI):(udregnes)Fedtmasse: kg (udregnes)Fedtprocent: (udregnes) [Peter H. S. Madsen](http://web.archive.org/web/20030210183727/http://www.image.dk/%7Epetermad/) skrev javascript til udregningen.Hvis du vil vide lidt mere om body mass index og fedtprocent, kan du læse videre nedenunder..

Body Mass Index (BMI)
---------------------

BMI er nogenlunde korreleret med fedtprocenten, og kan derfor bruges til at estimere fedme. BMI tager ikek højde for, om din vægt skyldes muskler eller fedt.

BMI er let at kalkulere, når du kender din højde og din vægt:

\[display\]BMI = \\frac{vægt (kg)}{højde (m)^2}\[/display\]

I tabel 1 kan du se normalværdierne for BMI:

Tabel 1: Body Mass IndexKlassifikationKvinde (kg/m2)Mand (kg/m2)UndervægtigNormalOvervægtigFedUnder 2020-2525-3030 og højere

Under 2020-2525-3030 og højere

BMI er ikke præcis, hvis du er høj eller eller ikke så høj. BMI fungerer derfor bedst til voksne mennesker, hvis højde er indenfor normalområdet.

Fedtprocent
-----------

Fedtprocenten er den relative del af kropsvægten, som du slæber rundt på. Du har behov for fedt for overhovedet at kunne holde varmen. I formularen oven for er fedtprocenten udregnet ud fra køn, BMI og alder.

Tabel 2: Fedtprocent normerKlassifikationKvinde (% fedt)Mand (% fedt)Essentiel fedtUdholdenhedsatletAtletFitnessGrænsende til problemFed

10-12%14-16%17-20%21-24%24-29%30 og højere

2-4%6-8%10-13%14-17%18-22%23 og højere

Data fra Howley and Franks: Health/Fitness Instructor's Handbook, Human Kinetics 1986.Udregningen af fedtprocent har en standardfejl på på 3,9 kilo. Det betyder, at den værdi du har udregnet i formularen kan svinge med 3,9 kilo ift. den virkelige værdi. Fedtprocenten er udregnet på baggrund af BMI og er således behæftet med de samme usikkerheder som under BMI.

### Måling af fedtprocent med bioimpedans

Man kan også måle ens fedtprocent med bioimpedans. Tanita har [forskellige](https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=9750&htmlurl=https://www.abilicaonline.dk/salg/fitnessvaegte/tanita-sr-901/) [modeller](https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=9750&htmlurl=https://www.abilicaonline.dk/salg/fitnessvaegte/tanita-rd-545/), som er rettet mod private brugere. Vær blot opmærksom på, at der ved Bioimpedans er lige så mange fejlkilder som med udregning af fedtprocenten ud fra BMI.
