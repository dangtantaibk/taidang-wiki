import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

export let __db: PrismaClient

if (process.env.NODE_ENV === 'production') {
  __db = new PrismaClient({
    datasources: { db: { url: 'mysql://taidt:eHQ))h(%)aI(T9UagbP5u$pY@35.198.196.35:3306/blog' } },
  })
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  __db = global.prisma
}

export default __db
