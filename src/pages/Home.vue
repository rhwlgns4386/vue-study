<template>
  <!--메인 섹션-->
  <div class="flex-1 border-r border-gray-100 overflow-y-auto">
    <div class="flex flex-col">
      <div class="border-b border-gray-100 px-4 py-2 font-bold text-lg">홈</div>
    </div>
    <!--트위틱 섹션-->
    <div class="flex px-3 py-3 border-b-8 border-gray-100">
      <img
        src="http://picsum.photos/200"
        class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
      />
      <div class="ml-2 flex-1 flex flex-col">
        <textarea
          placeholder="무슨 일이 일어나고 있나요?"
          class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
        ></textarea>
        <div class="text-right">
          <button
            class="bg-primary text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-dark"
          >
            트윗
          </button>
        </div>
      </div>
    </div>
    <!--트윗들-->
    <Tweet v-for="tweet in 10" :key="tweet" />
  </div>
  <Trends />
</template>

<script>
import Trends from "../components/Trends.vue";
import Tweet from "../components/Tweet.vue";
export default {
  components: { Trends, Tweet },
  setup() {},
};
</script>

<style></style>
