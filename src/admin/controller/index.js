'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index_index.html
   //import request from "request";
     /*let getApiData = () => {
      let fn = think.promisify(request.get);
     /!* return fn({
        url: "http://dev.ilifeceo.com/wp/index.php?s=/addon/Hotel/Web/selectCity",
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) Chrome/47.0.2526.111 Safari/537.36"
        }
      });
      console.log(fn);*!/
    }*/
    return self.display();
  }
});