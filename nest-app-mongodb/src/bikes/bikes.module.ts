import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bike, BikeSchema } from './schema/bike.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bike.name, schema: BikeSchema }]),
  ],
  controllers: [BikesController],
  providers: [BikesService],
})
export class BikesModule {}
