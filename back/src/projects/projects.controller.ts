import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}


  
  @Post()
  @ApiOperation({
    summary: 'создание нового проекта',
  })
  @ApiResponse({
    status: 201,
    description: 'проект успешно создан',
  
  })
  create(@Body() body: CreateProjectDto) {
    return this.projectsService.create(body);
  }

  @Get()
  @ApiOperation({
    summary: 'получить все проекты',
  })
  @ApiResponse({
    status: 200,
    description: 'проекты успешно получены',
  
  })
  findAll() {
    return this.projectsService.findAll();
  }


}
