'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async init(http){
    super.init(http)
    this.assign("desc","这里是正文内容~");
  }
  async indexAction(){
      let users = await this.model("users").getAllUsers();
      let params = this.get();
      this.assign("title","这里是首页~");
      this.assign("users",users);
      users.forEach(function(item,i){
        console.log(item['name']);
      })
      return this.display();
  }
  async adduserAction(){
     let getParams = this.get();
     if(getParams.name && getParams.passwd){
         let uid = await this.model("users").addUniqueUser({name:getParams.name,passwd:getParams.passwd},{name:getParams.name});
         return this.success();
     }else{
         return this.fail();
     }
  }
}
