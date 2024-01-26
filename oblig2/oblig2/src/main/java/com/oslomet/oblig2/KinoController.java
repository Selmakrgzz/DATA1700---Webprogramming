package com.oslomet.oblig2;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinoController {
    //Oppretter et array, som er av typen "Kino". Den skal
    //lagre alle objektene som kommer fra klienten
    public List<Kino> KinoList = new ArrayList<>();

    //Mottar objekt fra klient, og setter den inn i arrayet
    @PostMapping("/setKinobestilling")
    public String setKinobestilling(Kino kino){
        KinoList.add(kino);
        return "Mottat bestilling";
    }

    //Returnerer innholdet i arrayet til klient
    @GetMapping("/getKinobestilling")
    public List<Kino> KinoList(){
        return KinoList;
    }

    //Tømmer innholdet i arrayet, og returnerer et tomt String
    //Metode 1
    @GetMapping("/deleteAll")
    public void deleteAll(){
        KinoList.clear();
    };

    //Metode 2
    /*@DeleteMapping("/deleteBestilling")
    public String deleteBestilling(){
        KinoList.clear();
        return "";
    }*/
}
