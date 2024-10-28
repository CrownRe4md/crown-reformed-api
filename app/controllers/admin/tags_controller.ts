import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'

@inject()
export default class TagsController {
  constructor() {}

  async index({ request }: HttpContext) {
    return request.qs()
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
