
import { Controller, Get, Post, Body, Param, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from 'src/entities/project.entity';
import { IsPublic } from 'src/common/is-public.decorator';
import CreateProjectDto from 'src/dtos/create-project-dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @IsPublic()
  findAll() {
    const records = this.projectService.findAll();
    return records;
  }

  @Get(':id')
  @IsPublic()
  findOne(@Param('id') id: number) {
    return this.projectService.findOne(id);
  }

  @Post()
  @IsPublic()
  create(@Body() body: CreateProjectDto){
    return this.projectService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id:number, @Body() body) {
    return this.projectService.update(id, body);
  }

  @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destoy(@Param('id') id: number) {
        return this.projectService.remove(id);
    }
}
