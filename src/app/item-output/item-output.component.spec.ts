<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOutputComponent } from './item-output.component';

describe('ItemOutputComponent', () => {
  let component: ItemOutputComponent;
  let fixture: ComponentFixture<ItemOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOutputComponent } from './item-output.component';

describe('ItemOutputComponent', () => {
  let component: ItemOutputComponent;
  let fixture: ComponentFixture<ItemOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 854de8d61ddb495d6d88b522355779a1cf50aa89
