package com.example.todotodo.service;

import java.util.List;
import com.example.todotodo.exeption.TaskNotFoundException;
import com.example.todotodo.model.Task;
import com.example.todotodo.repos.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

        private final TaskRepository taskRepository;
    
        @Autowired
        public TaskService(TaskRepository taskRepository) {
            this.taskRepository = taskRepository;
        }

    /* Lisää task */
            public Task addTask(Task task) {
            return taskRepository.save(task);
        } 
    
    /* Listaa kaikki taskit */  
        public List<Task> findAllTasks() {
            return taskRepository.findAll();
        }
        
    /* muokkaa taskin tietoja, tallenna */
        public Task updateTask(Task task) {
            return taskRepository.save(task);
        }
    
    /* etsi task id:n perusteella */
        public Task findTaskById(Long id) {
            return taskRepository.findTaskById(id)
                .orElseThrow(() -> new TaskNotFoundException ("User by id " + id + " was not found"));
        }
    
    /* poista työntekijä idn perusteella */
       
        public void deleteTask(Long id) {
            taskRepository.deleteTaskById(id);
        }
    
}
