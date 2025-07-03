import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class Tag {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => [Post])
  post: Post[];
}
