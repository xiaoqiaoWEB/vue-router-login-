import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import login from '@/components/login'
import layout from '@/views/layout'

import project from '@/views/backend/project'
import workbench from '@/views/backend/workbench'
import doc from '@/views/backend/doc'

Vue.use(Router)

let router = new Router({
	mode:'history',
	linkActiveClass:'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
		{
			path:'/management',
			name:'Management',
			component:layout,
			children:[
				{
					path:'/project',
					name:'Project',
					component:project,
					meta:{
						login:true
					}
				},
				{
					path:'/workbench',
					name:'Workbench',
					component:workbench,
					meta:{
						login:true
					}
				},
				{
					path:'/doc',
					name:'Doc',
					component:doc
				}
			]
		},
		{
			path:'/login',
			name:'Login',
			component:login
		},
		{
			
			path:'*',
			redirect:'/'
			
		}
  ]
})
export default router

router.beforeEach((to,from,next)=>{
	if(to.matched.some(item=>item.meta.login)){ //判断是否需要登录
		//判断是否已经登录
		let info = router.app.$local.fetch('xiaoqiao');
		if(info.login){
			next()
		}else{
			router.push({
				path:'/login',
				query:{
					dirrect:to.path.slice(1)
				}
			})
		}
	}else{
		next()
	}
	
})