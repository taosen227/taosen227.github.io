import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IreturnComponent } from './ireturn.component';

describe('IreturnComponent', () => {
  let component: IreturnComponent;
  let fixture: ComponentFixture<IreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
