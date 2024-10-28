// import router from '@adonisjs/core/services/router'

// const AuthController = () => import('#controllers/admin/auth/auth_controller')

// router.post('/auth/sign-in', [AuthController, 'login'])

const TeachingController = () => import('#controllers/admin/teachings_controller')
const PostController = () => import('#controllers/admin/posts_controller')
const CategoryController = () => import('#controllers/admin/categories_controller')
const TagController = () => import('#controllers/admin/tags_controller')

export default (router: any) => {
  router
    .group(() => {
      router.get('auth/login', async () => {})

      router.group(() => {
        // teaching
        router.delete('/teaching/delete/:id', [TeachingController, 'delete'])
        router.post('/teaching/update/:id', [TeachingController, 'update'])
        router.post('/teaching/create', [TeachingController, 'store'])
        router.get('/teaching/get/:id', [TeachingController, 'show'])
        router.get('/teaching/get-all', [TeachingController, 'index'])

        // post
        router.delete('/post/delete/:id', [PostController, 'delete'])
        router.post('/post/update/:id', [PostController, 'update'])
        router.post('/post/create', [PostController, 'store'])
        router.get('/post/get/:id', [PostController, 'show'])
        router.get('/posts', [PostController, 'index'])

        // category
        router.delete('/category/delete/:id', [CategoryController, 'delete'])
        router.post('/category/update/:id', [[CategoryController, 'update']])
        router.post('/category/create', [CategoryController, 'store'])
        router.get('/category/get/:id', [CategoryController, 'show'])
        router.get('/category/get-all', [CategoryController, 'index'])

        // tags
        router.delete('/tags/delete/:id', [TagController, 'delete'])
        router.post('/tags/update/:id', [TagController, 'update'])
        router.post('/tags/create', [TagController, 'store'])
        router.get('/tags/get/:id', [TagController, 'show'])
        router.get('/tags/get-all', [TagController, 'index'])
      })
    })
    .prefix('v1/api/admin')
}
