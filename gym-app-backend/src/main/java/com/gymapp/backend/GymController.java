package com.gymapp.backend;

import com.gymapp.backend.Entity.Entry;
import com.gymapp.backend.Entity.Exercise;
import com.gymapp.backend.repository.EntryRepository;
import com.gymapp.backend.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GymController {

    @Autowired
    private EntryRepository entryRepository;

    @Autowired
    private ExerciseRepository exerciseRepository;

    @PostMapping(path = "/entries")
    public Entry saveEntry(@RequestBody Entry entry) {
        return entryRepository.save(entry);
    }

    @PostMapping(path = "/exercises")
    public Exercise saveExercise(@RequestBody Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @GetMapping(path = "/exercises")
    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    @GetMapping(path = "/exercises/{id}/entries")
    public List<Entry> getEntriesofExercise(@PathVariable String id) {
        Exercise exercise = exerciseRepository.findById(Long.valueOf(id)).get();
        return entryRepository.findByExercise(exercise.getExerciseName());
    }

    @GetMapping(path = "/exercises/{id}")
    public Exercise getExerciseWithId(@PathVariable String id) {
        return exerciseRepository.findById(Long.valueOf(id)).get();
    }

    @GetMapping(path = "/entries/{id}/exercise")
    public Exercise getExerciseofEntry(@PathVariable String id) {
      return entryRepository.findExercise(id);
    }

    @GetMapping(path = "/entries/{id}")
    public Entry getEntryWithId(@PathVariable String id) {
        return entryRepository.findById(Long.valueOf(id)).get();
    }

    @DeleteMapping(path = "/entries/{id}")
    public void deleteEntryWithId(@PathVariable String id) {
        entryRepository.deleteById(Long.valueOf(id));
    }

    @DeleteMapping(path = "/exercises/{id}")
    public void deleteExerciseWithId(@PathVariable String id) {
        exerciseRepository.deleteById(Long.valueOf(id));
    }

    @PutMapping(path = "/exercises/{id}")
    public Exercise updateExercise(@RequestBody Exercise exercise) {

        Exercise updatedExercise = exerciseRepository.findById(exercise.getId()).get();
        updatedExercise.setExerciseName(updatedExercise.getExerciseName());
        updatedExercise.setCategory(updatedExercise.getCategory());

        // TODO: if exercisename changes, change the belonging entries


        return exerciseRepository.save(exercise);
    }

    @PutMapping(path = "/entries/{id}")
    public Entry updateEntry(@RequestBody Entry entry) {

        Entry updatedEntry = entryRepository.findById(entry.getId()).get();
        updatedEntry.setDate(entry.getDate());
        updatedEntry.setExercise(entry.getExercise());
        updatedEntry.setReps(entry.getReps());
        updatedEntry.setWeights(entry.getWeights());

        return entryRepository.save(updatedEntry);
    }

    @GetMapping(path = "/entries")
    public List<Entry> getAllEntries() {
        return entryRepository.findAll();
    }

}
