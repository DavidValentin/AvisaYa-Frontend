import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelictivoModule } from 'src/app/delictivo/delictivo.module';
import { PublicacionComponent } from '../../publicacion.component';
import { Comment } from '../../models/comment';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  let spy: any;

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

  it('should isCommentInEditMode be called', () => {
    spy = spyOn(component, 'editComment').and.callThrough();
    component.editComment();
    expect(spy).toHaveBeenCalled();
  });

  it('should deleteComment be called', () => {
    const mockdata = [
      { id: 1, text: 'T1' },
      { id: 2, text: 'T2' },
    ];
    component.comments = mockdata;
    spy = spyOn(component, 'deleteComment').and.callThrough();
    component.deleteComment();
    expect(spy).toHaveBeenCalled();
  });

  it('should disableCommentEditMode be called', () => {
    spy = spyOn(component, 'disableCommentEditMode').and.callThrough();
    component.disableCommentEditMode(true);
    expect(spy).toHaveBeenCalled();
  });
});
