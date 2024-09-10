import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormacaoComponent } from './item-formacao.component';

describe('ItemFormacaoComponent', () => {
  let component: ItemFormacaoComponent;
  let fixture: ComponentFixture<ItemFormacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemFormacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFormacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
