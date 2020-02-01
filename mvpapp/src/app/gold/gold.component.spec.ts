import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableModule } from "@angular/material/table";
import { GoldComponent } from './gold.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { PhotoService } from "../services/photoservice";
import {HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GoldComponent', () => {
  let component: GoldComponent;
  let fixture: ComponentFixture<GoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [GoldComponent],
      providers: [PhotoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
