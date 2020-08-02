export interface UserInfo {
  id: number;
  nickname: string;
  avatar: string;
}
class User {
  private _userinfo: UserInfo = null;

  set userinfo(info: UserInfo) {
    this._userinfo = info;
  }

  get userinfo(): UserInfo {
    return this._userinfo;
  }
}
const user = new User();
export { user as User };
