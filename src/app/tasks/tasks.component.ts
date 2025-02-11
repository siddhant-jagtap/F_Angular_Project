import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";
@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required: true}) userId!:string;
  @Input({required: true}) name!:string;
  isAddingTask = false;
  // private taskService = new TasksService()
  // private  tasksService : TasksService;

  constructor(private  tasksService: TasksService) {} // this syntax shows that property tasksService has been created and assigned to the argument tasksService coming from TasksService


  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    this.tasksService.removeTask(this.userId);
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask = false;
  }



}
