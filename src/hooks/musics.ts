import { provide, inject, ref } from "@vue/composition-api";

const MusicSymbol = Symbol();

export const useMusicListProvide = () => {
  // 全部音乐
  const musics = ref<any>([]);
  const setMusics = (value: any) => {
    musics.value.push(value);
  };

  provide(MusicSymbol, {
    //输出
    musics,
    setMusics
  });
};
export const useMusicListInject = () => {
  const musicsContext = inject<any>(MusicSymbol); //注入
  if (!musicsContext) {
    throw new Error(
      `[vue error]:useMusicListInject must be used after useBookListProvide`
    );
  }
  return musicsContext;
};
