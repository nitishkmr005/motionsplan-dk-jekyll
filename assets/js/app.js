 function CalculateS(thisform) {
     Min = thisform.Min.value;
     Sek = thisform.Sek.value;
     Puls = thisform.Puls.value;
     Koen = thisform.Koen.value;
     Alder = thisform.Alder.value;
     Vaegt = thisform.Vaegt.value;
     Tid = Min * 60 + Sek * 1
     resultat = Math.round((6.9652 + (0.020062 * Vaegt) - (0.0257 * Alder) + (0.5955 * Koen) - (0.003754 * Tid) - (0.0115 * Puls)) * Math.pow(10, 1)) / Math.pow(10, 1)
     resultat2 = Math.round((resultat / Vaegt * 1000) * Math.pow(10, 2)) / Math.pow(10, 2)
     thisform.Iltoptag.value = resultat
     thisform.Kondital.value = resultat2
     return false;
 }

// Ligner Wattmax test, men ikke samme resultater
 function CalculateBTW(thisform) {
     Wmax = thisform.Wmax.value;
     Sek = thisform.Sek.value;
     Vaegt = thisform.Vaegt.value;
     resultat = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / Vaegt * Math.pow(10, 1)) / Math.pow(10, 1)
     resultat2 = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / 1000 * Math.pow(10, 2)) / Math.pow(10, 2)
     thisform.Kondital.value = resultat
     thisform.Iltoptag.value = resultat2
     return false;
 }
 