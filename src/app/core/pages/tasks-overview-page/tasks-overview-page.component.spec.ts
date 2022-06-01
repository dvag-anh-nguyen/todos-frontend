import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOverviewPageComponent } from './tasks-overview-page.component';

describe('TasksOverviewPageComponent', () => {
  let component: TasksOverviewPageComponent;
  let fixture: ComponentFixture<TasksOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
