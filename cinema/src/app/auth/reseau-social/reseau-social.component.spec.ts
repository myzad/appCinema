import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauSocialComponent } from './reseau-social.component';

describe('ReseauSocialComponent', () => {
  let component: ReseauSocialComponent;
  let fixture: ComponentFixture<ReseauSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseauSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
