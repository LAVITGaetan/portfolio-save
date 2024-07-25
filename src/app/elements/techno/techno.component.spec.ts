import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoComponent } from './techno.component';

describe('TechnoComponent', () => {
  let component: TechnoComponent;
  let fixture: ComponentFixture<TechnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnoComponent]
    });
    fixture = TestBed.createComponent(TechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
