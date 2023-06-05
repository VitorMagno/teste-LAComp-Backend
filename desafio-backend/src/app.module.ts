import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from '../db/orm.config';
import { NewsModule } from './news/news.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
