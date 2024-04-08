import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './models/student.model';
// import { Faculty } from './models/faculty.model';
import { Course } from './models/course.model';
import { Address } from './models/address.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { StudentCourse } from './models/student-course.model';
import { Faculty } from './models/faculty.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: 'migration',
      username: 'postgres',
      password: 'Postgres123',
      host: 'localhost',
      name: 'migration',
      models: [Student,Address,Course,StudentCourse,Faculty],
      synchronize:true,
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'SEQUELIZE',
      useValue: Sequelize,
    },
  ],
  exports: ['SEQUELIZE'],
})
export class AppModule {}
