import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstructorModule } from './instructor/instructor.module';
import { LearnerModule } from './learner/learner.module';

@Module({
  imports: [InstructorModule, LearnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
