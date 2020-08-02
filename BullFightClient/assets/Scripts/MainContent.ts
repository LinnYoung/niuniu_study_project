const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Prefab)
  playerNodePre: cc.Prefab = null


  onLoad(){
    this.initNode()
  }

  private initNode(){
    const node =  cc.instantiate(this.playerNodePre)
    node.parent = this.node
  }

  onButtonClick(event, customData) {
    cc.log("customData: ", customData);
  }
}
