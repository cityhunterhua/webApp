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
    getUser(data){
        return this.where(data).find();
    }
    updateUserLogin(id){
        let now =  think.datetime(new Date, "YYYY-MM-DD HH:mm:ss");
        return this.where({id:id}).update({lasttime:now});
    }
}