package com.SmartTaskManager.SmartTaskManager;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // Add custom queries if needed
}

