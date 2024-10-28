import Admin from '#models/admin'
import { inject } from '@adonisjs/core'
import { ICreateAdmin } from '../@types/admin.js'

@inject()
export default class AdminService {
  constructor(private model: Admin) {}

  async store($request: ICreateAdmin) {
    return Admin.create($request)
  }
}
