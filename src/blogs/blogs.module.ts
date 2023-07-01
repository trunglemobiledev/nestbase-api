import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { Blog } from './entities/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
