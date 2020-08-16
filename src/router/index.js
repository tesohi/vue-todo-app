import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Edit from '@/views/Edit'
import Default from '@/views/Default'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/edit/:id',
		name: 'Edit',
		props: true,
		component: Edit
	},
	{
		path: '*',
		name: 'Default',
		component: Default
	}
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
