package com.oslomet.oblig3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KinoRepository extends JpaRepository<Kino,Long> {
}
