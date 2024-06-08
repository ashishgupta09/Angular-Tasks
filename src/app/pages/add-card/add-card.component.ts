import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  ngOnInit(): void {

  }

  firstTaskList = [
    { id: 1, title: 'Task 1', dueDate: '22 Nov 2023', createUser: { status: 'Pending' }, description: 'Task 1 description', counter: 0 },
    { id: 2, title: 'Task 2', dueDate: '22 Nov 2023', createUser: { status: 'Pending' }, description: 'Task 2 description', counter: 0 },
    // Add more tasks as needed
  ];

  secondTaskList = [
    // Initially empty or with some tasks
    { id: 1, title: 'Task 1', dueDate: '22 Nov 2023', createUser: { status: 'Pending' }, description: 'Task 1 description' ,counter: 0},
    { id: 2, title: 'Task 2', dueDate: '22 Nov 2023', createUser: { status: 'Pending' }, description: 'Task 2 description' ,counter: 0},
  ];

  // Method to handle the image upload and move task
  handleImageUpload(taskId: number) {
    const taskIndex = this.secondTaskList.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      const [task] = this.secondTaskList.splice(taskIndex, 1);
      this.firstTaskList.push(task);
      
      // Increment the counter in the firstTaskList
      const targetTask = this.firstTaskList.find(task => task.id === taskId);
      if (targetTask) {
        const lastDigit = taskId % 10;
        targetTask.counter += lastDigit;
      }
    }
  }

  incrementCounter(taskId: number) {
    let task = this.firstTaskList.find(task => task.id === taskId);
    if (task) {
      task.counter++;
    } else {
      task = this.secondTaskList.find(task => task.id === taskId);
      if (task) {
        task.counter++;
      }
    }
  }
}


