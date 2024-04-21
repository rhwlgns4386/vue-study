<template>
  <div class="flex h-screen container mx-auto">
    <!--사이드 메뉴 섹션-->
    <div class="w-1/4 pt-5 ml-10 flex flex-col justify-between border-r border-gray-100">
      <div class="flex flex-col items-center xl:items-start">
        <!--트위터 로고-->
        <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
        <!--메뉴 리스트-->
        <div class="flex flex-col items-start">
          <router-link
            :to="menu.path"
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
            v-for="menu in routes"
            :key="menu"
          >
            <i :class="menu.icon"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">{{ menu.title }}</span>
          </router-link>
        </div>
        <!--트윗 버튼-->
        <div class="w-full xl:pr-3 flex justify-center">
          <button
            class="mt-3 bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark"
          >
            <span class="hidden xl:block">트윗</span>
            <i class="fas fa-plus xl:hidden"></i>
          </button>
        </div>
      </div>
      <!--프로필 버튼-->
      <div class="lg:mr-3 mb-3">
        <button
          class="hidden xl:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center"
        >
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
          <div class="xl:ml-2 hidden xl:block">
            <div class="text-xl font-bold">꼬질 용용</div>
            <div class="text-xs text-gray-500 text-left">@dragon</div>
          </div>
          <i
            class="ml-auto fas fa-ellipsis-h fa-fw text-xs text-gray-500 hidden xl:block"
          ></i>
        </button>
        <div class="xl:hidden flex justify-center">
          <img
            src="http://picsum.photos/100"
            class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </div>
    <div class="flex-1 flex h-screen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import router from "./router";
export default {
  setup() {
    const routes = ref([]);
    onBeforeMount(() => {
      routes.value = router.options.routes;
    });
    return { routes };
  },
};
</script>

<style>
#home {
  font-size: 1.4rem /* 24px */;
  line-height: 2rem /* 32px */;
}
</style>
