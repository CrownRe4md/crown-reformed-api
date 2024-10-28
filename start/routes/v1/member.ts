// import router from '@adonisjs/core/services/router'

// const AuthController = () => import('#controllers/admin/auth/auth_controller')

// router.post('/auth/sign-in', [AuthController, 'login'])

export default (router: any) => {
  router
    .group(() => {
      router.get('auth/login', async () => {})

      router.group(() => {
        router.get('login', async () => {})
      })
    })
    .prefix('v1/api')
}
