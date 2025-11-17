import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

console.log({pos: process.env.POSTGRES_URL})
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_URI || "mongodb://localhost:27017/blog"
    ),
TypeOrmModule.forRoot({
  type: "postgres",
  url: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: true,
  autoLoadEntities: true,
}),
    PostsModule,
    UsersModule,
  ],
})
export class AppModule {}
