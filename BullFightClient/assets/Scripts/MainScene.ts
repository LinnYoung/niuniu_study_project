import { User, UserInfo } from "../Dal/User";
import PlayNode from "./PlayerNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {
  @property(cc.Prefab)
  mainContentPre: cc.Prefab = null;

  onLoad() {
    let ws = new WebSocket("ws://localhost:3001");
    ws.onopen = (result) => {
      let data = {
        type: "login",
        data: {
          id: 10000,
        },
      };
      ws.send(JSON.stringify(data));
    };
    // 连接成功的回调
    ws.onmessage = (result) => {
      // console.log("on message", result);
      const data = JSON.parse(result.data);
      if (data.type === "login_success") {
        const userData: UserInfo = data.data;
        User.userinfo = {
          id: userData.id,
          nickname: userData.nickname,
          avatar: "head1.jpg",
        };
        this.node.getComponentInChildren(PlayNode).initView();
      }
    };

    // 连接错误
    ws.onerror = (err) => {
      console.log("on err", err);
    };
  }

  start() {
    const node = cc.instantiate(this.mainContentPre);
    node.parent = this.node;
  }
}

// p13 第11节服务器返回房卡的个数且显示客服端 ---未学习
