'use strict';
/**
 * model
 */
export default class extends think.model.base {
    * getUserAction(){
        let model = this.model("member_center");
        let users =  model.select();
        return users;
    }
}