<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Musiclist</router-link>
      <div style="margin:15px 0;">
        <button type="button" @click="onbtn">Get_Hot_Music</button>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useMusicListInject } from "./hooks";
import axios from "axios";
import qs from "qs";

export default defineComponent({
  setup() {
    const { musics, setMusics } = useMusicListInject();
    const methods = {
      onbtn() {
        enum days { //枚举,使用枚举我们可以定义一些带名字的常量
          sun,
          mon,
          tue,
          wed,
          thu,
          fri,
          sat
        }
        const role = 1;
        if (days.mon === role) {
          console.log("dengyu role");
        }
        const url = "/weapi/v6/playlist/detail";
        const params = qs.stringify({
          params:
            "OUm1rszwG+REiKmu08O4G/43/BXk1n9Cxh2YehJhhI+YvVNjYU007qC9sm1plE43TUY7abv1UniBIpQudhp53QwLcJZPL9ylpnHHPZNn1Os=",
          encSecKey:
            "a86da4fe193dcb5556575213f528b3eb363b2ecb64557ae1103625ea944e65b2770982279715132feecf960aea9df73b008006eb5c52cadc64585e0a246221fee0068904148d806ba125b5c6f8df8e6f554d8a0c181d42fea9c371bf03441b222cf9240e013d2ab74665fdba278a0c76a7fafbf0c874fb2989346ec49146c5b0"
        });
        axios.post(url, params).then(res => {
          console.log(res);
          if (res.data && res.data.playlist) {
            musics.value = res.data.playlist.tracks;
          } else {
            setMusics({ name: "木得音乐" });
          }
        });
      }
    };
    return {
      musics,
      ...methods
    };
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
