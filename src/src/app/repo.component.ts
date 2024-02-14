import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repos = [];

  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.repoService.getRepos(1, 10).subscribe(repos => {
      this.repos = repos;
    });
  }
}
