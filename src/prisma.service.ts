import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaLibSql({
      url: `file:${process.env.DATABASE_URL ?? 'notes.db'}`,
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
