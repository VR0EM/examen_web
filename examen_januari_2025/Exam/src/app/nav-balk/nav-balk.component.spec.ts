import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBalkComponent } from './nav-balk.component';

describe('NavBalkComponent', () => {
  let component: NavBalkComponent;
  let fixture: ComponentFixture<NavBalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBalkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
