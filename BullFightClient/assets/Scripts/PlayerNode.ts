import { User, UserInfo } from "../Dal/User";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayNode extends cc.Component {
  @property(cc.Sprite)
  headIcon: cc.Sprite = null;
  @property(cc.Label)
  userID: cc.Label = null;
  @property(cc.Label)
  userName: cc.Label = null;

  // private userinfo: UserInfo = null;
  // onLoad() {
  // this.userinfo = User.userinfo;

  // if (!this.userinfo) {
  //   this.userinfo = User.userinfo;
  //   this.schedule(this.initView.bind(this), 1);
  // }
  // }

  initView() {
    const userinfo = User.userinfo;
    this.unschedule(this.initView);
    const url = "http://127.0.0.1:3000/images/" + userinfo.avatar;
    cc.loader.load(url, (err, result: cc.Texture2D) => {
      if (err) {
        cc.log("err: ", err);
        return;
      }
      this.headIcon.spriteFrame = new cc.SpriteFrame(result);
    });
    this.userID.string = userinfo.id + "";
    this.userName.string = userinfo.nickname;
  }
}
