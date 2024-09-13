import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProjetosComponent } from './item-projetos.component';

describe('ItemProjetosComponent', () => {
  let component: ItemProjetosComponent;
  let fixture: ComponentFixture<ItemProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
