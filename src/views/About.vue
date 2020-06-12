<template>
  <div class="musiclist">
    <h1>This is an Musiclist</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useMusicListInject } from "@/hooks";
export default defineComponent({
  name: "musiclist",
  setup() {
    const { musics: list } = useMusicListInject();
    return {
      list
    };
  }
});
</script>
