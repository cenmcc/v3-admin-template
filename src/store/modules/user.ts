import store from '@/store'
interface UserInfo {
  name?: string;
  age?: string;
}
export const useUserStore = defineStore("User", () => {
  const userInfo = ref<UserInfo>({});

  const setUserInfo = (info: UserInfo) => {
    userInfo.value = info;
  };

  return {
    userInfo,
    setUserInfo,
  };
});

export const useUserStoreHook = () => {
  return useUserStore(store);
}