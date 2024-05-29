import { Body, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ProjectsService {
  constructor (private readonly db: DbService){}
  async create(dto: CreateProjectDto) {
     const userId = dto.user
     delete dto.user
    return await this.db.project.create({
      data: {
        ...dto,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }

 async findAll() {
    return await this.db.project.findMany()
  }

  
}
