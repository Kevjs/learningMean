import { TestBed } from '@angular/core/testing';

import { PokepiService } from './pokepi.service';

describe('PokepiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokepiService = TestBed.get(PokepiService);
    expect(service).toBeTruthy();
  });
});
