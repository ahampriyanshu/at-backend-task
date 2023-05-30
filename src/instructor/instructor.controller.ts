import { Controller, Post, Body, Param, Put, Delete } from '@nestjs/common';

@Controller('instructor')
export class InstructorController {
  @Post()
  createForm(@Body() formDetails: any) {
    // Implementation to create a new form for a given course
  }

  @Post(':formId/questions')
  addQuestion(@Param('formId') formId: string) {
    // Implementation to add a new question to the specified form
  }

  @Put('questions/:questionId')
  editQuestion(@Param('questionId') questionId: string) {
    // Implementation to edit the specified question
  }

  @Delete('questions/:questionId')
  removeQuestion(@Param('questionId') questionId: string) {
    // Implementation to remove the specified question
  }
}