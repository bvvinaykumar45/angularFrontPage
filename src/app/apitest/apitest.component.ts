import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css'],
})
export class ApitestComponent implements OnInit {
  constructor(private http: HttpClient) {}
  list: any[] = [];
  url = 'https://shashidhar0902.github.io/test.json';
  ngOnInit() {
    this.http.get(this.url).subscribe((Response: any[]) => {
      this.list = Response;
    });
  }
}
