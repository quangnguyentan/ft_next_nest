import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tag } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  slug: string;

  @Field(() => String)
  content: string;

  @Field(() => String, { nullable: true })
  thumbnail?: string;

  @Field(() => Int)
  published: boolean;

  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;

  @Field(() => User)
  author: User;

  @Field(() => [Tag])
  tag: Tag[];
}
