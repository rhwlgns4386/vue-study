import { createRouter,createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'

const routes=[
    {path:'/',component:Home, title:'홈',icon:'fas fa-home fa-fw text-2xl"'},
    {path:'/',component:Home, title:'탐색하기',icon:'fas fa-hashtag fa-fw text-2xl'},
    {path:'/notifications',component:Notifications, title:'알림',icon:'far fa-bell fa-fw text-2xl'},
    {path:'/messages',component:Messages, title:'쪽지',icon:'far fa-envelope fa-fw text-2xl'},
    {path:'/',component:Home, title:'북마크',icon:'far fa-bookmark fa-fw text-2xl'},
    {path:'/',component:Home, title:'리스트',icon:'far fa-list-alt fa-fw text-2xl'},
    {path:'/profile',component:Profile, title:'프로필',icon:'far fa-user fa-fw text-2xl'},
    {path:'/',component:Home, title:'더보기',icon:'fas fa-ellipsis-h fa-fw text-2xl'},
]

const router=createRouter({
    history: createWebHistory(),
    routes,
})

export default router

{/* <router-link
            to="/"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="fas fa-home fa-fw" id="home"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">홈</span>
          </router-link>
          <router-link
            to="/"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">탐색하기</span>
          </router-link>
          <router-link
            to="notifications"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="far fa-bell fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">알림</span>
          </router-link>
          <router-link
            to="/messages"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="far fa-envelope fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">쪽지</span>
          </router-link>
          <router-link
            to="/"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="far fa-bookmark fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">북마크</span>
          </router-link>
          <router-link
            to="/"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="far fa-list-alt fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">리스트</span>
          </router-link>
          <router-link
            to="/profile"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="far fa-user fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">프로필</span>
          </router-link>
          <router-link
            to="/"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          >
            <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">더보기</span>
          </router-link> */}