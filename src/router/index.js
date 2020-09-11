import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '@/views/Notes'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Notes',
		component: Notes
	},
	{
		path: '/edit/:id',
		name: 'Edit',
		props: true,
		component: () => import('@/views/Edit')
	},
	{
		path: '*',
		name: 'Default',
		component: () => import('@/views/Default')
	}
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
