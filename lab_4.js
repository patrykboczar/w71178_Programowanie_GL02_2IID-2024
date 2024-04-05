//zad1
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getInfo() {
      return `${this.title} - ${this.author} (${this.year})`;
    }
  }
  
  const book1 = new Book("1984", "George Orwell", 1949);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  

  console.log(book1.getInfo());
  console.log(book2.getInfo()); 

  //zad2
  class Student {
    constructor(imie, nazwisko, numerAlbumu, oceny) {
      this.imie = imie;
      this.nazwisko = nazwisko;
      this.numerAlbumu = numerAlbumu;
      this.oceny = oceny;
    }
  
    pelneImie() {
      return `${this.imie} ${this.nazwisko}`;
    }
  
    
    obliczSredniaOcen() {
      const sumaOcen = this.oceny.reduce((suma, ocena) => suma + ocena, 0);
      return sumaOcen / this.oceny.length;
    }
  }
  
  
  const student1 = new Student("Anna", "Kowalska", "W172692", [4, 4.5, 5]);
  const student2 = new Student("Jan", "Nowak", "W2137", [3.5, 4, 4]);
  
  
  console.log(`${student1.pelneImie()} - Średnia ocen: ${student1.obliczSredniaOcen().toFixed(2)}`);
  console.log(`${student2.pelneImie()} - Średnia ocen: ${student2.obliczSredniaOcen().toFixed(2)}`);
  
  //zad3, zad4 

  class Car {
    constructor(marka, model, rokProdukcji, kolor, predkosc) {
      this.marka = marka;
      this.model = model;
      this.rokProdukcji = rokProdukcji;
      this.kolor = kolor;
      this.predkosc = predkosc;
    }
  
    przyspiesz(wartosc) {
      this.predkosc += wartosc;
    }
  
    zwolnij(wartosc) {
      this.predkosc -= wartosc;
    }
  
    informacje() {
      return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    }
  
    wiekSamochodu() {
      const obecnyRok = new Date().getFullYear();
      return obecnyRok - this.rokProdukcji;
    }
  }
  
  const samochod = new Car("Toyota", "Camry", 2022, "czarny", 0);
  
   console.log(samochod.informacje()); 
  samochod.przyspiesz(50);
  console.log(samochod.informacje()); 
  samochod.zwolnij(20);
  console.log(samochod.informacje()); 
  console.log(`Wiek samochodu: ${samochod.wiekSamochodu()} lat`); 
  
  //zad5 
  class Prostokat {
    constructor(dluzszyBok, krotszyBok) {
      this.dluzszyBok = dluzszyBok;
      this.krotszyBok = krotszyBok;
    }
  
    pole() {
      return this.dluzszyBok * this.krotszyBok;
    }
  
    obwod() {
      return 2 * (this.dluzszyBok + this.krotszyBok);
    }
  
    czyKwadrat() {
      return this.dluzszyBok === this.krotszyBok;
    }
  
    informacje() {
      return `Dłuższy bok: ${this.dluzszyBok}, Krótszy bok: ${this.krotszyBok}, Pole: ${this.pole()}, Obwód: ${this.obwod()}, Czy kwadrat: ${this.czyKwadrat() ? 'Tak' : 'Nie'}`;
    }
  }
  
 
  const prostokat1 = new Prostokat(15, 16); 
  const prostokat2 = new Prostokat(9, 9);  
  
  
  console.log(prostokat1.informacje());
  console.log(prostokat2.informacje());
  
  //zad6
