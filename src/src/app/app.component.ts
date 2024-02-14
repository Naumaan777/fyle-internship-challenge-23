import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  repos = [];
  currentPage = 1;
  pageSize = 10;
  maxPageSize = 100;
  

  constructor(private http: HttpClient) {
    this.getRepos();
  }

  isLoading = true;

  getRepos() {
    this.isLoading = true;
    this.http.get(`https://api.example.com/repos?page=${this.currentPage}&size=${this.pageSize}`).subscribe(data => {
      this.repos = data;
      this.isLoading = false;
    });
  }

  changePageSize(size: number) {
    this.pageSize = size;
    this.getRepos();
  }
}




  




