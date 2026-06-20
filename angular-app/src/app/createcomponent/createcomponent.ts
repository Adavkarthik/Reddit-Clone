import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-createcomponent',
  imports: [RouterModule,FormsModule],
  templateUrl: './createcomponent.html',
  styleUrl: './createcomponent.css',
})
export class Createcomponent {

  newcomment:string="";
  @Output() close=new EventEmitter<void>;
  postcomment()
  {
    this.close.emit();

  }
  cancel()
  {
    this.close.emit();
  }
}
