import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../interfaces/results';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() post:Child;

  constructor() { }

  ngOnInit(): void {
  }

}
