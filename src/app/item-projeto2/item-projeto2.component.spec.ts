import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProjeto2Component } from './item-projeto2.component';

describe('ItemProjeto2Component', () => {
  let component: ItemProjeto2Component;
  let fixture: ComponentFixture<ItemProjeto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemProjeto2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemProjeto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
