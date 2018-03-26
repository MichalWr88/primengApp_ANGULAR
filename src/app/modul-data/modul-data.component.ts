import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModulDataService } from './modul-data.service';
@Component({
  selector: 'app-modul-data',
  templateUrl: './modul-data.component.html',
  styleUrls: ['./modul-data.component.css']
})
export class ModulDataComponent implements OnInit {
  posts: any ;
  postShow: any = {};
  display: Boolean = false;
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  showDialog(post) {
    this.postShow = post;
    this.display = true;
  }
  constructor(private mDS: ModulDataService) {}

  ngOnInit() {
    this.mDS.getPosts(this.postsUrl).subscribe(data => {
      this.posts = data;
      return data;
    });
  }
}
