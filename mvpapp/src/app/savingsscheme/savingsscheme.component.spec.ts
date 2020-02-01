import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsschemeComponent } from './savingsscheme.component';
import {ParentComponent} from "./parent/parent.component";
import { TitleComponent } from './title/title.component';
import {FormsModule } from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ChildComponent} from "./child/child.component";
import {MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SavingsschemeComponent', () => {
  let component: SavingsschemeComponent;
  let fixture: ComponentFixture<SavingsschemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [ SavingsschemeComponent, ParentComponent, TitleComponent, ChildComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
