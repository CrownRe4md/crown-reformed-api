import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import PostService from '#services/post_service'

@inject()
export default class PostsController {
  constructor(private service: PostService) {}

  async index({ request }: HttpContext) {
    return await this.service.index(request.qs())
  }

  async show({ request }: HttpContext) {
    // return request.qs()
  }

  async store({ request }: HttpContext) {
    // return request.qs()
  }

  async update({ request }: HttpContext) {
    // return request.qs()
  }

  async delete({ request }: HttpContext) {
    // return request.qs()
  }
}
