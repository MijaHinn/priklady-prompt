console.log('%c CVIČENÍ: Prompt ', 'background:black;color:yellow;');

// Cvičení 1: Vytvoření uvítací zprávy
// Napište kód, který použije funkci `prompt()` k získání jména uživatele a poté do konzole napíše uvítací zprávu:
// “Ahoj. Jsem [jméno] a učím se JavaScript.”

const jmeno = prompt('Zadej jméno.');
console.log('Ahoj. Jsem', jmeno, "a učím se JacaScript.");


// Cvičení 2: Výpočet doku narození:
// Vytvořte program, který se pomocí funkce `prompt()` zeptá uživatele na jeho věk a poté vypočítá a zobrazí rok jeho narození.
// Aktuální rok můžete v JavaScriptu zjistit pomocí:
const aktualniRok = new Date().getFullYear();

const vek = Number(prompt('Kolik ti je let?'));
const rokNarozeni = aktualniRok - vek;

console.log('Tvůj rok narození je: ', rokNarozeni);


// Cvičení 3: Konverze měn
// Vytvořte jednoduchý konvertor měn, který se zeptá uživatele na částku v eurech a poté ji převede na koruny a vypíše do konzole. Předpokládejte, že směnný kurz je 23.79 Kč za 1 euro.

const euro = Number(prompt('Zadej částku v eurech.'));

const naKoruny = euro * 23.79;
const zaokrouhleniKorun = Math.round(naKoruny * 100) / 100;

console.log('Převedeno na koruny: ', zaokrouhleniKorun);