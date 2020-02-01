import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ChildComponent } from "../child/child.component";
import { TitleComponent } from "../title/title.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from 'src/app/services/userservice';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  // const childComponent = spyOn('ChildComponent', ['deposit']);
  // const titleComponent = spyOn('TitleComponent', ['dummymtd']);
  const childComponent = jasmine.createSpyObj('ChildComponent', ['deposit']);
  const titleComponent = jasmine.createSpyObj('TitleComponent', ['dummymtd']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent, TitleComponent],
      imports: [MatFormFieldModule, FormsModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should return customer name', () => {

    //syy created
    expect(titleComponent).not.toBeNull();

    //parent component call title componet property
    expect(component.invokeTitleComponent()).toContain('GRD');
  });

  fit('should return Deposit status', () => {
    expect(childComponent).not.toBeNull();
    expect(component.invokeChildComponent()).toContain('Amount');
});

});
