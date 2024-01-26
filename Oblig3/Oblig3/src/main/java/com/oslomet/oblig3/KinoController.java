package com.oslomet.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class KinoController {

    //Kobler til repository filen?
    @Autowired
    KinoRepository kinoRepository;


    //Mottar objekt fra klient, og setter den inn i arrayet
    @PostMapping("/setKinobestilling")
    public String setKinobestilling(Kino kino){
        kinoRepository.save(kino);
        return "Mottat bestilling";
    }

    //Returnerer innholdet i arrayet til klient
    //Sorterer innholdet som skal til klienten etter etternavn alfabetisk
    @GetMapping("/getKinobestilling")
    public List<Kino> getKinobestilling(){
        return kinoRepository.findAll(Sort.by("etternavn").ascending());
    }

    //Tømmer innholdet i arrayet, og returnerer et tomt String
    //Metode 1
    @GetMapping("/deleteAll")
    public void deleteAll(){
        kinoRepository.deleteAll();
    }

    //Metode 2
    /*@DeleteMapping("/deleteBestilling")
    public String deleteBestilling(){
        KinoList.clear();
        return "";
    }*/
}