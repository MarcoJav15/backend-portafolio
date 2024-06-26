import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './project/project.controller';
import { ProjectModule } from './project/project.module';
import * as Joi from '@hapi/joi'
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env.local',
    validationSchema: Joi.object({
      DB_HOST: Joi.string().required(),
      DB_PORT: Joi.number().default(5432),
      DB_NAME: Joi.string().required(),
      DB_USER: Joi.string().required(),
      DB_PASS: Joi.string().required(),
      }),
    }),  
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
      
    }),
    ProjectModule,
 
    ],
  controllers: [AppController, ProjectController],
  providers: [AppService],
})
export class AppModule {}
