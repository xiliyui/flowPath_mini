import { FC } from "react";
import Taro from "@tarojs/taro";
import { Button, Notify } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import { login } from "@/services/login";
import { updateStorage } from "@/utils/index";
import styles from "./index.module.less";

const Login: FC = () => {
  // 获取用户头像、昵称
  const getUserProfile = async () => {
    return await Taro.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        return res.userInfo;
      }
    });
  };

  // 获取loginCode
  const getLoginCode = async () => {
    return await Taro.login({
      success: res => {
        if (res.code) {
          return res.code;
        } else {
          Taro.showToast({
            icon: "none",
            title: `登录失败！${res.errMsg}`
          });
        }
      }
    });
  };

  // 登录
  const wechatLogin = async () => {
    const { userInfo } = await getUserProfile();
    const { code } = await getLoginCode();
    if (code) {
      const config = {
        jscode: code,
        ...userInfo,
      };
      await login(config).then(async (res: any) => {
        const {statusCode, data: loginData} = res
        if (statusCode === 200) {
          updateStorage("token", loginData?.tokenInfo?.token);
          updateStorage('userInfo', {...loginData, userInfo })
          await Taro.navigateBack()
        }
      });
    } else {
      Notify.show({
        message: "登录失败，请重试！",
        color: "#ad0000",
        background: "#ffe1e1",
        duration: 10000
      });
    }
  };

  return (
    <View className={styles.container}>
      <View className={styles.logoBox}>
      </View>
      <View className={styles.btnBox}>
        <Button
          block
          color='#4DD0B5'
          openType='getUserInfo'
          onClick={wechatLogin}
        >
          微信登录
        </Button>
      </View>
      {/* 消息通知 */}
      <Notify id='vanNotify' />
    </View>
  );
};

export default Login;
