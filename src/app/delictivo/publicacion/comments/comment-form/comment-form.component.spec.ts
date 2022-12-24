import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelictivoModule } from 'src/app/delictivo/delictivo.module';

import { CommentFormComponent } from './comment-form.component';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelictivoModule],
      declarations: [CommentFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancelComment be called', () => {
    spy = spyOn(component, 'cancelComment').and.callThrough();
    component.cancelComment(true);
    expect(spy).toHaveBeenCalled();
  });
});
