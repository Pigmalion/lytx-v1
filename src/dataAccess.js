const users = require('./../tests/mockData/mock-users')
class DataAccess {

    init() {
        this._connectToDB();
    }

    _connectToDB() {
        console.log(" DB CONNECTED ")
    };

    addRecord(record){
        return 1
    }
    removeRecord(recordID){
        if(!recordID)
            return 0;
        return 1
    }
    getAllRecords(){
        return users;
    }
}

module.exports = new DataAccess();