import { type NewTaskData} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
 export  class TasksService{
 private  tasks = [
    {
      id:'t1',
      userId: 'u1',
      title:'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular ',
      dueDate: '2025-12-31'
    },
    {
      id:'t2',
      userId: 'u2',
      title:'Master React',
      summary: 'Learn all the basic and advanced features of React ',
      dueDate: '2025-12-31'
    },
    {
      id:'t3',
      userId: 'u3',
      title:'Master Vue',
      summary: 'Learn all the basic and advanced features of Vue ',
      dueDate: '2025-12-31'
    },
  ];

 constructor() {
   const tasks = localStorage.getItem("tasks");

   if(tasks){
     this.tasks = JSON.parse(tasks);
   }
 }

 getUserTasks(userId: string){
   return this.tasks.filter((task) => task.userId === userId )
 }

  addTask(taskData: NewTaskData , userId:string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
    this.saveTasks();
  }

  private saveTasks(){
   localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
