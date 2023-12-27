package com.gymapp.backend.repository;

import com.gymapp.backend.Entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

}
