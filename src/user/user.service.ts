import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserByEmail(email: string) {
    // call database
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }
}
