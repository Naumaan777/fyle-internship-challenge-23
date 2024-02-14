import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RepoComponent } from './repo.component';
import { RepoService } from './repo.service';

describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;
  let repoService: RepoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoComponent ],
      providers: [ { provide: RepoService, useValue: { getRepos: () => of(Array(10).fill({})) } } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    repoService = TestBed.inject(RepoService);
  });

  it('should fetch repos on init', () => {
    spyOn(repoService, 'getRepos').and.callThrough();
    fixture.detectChanges();
    expect(repoService.getRepos).toHaveBeenCalledWith(1, 10);
    expect(component.repos.length).toBe(10);
  });
});

