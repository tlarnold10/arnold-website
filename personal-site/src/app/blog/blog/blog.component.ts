import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: BlogModel[] = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get("blogs.json")
      .subscribe((config: any) => {
        for (var blog of config) {
          this.blogs.push(blog);
        }
      })
  }

}
