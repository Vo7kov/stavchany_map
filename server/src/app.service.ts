import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

// const data = [];

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getTest(): string {
    return 'OK';
  }

  // async create() {
  //   data.forEach(async (item) => {
  //     const createdVydlis = await this.prisma.vydlis.create({
  //       data: { ogc_fid: item.properties.ogc_fid },
  //     });

  //     for (const [latitude, longitude] of item.geometry.coordinates[0]) {
  //       await this.prisma.coordinates.create({
  //         data: {
  //           longitude,
  //           latitude,
  //           vydlisId: createdVydlis.id,
  //         },
  //       });
  //     }
  //   });

  //   return 1;
  // }

  // async delete() {
  //   const vydlises = await this.prisma.vydlis.findMany();
  //   const filteredCoordinates = (
  //     await this.prisma.coordinates.findMany()
  //   ).filter((coordinate) =>
  //     vydlises.some((vydlis) => vydlis.id === coordinate.vydlisId),
  //   );

  //   console.log(filteredCoordinates.length);

  //   return 1;
  // }
}
