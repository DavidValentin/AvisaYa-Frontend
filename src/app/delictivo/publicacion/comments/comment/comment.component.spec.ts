import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelictivoModule } from 'src/app/delictivo/delictivo.module';
import { PublicacionComponent } from '../../publicacion.component';
import { Comment } from '../../models/comment';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelictivoModule],
      declarations: [CommentComponent, PublicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
