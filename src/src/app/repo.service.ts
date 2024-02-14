import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RepoService } from './repo.service';

describe('RepoService', () => {
  let service: RepoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepoService]
    });

    service = TestBed.inject(RepoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch repos', () => {
    service.getRepos(1, 10).subscribe(repos => {
      expect(repos.length).toBe(10);
    });

    const req = httpMock.expectOne('https://api.example.com/repos?page=1&size=10');
    expect(req.request.method).toBe('GET');

    req.flush(Array(10).fill({}));
  });
});
