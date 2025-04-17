import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config'
import { MovieModule } from './modules/movies/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true
    }),
    MovieModule
  ],
})
export class AppModule {}
