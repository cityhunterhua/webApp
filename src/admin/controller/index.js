'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
     //auto render template file index_index.html
     var userinfo = await this.session("userInfo");
     console.log(userinfo.username);
     this.assign("userinfo",userinfo);
     return this.display();
  }
  async loginoutAction(){
        await this.session();
        return this.redirect("/admin/login");
  }
}