import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {

  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>
  ) { }

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const blog = this.blogRepository.create(createBlogDto);
    return this.blogRepository.save(blog);
  }

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async findOne(id: number): Promise<Blog> {
    return this.blogRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    await this.blogRepository.update(id, updateBlogDto);
    return this.blogRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.blogRepository.delete(id);
  }
}
