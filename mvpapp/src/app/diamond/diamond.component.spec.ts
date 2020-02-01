import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondComponent } from './diamond.component';
import {MatCardModule} from '@angular/material/card';
import { PhotoService } from "../services/photoservice";
import {HttpClientModule } from "@angular/common/http";

describe('DiamondComponent', () => {
  let component: DiamondComponent;
  let fixture: ComponentFixture<DiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondComponent ],
      imports: [MatCardModule, HttpClientModule],
      providers: [PhotoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
