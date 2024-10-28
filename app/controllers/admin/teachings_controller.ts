import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import TeachingService from '#services/teaching_service'

@inject()
export default class TeachingsController {
  constructor(private service: TeachingService) {}

  async index({ request }: HttpContext) {
    return request.qs()
  }

  async show({ request }: HttpContext) {
    // return request.qs()
  }

  async store({ request }: HttpContext) {
    this.service.store(request)
  }

  async update({ request }: HttpContext) {
    // return request.qs()
  }

  async delete({ request }: HttpContext) {
    // return request.qs()
  }
}
