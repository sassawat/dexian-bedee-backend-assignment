import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Todo {
    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body() todo: Omit<Todo, 'id'>): Todo {
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() todo: Partial<Omit<Todo, 'id'>>,
  ): Todo {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.todoService.remove(id);
  }
}
