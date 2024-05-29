import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import UpdateProjectDto from 'src/dtos/update-project-dto';
import CreateProjectDto from 'src/dtos/create-project-dto';


@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}


  async findOne(id: number) {
    const record = await this.projectRepository.findOne({
      where: {id},
    });

    if (record === null) {
      throw new NotFoundException('User #${id} not found');
    }
    return record;
  }

  findAll(){
    return this.projectRepository.find();
  }

  create(new_project: CreateProjectDto){
    const project = this.projectRepository.create(new_project);
    return this.projectRepository.save(project);
  }

  async update(id: number, update_project: UpdateProjectDto){
    const project = await this.findOne(id);
    
    this.projectRepository.merge(project, update_project);

    return this.projectRepository.save(project);
  }

  async remove(id: number){
    const project = await this.findOne(id);

    return this.projectRepository.remove(project);
  }

}
