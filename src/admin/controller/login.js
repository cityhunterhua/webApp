'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
      //auto render template file index_index.html
      let userinfo =  await this.session("userInfo");
      if(!await think.isEmpty(userinfo)) return this.redirect("/admin/index");
      return this.display();
  }
  async dologinAction(){
      let data   = this.post();
      let md5Pas = await think.md5(data.password);
      let uname  = await data.username;
      let result = await this.model("users").where({username:uname,passwd:md5Pas}).find();
      if(result.id){
         let now = await think.datetime(new Date, "YYYY-MM-DD HH:mm:ss");
         await this.model("users").where({id:result.id}).update({lasttime:now});
         await this.session("userInfo", data);
         return this.json({status:1,msg:"登录成功~"});
      }else{
         return this.json({status:0,msg:"用户名或密码出错~"});
      }
  }
  async doregisterAction(){
      let data = this.post();
  }
}