import { Module } from '@nestjs/common';
import { LearnerController } from './learner.controller';

@Module({
  controllers: [LearnerController]
})
export class LearnerModule {}
