import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDataDetailsComponent } from './post-data-details.component';

describe('PostDataDetailsComponent', () => {
  let component: PostDataDetailsComponent;
  let fixture: ComponentFixture<PostDataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
