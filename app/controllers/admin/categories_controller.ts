import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class CategoriesController {
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
