import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BikesModule } from './bikes/bikes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@myfirstmongocluster.s0t1e.mongodb.net/bikes?retryWrites=true&w=majority&appName=MyFirstMongoCluster',
    ),
    BikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
