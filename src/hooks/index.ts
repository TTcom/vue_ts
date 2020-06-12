import { useMusicListProvide, useMusicListInject } from "./musics";

export { useMusicListInject };
export const useProvider = () => {
  useMusicListProvide();
};
