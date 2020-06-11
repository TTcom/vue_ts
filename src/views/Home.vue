<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>txt:{{ txt }}</p>
    <p>length:{{ length }}</p>
    <p>arr:{{ arr }}</p>
    <p>name:{{ name }}</p>
    <p>def:{{ def }}</p>
    <ul>
      <li v-for="(item, index) in data" :key="index">{{ item }}</li>
    </ul>
    <HelloWorld :msg="txt" @fromHome="fromHome" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "@vue/composition-api";
import HelloWorld from "../components/HelloWorld.vue";
export default defineComponent({
  name: "Home",
  setup() {
    const txt = ref<string>("asdas"); //声明一个string类型
    const length = ref<number>(4124);
    const data = ref<number[]>([1, 2, 3, 4]);

    interface MyObject {
      //创建一个接口
      arr: any[];
      name: string;
      def: number;
    }
    const state = reactive<MyObject>({
      arr: [1, 2, 3, 125],
      name: "",
      def: 121
    });
    const methods = {
      fromHome(val: string) {
        console.log(val);
      }
    };
    return {
      txt,
      length,
      data,
      ...toRefs(state),
      ...methods
    };
  },
  components: {
    HelloWorld
  }
});
</script>
