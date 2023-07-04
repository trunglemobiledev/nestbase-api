import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { GetUser } from 'src/user/get-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('blogs')
@UseGuards(AuthGuard())
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) { }

  @Post()
  create(
    @Body() createBlogDto: CreateBlogDto,
    @GetUser() user: User
  ) {
    return this.blogsService.create(createBlogDto, user);
  }

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    const blog = await this.blogsService.findOne(id);
    if (!blog) {
      throw new NotFoundException(`Không tìm thấy bài viết id: "${id}"`);
    }
    return this.blogsService.remove(id);
  }
}
