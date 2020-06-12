<template>
  <div class="HelloWorld">
    <h1>HelloWorld</h1>
    <h3>{{ msg }}</h3>
    <button type="button" @click="handleClick">向父组件专递参数</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    console.log(props);
    const methods = {
      handleClick() {
        emit("fromHome", "tert");
      }
    };
    return {
      ...methods
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
