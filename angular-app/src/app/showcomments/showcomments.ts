import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-showcomments',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './showcomments.html',
  styleUrl: './showcomments.css',
})
export class Showcomments {

  comments:any[]=[
    {"user":"kate","comment":"This is the comment by me"},
    {"user":"john","comment":"My comment can be viewed by many persons and can be replied at any time."},
    {"user":"matte","comment":"checking functionallity of large cooments.Correct the record': Judge Cannon 'made a number of errors' and 'inappropriate' accusations while burying Jack Smith's report, appeals court told.I don't know how any reasonable person could read that indictment and not be disgusted. Judge Cannon is a fucking traitor to the Constitution and this country, just like the pedo she protected.During Biden's presidency when it was clear she was obstructing justice I said Biden should have her arrested if she is given one more chance to recuse herself and fails to do so. I got downvoted at the time. Now here we are years later with Trump as president rather than behind bars, a man who has Americans killed on the street in broad daylight and the murderers aren't even so much as charged with a crime. But oh no, MAGA would have thought Democrats are authoritarian for having an obviously criminal judge arrested."},
    {"user":"alex","comment":"My name is kate and this is my comment."},
    {"user":"cena","comment":"This is another comment for testing the scrolling functionality."},
  ]
}
