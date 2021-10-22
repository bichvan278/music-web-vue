import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
import SingleDetail from '@/components/singles/SingleDetail'
import UserProfile from '@/components/user/UserProfile'
import EditProfile from '@/components/user/EditProfile'
import Artist from '@/components/singles/Artist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/singles/:id',
      name: 'singledetail',
      component: SingleDetail
    },
    {
      path: '/profile',
      name: 'userprofile',
      component: UserProfile
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: EditProfile
    },
    {
      path: '/artist',
      name: 'artist',
      component: Artist
    },
    {
			path: '*',
			redirect: '/',
			component: HomePage
		}  
  ]
})
