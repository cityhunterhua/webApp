'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  init:function(http){
     this.super("init", http);
     this.assign("desc","这里是正文内容~");
  },
    indexAction: function(self){
     this.assign("title","这里是首页~");
     return self.display();
  }
});