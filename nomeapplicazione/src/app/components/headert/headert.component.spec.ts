import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertComponent } from './headert.component';

describe('HeadertComponent', () => {
  let component: HeadertComponent;
  let fixture: ComponentFixture<HeadertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
