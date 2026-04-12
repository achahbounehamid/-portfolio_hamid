import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeWindow } from './ide-window';

describe('IdeWindow', () => {
  let component: IdeWindow;
  let fixture: ComponentFixture<IdeWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeWindow],
    }).compileComponents();

    fixture = TestBed.createComponent(IdeWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
