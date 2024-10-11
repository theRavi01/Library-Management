import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationsComponent } from './transations.component';

describe('TransationsComponent', () => {
  let component: TransationsComponent;
  let fixture: ComponentFixture<TransationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransationsComponent]
    });
    fixture = TestBed.createComponent(TransationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
