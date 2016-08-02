'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    this.assgin("title","这里是首页~");
    return self.display();
  },
  testAction:function(self){
      return self.display();
  }
});