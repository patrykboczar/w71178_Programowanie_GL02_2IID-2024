//zad1
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');

    if (fieldId === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(field.value)) {
            errorSpan.style.display = 'block';
        } else {
            errorSpan.style.display = 'none';
        }
    } else if (fieldId === 'confirmPassword') {
        const password = document.getElementById('password').value;
        if (field.value !== password) {
            errorSpan.style.display = 'block';
        } else {
            errorSpan.style.display = 'none';
        }
    } else {
        if (field.value.trim() === '') {
            errorSpan.style.display = 'block';
        } else {
            errorSpan.style.display = 'none';
        }
    }
}

function validateForm() {
    const fields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    let isValid = true;

    fields.forEach(field => {
        validateField(field);
        if (document.getElementById(field + 'Error').style.display === 'block') {
            isValid = false;
        }
    });

    return isValid;
} 

//zad2
const car = {
    marka: 'Opel',
    model: 'Astra',
    rokProdukcji: 2017,
    kolor: 'czerwony',
    predkosc: 0,

    zwiekszPredkosc: function(wartosc) {
        this.predkosc += wartosc;
    },

    zmniejszPredkosc: function(wartosc) {
        this.predkosc -= wartosc;
        if (this.predkosc < 0) {
            this.predkosc = 0;
        }
    },

    informacje: function() {
        return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    }
};

//zad3
console.log(car.informacje());
car.zwiekszPredkosc(50);
console.log(car.informacje());
car.zmniejszPredkosc(20);
console.log(car.informacje());
car.zmniejszPredkosc(40);
console.log(car.informacje());


const createCar = (marka, model, rokProdukcji, kolor, predkosc) => ({
    marka: marka,
    model: model,
    rokProdukcji: rokProdukcji,
    kolor: kolor,
    predkosc: predkosc,

    zwiekszPredkosc: function(wartosc) {
        this.predkosc += wartosc;
    },

    zmniejszPredkosc: function(wartosc) {
        this.predkosc -= wartosc;
        if (this.predkosc < 0) {
            this.predkosc = 0;
        }
    },

    informacje: function() {
        return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    }
});

const cars = [
    createCar('Mercedes', 'C-Class', 2021, 'czarny', 150),
    createCar('Volkswagen', 'Golf', 2019, 'niebieski', 120),
    createCar('Skoda', 'Octavia', 2022, 'biały', 140),
    createCar('Tesla', 'Model 3', 2020, 'czerwony', 160),
    createCar('Mazda', 'CX-5', 2018, 'srebrny', 130)
];

const averageSpeed = (carArray) => {
    const totalSpeed = carArray.reduce((acc, car) => acc + car.predkosc, 0);
    return totalSpeed / carArray.length;
};

const carsFromYear = (carArray, year) => {
    return carArray.filter(car => car.rokProdukcji === year);
};

console.log('Średnia prędkość samochodów:', averageSpeed(cars));

const year = 2020;
const carsInYear = carsFromYear(cars, year);
console.log(`Samochody wyprodukowane w roku ${year}:`);
carsInYear.forEach(car => console.log(car.marka, car.model));