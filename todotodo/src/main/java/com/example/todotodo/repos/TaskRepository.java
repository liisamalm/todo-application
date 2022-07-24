package com.example.todotodo.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todotodo.model.Task;


public interface TaskRepository extends JpaRepository<Task, Long> {

    void deleteTaskById(Long id);
    
    Optional<Task> findTaskById(Long id);
}
