<template>
  <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
    <img
      src="http://picsum.photos/200"
      class="ml-3 w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
    />
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">조국</span>
        <span class="text-gray-500 text-xs">@cyphers</span>
        <span>. </span>
        <span class="text-gray-500 text-xs">8분</span>
      </div>
      <!--tweet body-->
      <div>본문</div>
      <!-- tweet actions-->
      <div class="flex justify-between">
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">11</span>
        </div>
        <div class="text-gray-500 hover:text-green-500">
          <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">11</span>
        </div>
        <div class="text-gray-500 hover:text-red-500">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">11</span>
        </div>
        <i
          class="far fa-share-square text-gray-500 hover:text-primary hover:bg-blue-50 rounded-full p-2"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
