import { AfterContentInit, Component, ContentChildren, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Userservice } from '../userservice';
import { Createcomponent } from '../createcomponent/createcomponent';
import { CommonModule } from '@angular/common';
import { Showcomments } from '../showcomments/showcomments';

@Component({
  selector: 'app-text',
  imports: [RouterModule,FormsModule,Createcomponent,CommonModule,Showcomments,Createcomponent],
  templateUrl: './text.html',
  styleUrl: './text.css',
})
export class Text {
  comments:any[]=[{"text":"sample","user":"dun"},{"text":"sample 2","user":"jake"}]
  showcomments:boolean=true;

  showcreatecomments:boolean=false;
  opencomment()
  {
    this.showcreatecomments=true;
  }
  closecomment()
  {
    this.showcreatecomments=false;
  }
}
