import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsOverviewPageComponent } from './boards-overview-page.component';

describe('BoardsOverviewPageComponent', () => {
  let component: BoardsOverviewPageComponent;
  let fixture: ComponentFixture<BoardsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
