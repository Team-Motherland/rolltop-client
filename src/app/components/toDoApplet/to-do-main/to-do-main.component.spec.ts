import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoMainComponent } from './to-do-main.component';

describe('ToDoMainComponent', () => {
  let component: ToDoMainComponent;
  let fixture: ComponentFixture<ToDoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
