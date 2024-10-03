package com.SmartTaskManager.SmartTaskManager;

import org.springframework.stereotype.Service;

@Service
public class TaskService {

    // Mock method for AI-based task suggestion
    public String suggestTask(String userInput) {
        // You can integrate an actual AI model here
        return "Suggested Task: " + userInput + " - Suggested Description";
    }

    // Mock method for predicting due date
    public String predictDueDate(Task task) {
        // Based on task history, you can predict due date here
        return "Predicted Due Date: " + task.getDueDate().plusDays(3).toString();
    }
}
