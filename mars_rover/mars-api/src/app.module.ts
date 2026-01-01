import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarsroversController } from './marsrovers/marsrovers.controller';

@Module({
  imports: [],
  controllers: [AppController, MarsroversController],
  providers: [AppService],
})
export class AppModule {}
