import { inject } from '@adonisjs/core'
import Post from '#models/post'

@inject()
export default class PostService {
  constructor(private model: typeof Post) {}

  async index($query) {
    return await this.model.query()
  }

  async store($request) {
    // return this.model.create($request)
  }
}
