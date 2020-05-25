import Vue from 'vue'
import VueRouter from 'vue-router'
const ArticlesList = () => import('../pages/articles/ArticlesList')
const ArticleDetail = () => import('../pages/articles/articleDetail/ArticleDetail')
const Personal = () => import('../pages/person/Personal')
const Home = () => import('../pages/Home')
const Editor = () => import('../pages/Editor')
const WorkInfo = () => import('../pages/person/personalDetail/WorkInfo')
const StudentInfo = () => import('../pages/person/personalDetail/StudentInfo')
Vue.use(VueRouter)


  const routes = [
    {
      path: '/',
      redirect: '/my-blog'
    },
    {
      path: '/my-blog',
      component: Home,
      children: [
        {
          path: '/',
          redirect: 'articles-list'
        },
        {
          path: 'articles-list',
          component: ArticlesList,
        },
        {
          path: 'article-detail',
          component: ArticleDetail,
        },
        {
          path: 'personal',
          component: Personal,
        },
        {
          path: 'editor',
          component: Editor
        },
        {
          path: 'work-info',
          component: WorkInfo
        },
        {
          path: 'student-info',
          component: StudentInfo
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router