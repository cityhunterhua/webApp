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
      let result = await this.model("users").getUser({username:uname,passwd:md5Pas});
      if(result.id){
         await this.model("users").updateUserLogin(result.id);
         await this.session("userInfo", data);
         return this.json({status:1,msg:"登录成功~"});
      }else{
         return this.json({status:0,msg:"用户名或密码出错~"});
      }
  }
  async doregisterAction(){
      let data = this.post();
      let md5Pass = await think.md5(data.passwd);
      let result = await  this.model("users").addUniqueUser({"username":data.username,"passwd":md5Pass,"email":data.email},{"username":data.username});
      if(result.id>0 ){
          if(result.type =="add")     return this.json({status:1,msg:"注册成功~"});
          else if(result.type =="exist") return this.json({status:0,msg:"注册失败，用户名已存在~"});
      }else{
          return this.json({status:0,msg:"注册失败，请重试~"});
      }

  }
  async checkusernameAction(){
      let data = this.post();
      let result = await this.model("users").getUser({username:data.username});
      if(result.id)       return this.json({status:0,msg:"用户名已存在~"});
      else return this.json({status:1,msg:"用户可用~"});
  }
}