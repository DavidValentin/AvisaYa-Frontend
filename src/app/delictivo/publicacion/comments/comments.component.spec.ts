import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelictivoModule } from '../../delictivo.module';
import { PublicacionComponent } from '../publicacion.component';

import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelictivoModule],
      declarations: [CommentsComponent, PublicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
