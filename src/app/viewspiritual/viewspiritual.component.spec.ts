import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspiritualComponent } from './viewspiritual.component';

describe('ViewspiritualComponent', () => {
  let component: ViewspiritualComponent;
  let fixture: ComponentFixture<ViewspiritualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspiritualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspiritualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
