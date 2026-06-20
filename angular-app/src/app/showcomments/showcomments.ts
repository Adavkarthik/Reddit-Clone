import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-showcomments',
  imports: [RouterModule,FormsModule],
  templateUrl: './showcomments.html',
  styleUrl: './showcomments.css',
})
export class Showcomments {}
