import Taro, { useDidShow } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { FC, useState } from "react";
import { Image } from "@antmjs/vantui";
import { getStorage, setActiveTabbar } from "@/utils/index";
import iconWechat from "@/assets/icons/icon_wechat.png";
import styles from "./index.module.less";

const Mine: FC = () => {
  const [user, setUser] = useState<Record<string, any>>();

  useDidShow(() => {
    setActiveTabbar(2);
    const data = getStorage("userInfo");
    setUser(data);
  });

  return (
    <View className={styles.container}>
      <View
        className={styles.titleBox}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/login/index" })
        }}
      >
        <Image
          round
          width={90}
          height={90}
          src={user?.userInfo?.avatarUrl || iconWechat}
          className={styles.userIcon}
        />
        <View className={styles.userInfo}>
          <View className={styles.name}>
            {user?.userInfo?.nickName || "微信用户"}
          </View>
          <View className={styles.phone}>{user?.visitor?.mobile}</View>
        </View>
      </View>
    </View>
  );
};

export default Mine;
