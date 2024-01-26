package com.oslomet.oblig3;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Har brukt lombok slik at jeg slipper å
//skrive ekstra kode for get/set og konstruktør
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Kino")
public class Kino {
    @Id
    @GeneratedValue
    private Integer id;
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private int telefonnr;
    private String epost;
}