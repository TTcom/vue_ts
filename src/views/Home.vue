<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>txt:{{ txt }}</p>
    <ul>
      <li v-for="(item, index) in data" :key="index">{{ item }}</li>
    </ul>
    <HelloWorld :msg="txt" @fromHome="fromHome" />
    <button type="button" @click="addcount">count++</button>
    <div>
      {{ plusOne }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  computed
} from "@vue/composition-api";
import HelloWorld from "../components/HelloWorld.vue";
export default defineComponent({
  name: "Home",
  setup() {
    const txt = ref<string>("一个txt"); //声明一个string类型
    const length = ref<number>(4124);
    const data = ref<number[]>([1, 2, 3, 4]);

    type MyObject = {
      //创建一个接口
      arr: any[];
      name: string;
      def?: number;
    };
    const state = reactive<MyObject>({
      arr: [1, 2, 3, 125],
      name: ""
    });
    const count = ref(1);
    const methods = {
      fromHome(val: string) {
        console.log(val);
        txt.value = val;
      },
      sumValue<T>(value: T): T {
        //传入什么类型就返回什么类型
        return value;
      },
      addcount() {
        count.value++;
        const kk = methods.sumValue<number>(count.value); //指定函数传入的参数类型
        const run = (val: number): void => {
          //void没有任何返回值
          if (val > 2) {
            console.log(11);
          }
        };
        run(56);
        console.log("kk", kk);
      }
    };

    const plusOne = computed(() => count.value + 1);
    return {
      txt,
      count,
      length,
      data,
      ...toRefs(state),
      ...methods,
      plusOne
    };
  },
  components: {
    HelloWorld
  }
});
</script>
