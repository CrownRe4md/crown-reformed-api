import type { HttpContext } from '@adonisjs/core/http'
import { AuthAdmin } from '#validators/admin_request'

import AdminService from '#services/admin_service'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthController {
  constructor(private service: AdminService) {}

  async login({ request }: HttpContext) {
    const payload = await request.validateUsing(AuthAdmin)

    if (!payload) return

    const response = await this.service.store({
      email: payload.email,
      password: payload.password,
    })
    return await response
  }
}
