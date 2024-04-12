//zad1
function sprawdzWiek() {
    var wiek = prompt("Podaj swój wiek:");

    if (isNaN(wiek) || wiek < 18) {
        console.log("Jesteś niepełnoletni.");
    } else {
        console.log("Jesteś pełnoletni.");
    }
}

sprawdzWiek();

//zad2
function celsjuszToFahrenheit(celsjusz) {
    
    var fahrenheit = (celsjusz * 9/5) + 32;
    return fahrenheit;
}

var temperaturaC = 25;
console.log(temperaturaC + " stopni Celsjusza to " + celsjuszToFahrenheit(temperaturaC) + " stopni Fahrenheita.");

//zad3
var liczby = [5, 8, 12, 17, 22, 31, 40, 55, 66];

// a) Zsumowanie wartości
var suma = liczby.reduce((acc, curr) => acc + curr, 0);
console.log("Suma wartości w tablicy: " + suma);

// b) Liczby parzystych
var parzyste = liczby.filter(num => num % 2 === 0);
console.log("Liczby parzyste: " + parzyste);

// c) Mnożenie wartości przez 3
var pomnozone = liczby.map(num => num * 3);
console.log("Wartości pomnożone przez 3: " + pomnozone);

// d) Dodanie do tablicy numeru albumu i znalezienie jego indeksu
var numerAlbumu = 71178;
liczby.push(numerAlbumu);
var indexNumeruAlbumu = liczby.indexOf(numerAlbumu);
console.log("Index numeru albumu (" + numerAlbumu + ") w tablicy: " + indexNumeruAlbumu);

// e) Obliczenie średniej arytmetycznej
var srednia = suma / liczby.length;
console.log("Średnia arytmetyczna: " + srednia);

// f) Znalezienie największej liczby
var max = Math.max(...liczby);
console.log("Największa liczba: " + max);

// g) Zliczenie ilości wystąpień wybranej wartości (np. liczby parzyste)
var iloscParzystych = parzyste.length;
console.log("Ilość liczb parzystych: " + iloscParzystych);

//zad4
function fibonacci100() {
    var fib = [0, 1]; 
    for (var i = 2; i < 100; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib;
}

var fibonacciTablica = fibonacci100();

console.log("Tablica 100 kolejnych liczb ciągu Fibonacciego:");
console.log(fibonacciTablica);