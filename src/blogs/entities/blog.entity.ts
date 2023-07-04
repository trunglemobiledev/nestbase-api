import { Exclude } from 'class-transformer';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    content: string

    @ManyToOne((_type) => User, (user) => user.blogs, { eager: false })
    @Exclude({ toPlainOnly: true })
    user: User;
}
