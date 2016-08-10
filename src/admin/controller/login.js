'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async dologinAction(){
      let data=this.post();
      let md5Pas = await think.md5(data.password);
      let uname = await data.username;
      return this.json(data);
      let result=await this.model("user").where({name:uname,role:{">":0} }).find();
      let info={
        name: uname,
        password: md5Pas
      }
      if(uname===result.name&&md5Pas===result.password){
        await this.session("userInfo", info);
        return this.json({status:1,msg:"登陆成功!"});
      }else{
        return this.json({status:0,msg:"用户名或密码错误!"});
      }
  }
}