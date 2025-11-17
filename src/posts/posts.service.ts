import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto) {
    const created = new this.postModel(createPostDto);
    return created.save();
  }

  async findAll() {
    return this.postModel.find().sort({ createdAt: -1 }).lean().exec();
  }

  async findOne(id: string) {
    const p = await this.postModel.findById(id).exec();
    if (!p) throw new NotFoundException('Post not found');
    return p;
  }

  async update(id: string, update: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate(id, update, { new: true }).exec();
  }

  async remove(id: string) {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
