import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDelictivoComponent } from './registro-delictivo.component';

describe('RegistroDelictivoComponent', () => {
  let component: RegistroDelictivoComponent;
  let fixture: ComponentFixture<RegistroDelictivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDelictivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDelictivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
