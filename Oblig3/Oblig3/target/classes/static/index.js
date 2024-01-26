$(function (){
    $("#setBestilling").click(function (){
        let input = true;

        //Oppretter et objekt som tar imot verdiene som settes inn i inputene
        const bestilling = {
            film: $("#film").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        };

        //Lager input-validering. Ikke noe spesielt nytt siden oblig1 bare at
        //koden er nå skrevet i jquery. I hvertfall, så sjekker jeg om
        //inputene er tomme og dersom de er det, så skal det gis ut beskjed
        if(film.value === "Velg film her"){
            $("#errorFilm").html("\n Må velge film");
        } else{
            $("#errorFilm").html("");
        }

        if(antall.value === ""){
            $("#errorAntall").html(" Må skrive noe inn i antall");

        } else{
            $("#errorAntall").html("");
        }

        if(fornavn.value === ""){
            $("#errorFornavn").html(" Må skrive noe inn i fornavn");
        } else{
            $("#errorFornavn").html("");
        }

        if(etternavn.value === ""){
            $("#errorEtternavn").html(" Må skrive noe inn i etternavn");
        } else{
            $("#errorEtternavn").html("");
        }

        if(telefonnr.value === ""){
            $("#errorTelefonnr").html(" Må skrive noe inn i telefonnr");
        } else{
            $("#errorTelefonnr").html("");
        }

        if(epost.value === ""){
            $("#errorEpost").html(" Må skrive noe inn i epost");
        } else{
            $("#errorEpost").html("");
        }

        //For å hindre at et tomt objekt lagres i arrayet, så setter jeg input = false
        //for de input-verdiene som står tomme
        if(antall.value === "" || fornavn.value === "" || etternavn.value === "" || telefonnr.value === "" || epost.value === "" || film.value === "Velg film her"){
            input = false;
        }

        //Dersom input=true, altså input-feltene ikke er tomme, så kan objektet
        //sendes til serveren og lagres i arrayet
        if (input){
            $.post("/setKinobestilling", bestilling, function (){
                mottaData();
                console.log("motatt bestilling!");
            });
        }

        //Tømmer input-feltene
        $("#film").val("Velg film her");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
    });

    //Det meste er samme her også fra oblig1 når det gjelder å skrive ut objektene.
    function mottaData(){
        $.get("/getKinobestilling", function (data){
            behandleData(data);
        });
    }

    function behandleData(bestilling){
        let output = "<table class='table table-striped table-bordered'><tr> <th>Film</th> <th>Antall</th> <th>Fornavn</th> <th>Etternavn</th> <th>Telefonnr</th> <th>Epost</th></tr>"
        for (let i = 0; i < bestilling.length; i++){
            output += "<tr> <td>" +bestilling[i].film + "</td> <td>" + bestilling[i].antall + "</td> <td>" + bestilling[i].fornavn + "</td> <td>" + bestilling[i].etternavn + "</td> <td>" + bestilling[i].telefonnr + "</td> <td>" + bestilling[i].epost + "</td></tr>";
        }
        output+= "</table>"
        $("#output").html(output);
    }

    //Metode for å slette alle objektene i arrayet. Begge metodene fungerer for
    //å tømme innholdet i arrayet
    $("#deleteAll").click(function (){
        //Metode 1
        $.get("/deleteAll", function (data){
            behandleData(data);
        });

        //Metode 2
        /*$.ajax({
            url: '/deleteBestilling',
            type: 'DELETE',
            success: function(result) {
                $("#output").html(result);
                console.log("Slettet!");
            }
        });*/
    });
});