function pokazAlert() { 
    alert("Witaj na mojej stronie!"); game()
} 

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

dodawanieLiczb();

function dodawanieLiczb() {
    var liczba1 = prompt("Podaj pierwszą liczbę całkowitą:");
    var liczba2 = prompt("Podaj drugą liczbę całkowitą:");

    liczba1 = parseInt(liczba1);
    liczba2 = parseInt(liczba2);

    if (!isNaN(liczba1) && !isNaN(liczba2)) {
        var suma = liczba1 + liczba2;
        alert("Wynik dodawania: " + suma);
    } else {
        alert("Podane wartości nie są liczbami całkowitymi.");
    }
}

setInterval(time, 1000);

function time(){
    var date = new Date()

    var hour = date.getHours();
    var minute = date.getMinutes();
    var s = date.getSeconds();

    document.getElementById("tekst").innerHTML= 
    `${hour}:${minute}:${s}`

}

function game(){
    var number = Math.floor(Math.random()*100);
    var shot = -1;
    var count = 0;
    while(number != shot){
        shot = prompt("");
        count++
        if(number > shot){
            alert("za mała");
        }
        else if(number < shot){
            alert("za duza");
        }
        else{
            alert(`Zgadłes ${count}`)
        }

    }

}