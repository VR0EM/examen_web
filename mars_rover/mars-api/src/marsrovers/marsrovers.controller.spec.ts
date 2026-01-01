import { Test, TestingModule } from '@nestjs/testing';
import { MarsroversController } from './marsrovers.controller';

describe('MarsroversController', () => {
  let controller: MarsroversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarsroversController],
    }).compile();

    controller = module.get<MarsroversController>(MarsroversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
