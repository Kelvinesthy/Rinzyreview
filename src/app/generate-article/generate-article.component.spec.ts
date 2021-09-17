import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateArticleComponent } from './generate-article.component';

describe('GenerateArticleComponent', () => {
  let component: GenerateArticleComponent;
  let fixture: ComponentFixture<GenerateArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
