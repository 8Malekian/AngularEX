import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControleurComponent } from './controleur.component';



describe('ControleurComponent', () => {
  let component: ControleurComponent;
  let fixture: ComponentFixture<ControleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
