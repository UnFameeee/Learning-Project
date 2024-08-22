import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  imports: [FormsModule],
})
export class NewTaskComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';


  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.cancel.emit();
  }
}
