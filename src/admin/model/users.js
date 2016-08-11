'use strict';
/**
 * model
 */
export default class extends think.model.base {
    getAllUsers(){
         return this.select();
    }
    addUniqueUser(addData,checkDate){
        return this.thenAdd(addData,checkDate);
    }
}