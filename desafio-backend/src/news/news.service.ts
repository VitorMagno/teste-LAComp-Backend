import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private newsRepository: Repository<News>,
  ){}
  create(createNewsDto: CreateNewsDto) {
    const newNews = this.newsRepository.create(createNewsDto);
    return this.newsRepository.save(newNews);
  }

  findAll() {
    return this.newsRepository.find();
  }

  findOne(id: number) {
    return this.newsRepository.findBy({id});
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) {
    return this.newsRepository.update(id, updateNewsDto);
  }

  async remove(id: number) {
    const news = await this.findOne(id);
    return this.newsRepository.remove(news);
  }
}
