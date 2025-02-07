import { Injectable } from '@nestjs/common';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Bike } from './schema/bike.schema';
import { Model } from 'mongoose';

@Injectable()
export class BikesService {
  constructor(@InjectModel(Bike.name) private bikeModel: Model<Bike>) {}

  async create(createBikeDto: CreateBikeDto) {
    const createdBike = new this.bikeModel(createBikeDto);
    return createdBike.save();
  }

  async findAll() {
    return this.bikeModel.find().exec();
  }

  async findOne(id: string) {
    return `This action returns a #${id} bike`;
  }

  async update(id: string, updateBikeDto: UpdateBikeDto) {
    return `This action updates a #${id} bike`;
  }

  async remove(id: string) {
    return `This action removes a #${id} bike`;
  }
}
