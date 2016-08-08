'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before(){
    await this.getConfig();
  }
  async getConfig(){
     let sysinfo = await this.model("system").limit(1).find();
     this.assign("_STATIC",sysinfo.url+"static/");
     this.assign("_sys",sysinfo);
  }
}