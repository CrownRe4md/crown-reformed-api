import factory from '@adonisjs/lucid/factories'
import Admin from '#models/admin'
import hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'

export const AdminFactory = factory
  .define(Admin, async ({ faker }) => {
    const password = async () => await hash.make('password')

    return {
      // id: 'dsnldjvskvjsvkds',
      first_name: faker.internet.displayName,
      last_name: faker.internet.displayName,
      email: faker.internet.email,
      password: await password?.toString(),
      createdAt: DateTime.local(),
      updatedAt: DateTime.local(),
    }
  })
  .build()
