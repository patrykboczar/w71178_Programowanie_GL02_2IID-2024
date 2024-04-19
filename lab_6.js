//zad1
function silnia(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * silnia(n - 1);
    }
}

function zmienWidocznosc(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = (element.style.display === 'none') ? '' : 'none';
}

function dodajDoListy(){
    var text = document.getElementById('textInput').value;
    var list = document.getElementById('list');
    var elementListy = document.createElement('li');
    elementListy.textContent = text;
    list.appendChild(elementListy);
    document.getElementById('textInput').value = '';

}
function dodaj() {
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = imie;
    cell2.textContent = nazwisko;
    document.getElementById('imie').value = '';
    document.getElementById('nazwisko').value = '';
}