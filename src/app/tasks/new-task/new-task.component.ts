import {Component, EventEmitter, Output, inject, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../task/task.model";
import {TasksService} from "../tasks.service";
@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService); //this is alternative for constructor function

 enteredTitle = '';
 enteredSummary = '';
 enteredDate = ''


  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask(
      {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date:this.enteredDate
     },
      this.userId
    );
    this.close.emit();
  }

}
