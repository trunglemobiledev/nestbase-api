import { IsNotEmpty } from "class-validator";

export class CreateBlogDto {
    @IsNotEmpty({message:'Không bỏ trống tiêu đề'})
    title: string;

    @IsNotEmpty({message: 'Không bỏ trống nội dung'})
    content: string;
}
