import { inject } from '@adonisjs/core'
import Teaching from '#models/teaching'

@inject()
export default class TeachingService {
  constructor(private model: Teaching) {}

  async store($request) {
    // return this.model.create($request)
  }
}
