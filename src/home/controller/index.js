'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  __before(){
      this.assign("before","前置操作~");
  },
   init:function(http){
      this.super("init", http);
      this.assign("desc","这里是正文内容~");
   },
    indexAction: function(self){
      let http = this.http;
      let arr = new Array(11,22,333);
      let params = this.get();
       console.log(params);console.log(arr);
      this.assign("params",arr);
      this.assign("title","这里是首页~");
      return self.display();
   },
   apiAction:function(){
       let data = {name: "thinkjs"};
       this.success(data);
   }
});