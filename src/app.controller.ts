import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    return this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'You have a new friend request!',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
