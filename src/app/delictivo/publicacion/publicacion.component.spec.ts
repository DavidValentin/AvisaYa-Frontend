import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelictivoModule } from '../delictivo.module';

import { PublicacionComponent } from './publicacion.component';

describe('PublicacionComponent', () => {
  let component: PublicacionComponent;
  let fixture: ComponentFixture<PublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelictivoModule],
      declarations: [PublicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
