import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RootObject, Data2, Child } from '../interfaces/results'


@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  rootObject:RootObject;


  constructor(private rService: RedditService) { }

  ngOnInit(): void {
    this.rService.getPosts().subscribe(
      (data: RootObject) => this.rootObject = { ...data }, 
      error => console.error(error)
    );
  }

}
