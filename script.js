// Zadání
// Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

// Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.

const mnozstvi = Number(prompt("Zadej počet kusů:"))
let cena = ""

if (mnozstvi > 1000) {
    cena = 120
} else if (mnozstvi > 500) {
    cena = 150
} else if (mnozstvi > 200) {
    cena = 200
} else if (mnozstvi >= 50) {
    cena = 250
} else {
    cena = 300
}

document.body.innerHTML = `Cena za kus je ${cena} Kč, celková cena objednávky je ${cena * mnozstvi} Kč.`