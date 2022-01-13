"use strict";

// Užduotis

// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai

// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loopnurodydami informaciją iš masyvo.

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².
var saliuInfo = [
  { pavadinimas: "Portugalija", gyventojuSkaicius: 10.26, plotas: 92212 },
  { pavadinimas: "Lietuva", gyventojuSkaicius: 2.79, plotas: 65300 },
  { pavadinimas: "Latvija", gyventojuSkaicius: 1.9, plotas: 64589 },
  { pavadinimas: "Ispanija", gyventojuSkaicius: 47, plotas: 505990 },
  { pavadinimas: "Estija", gyventojuSkaicius: 1.33, plotas: 45226 },
];

function valstybes() {
  for (var x of saliuInfo) {
    var vidurkis = (x.plotas * Number(1000000)) / x.gyventojuSkaicius;
    console.log(vidurkis);
    document.write(
      `<br><br>Šalis: ${x.pavadinimas} joje gyvena ${
        x.gyventojuSkaicius
      } mln. gyventojų. <br>Valstybės plotas: ${
        x.plotas
      } km², plotas tenkantis vienam gyventojui: ${vidurkis.toFixed(2)} m².`
    );
  }
}

valstybes();
