<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTesteComponent } from './item-teste.component';

describe('ItemTesteComponent', () => {
  let component: ItemTesteComponent;
  let fixture: ComponentFixture<ItemTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTesteComponent } from './item-teste.component';

describe('ItemTesteComponent', () => {
  let component: ItemTesteComponent;
  let fixture: ComponentFixture<ItemTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 854de8d61ddb495d6d88b522355779a1cf50aa89
