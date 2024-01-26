//Oppretter et tomt array hvor jeg skal sette inn objekter(bestilling), og eventuelt tømme det
let kinobiletter = [];

//Oppretter en let boolean(Prøvde const, men fikk rød strek) og setter den til true. Bruker
//denne til å sjekke om det er skrevet noe i input feltene.
let input = true;

//Oppretter en funksjon addFilm(), som kjøres når knappen "kjøp bilett" klikkes
function addFilm() {

    //Oppretter objekt av verdiene som blir satt inn fra input-feltene
    const bestilling = {
        film: document.getElementById('film').value,
        antall: document.getElementById('antall').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefonnr: document.getElementById('telefonnr').value,
        epost: document.getElementById('epost').value
    };

    //Hvis det ikke er skrevet/valgt noe i input-feltene, så skal feilmelding skrives ut.
    //Dersom det er skrevet/valgt noe, så skal feilmeldingen settes til et tomt string ""
    if(film.value === "Velg film her"){
        document.getElementById('errorFilm').innerHTML = " Må velge en film";
    } else{
        document.getElementById('errorFilm').innerHTML = "";
    }

    if(antall.value === ""){
        document.getElementById('errorAntall').innerHTML = " Må skrive noe inn i antall";

    } else{
        document.getElementById('errorAntall').innerHTML = "";
    }

    if(fornavn.value === ""){
        document.getElementById('errorFornavn').innerHTML = " Må skrive noe inn i fornavnet";
    } else{
        document.getElementById('errorFornavn').innerHTML = "";
    }

    if(etternavn.value === ""){
        document.getElementById('errorEtternavn').innerHTML = " Må skrive noe inn i etternavnet";
    } else{
        document.getElementById('errorEtternavn').innerHTML = "";
    }

    if(telefonnr.value === ""){
        document.getElementById('errorTelefonnr').innerHTML = " Må skrive noe inn i telefonnr";
    } else{
        document.getElementById('errorTelefonnr').innerHTML = "";
    }

    if(epost.value === ""){
        document.getElementById('errorEpost').innerHTML = " Må skrive noe inn i epost";
    } else{
        document.getElementById('errorEpost').innerHTML = "";
    }

    //Dersom input-feltene er tomme, settes input = false og ufullstendige bestilling-objekter settes ikke inn i arrayet
    if(antall.value === "" || fornavn.value === "" || etternavn.value === "" || telefonnr.value === "" || epost.value === "" || film.value === "Velg film her"){
        input = false;
    }
    //Dersom input er true, så skal bestilling-objektet settes inn i kinobiletter arrayet.
    if(input){
        kinobiletter.push(bestilling);
    }

    //console.log(kinobiletter);

    /*<th> er for overskrift-kolonner,
    <tr> er rader,
    <td> kolonner*/

    //Bruker <table> for å lage en tabell for der output skal listes ut.
    //Bruker <tr> for å lage en rad for overskriftene, og <th> for å ha overskriftene i "overskrift-kolonne".
    let output = "<table><tr> <th>Film</th> <th>Antall</th> <th>Fornavn</th> <th>Etternavn</th> <th>Telefonnr</th> <th>Epost</th></tr>"

    //Bruker en for-each løkke og legger til en rad for hvert objekt som skal listes ut, og kolonne for hver verdi.
    for(let bilett of kinobiletter) {
        output += "<tr> <td>" + bilett.film + "</td> <td>" + bilett.antall + "</td> <td>" + bilett.fornavn + "</td> <td>" + bilett.etternavn + "</td> <td>" + bilett.telefonnr + "</td> <td>" + bilett.epost + "</td></tr>";
    }
    output+= "</table>"

    //Legger ut output på nettsiden
    document.getElementById('output').innerHTML = output;

    //Tømmer input-feltene
    document.getElementById('film').value = "";
    document.getElementById('antall').value = "";
    document.getElementById('fornavn').value = "";
    document.getElementById('etternavn').value = "";
    document.getElementById('telefonnr').value = "";
    document.getElementById('epost').value = "";

}

//Oppretter en funksjon som tømmer arrayet når knappen "slett alle bilettene" trykkes,
//og som også tømmer output-feltet.
function deleteAll(){
    kinobiletter = [];
    document.getElementById('output').innerHTML = "";
}