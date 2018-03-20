import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModulDataService } from './modul-data.service';
@Component({
  selector: 'app-modul-data',
  templateUrl: './modul-data.component.html',
  styleUrls: ['./modul-data.component.css']
})
export class ModulDataComponent implements OnInit {
  posts: Array<any> = [];
postShow: any = {};
  display: Boolean = false;

  showDialog(post) {
      this.postShow = post;
    this.display = true;
  }
  constructor(private mDS: ModulDataService) {}

  ngOnInit() {
    this.mDS.getPosts().then(posts => (this.posts = posts));
  }
}
