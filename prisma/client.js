import { PrismaClient } from '@prisma/client';

if (global.prisma == null) {
  global.prisma = new PrismaClient();
}

export default global.prisma;
