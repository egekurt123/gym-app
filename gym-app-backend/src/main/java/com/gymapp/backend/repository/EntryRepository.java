package com.gymapp.backend.repository;

import com.gymapp.backend.Entity.Entry;
import com.gymapp.backend.Entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EntryRepository extends JpaRepository<Entry, Long> {

    @Query("SELECT e FROM Entry e WHERE e.exercise = :exercise")
    List<Entry> findByExercise(@Param("exercise")String exercise);

    @Query("SELECT ex FROM Exercise ex, Entry en where en.id = :id AND en.exercise = ex.exerciseName")
    Exercise findExercise(@Param("id")String id);
}
