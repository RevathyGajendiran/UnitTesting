import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextComponent } from './context.component';
import {CountryService} from "../services/country.service";
import {ChartModule} from "primeng/chart";
import {HttpClientModule } from "@angular/common/http";

describe('ContextComponent', () => {
  let component: ContextComponent;
  let fixture: ComponentFixture<ContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextComponent ],
      imports: [ChartModule, HttpClientModule],
      providers: [CountryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
