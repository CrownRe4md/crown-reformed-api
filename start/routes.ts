import router from '@adonisjs/core/services/router'
import adminRoute from './routes/v1/admin.js'
import memberRoute from './routes/v1/member.js'

adminRoute(router)
memberRoute(router)
