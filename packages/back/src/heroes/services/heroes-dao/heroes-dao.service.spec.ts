import { Test, TestingModule } from '@nestjs/testing';
import { HeroesDaoService } from './heroes-dao.service';

describe('HeroesDaoService', () => {
  let service: HeroesDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroesDaoService],
    }).compile();

    service = module.get<HeroesDaoService>(HeroesDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
