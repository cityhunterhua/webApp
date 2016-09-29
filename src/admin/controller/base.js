'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before(){
    await this.getConfig();
    let csrf=await this.session("__CSRF__");
    this.assign("csrf",csrf);
    let userinfo=await this.session("userInfo");
    let username = "";
    if(userinfo) username= userinfo.username;
    this.assign('username',username);
    console.log(userinfo);
    if(think.isEmpty(userinfo)&&this.http.controller!="login"){
      return this.redirect("/admin/login");
    }else{
      this.assign('userinfo',userinfo);
    }
  }
  async getConfig(){
    let sysinfo = await this.model("system").limit(1).find();
    this.assign("_STATIC",sysinfo.url+"static/");
    this.assign("_sys",sysinfo);
  }
}