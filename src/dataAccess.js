class DataAccess {

    init() {
        this._connectToDB();
    }

    _connectToDB = () => {
        console.log(" DB CONNECTED ")
    };

    addRecord(record){
        return 1
    }
    removeRecord(recordID){

    }
    getAllRecords(){}
}

module.exports = new DataAccess();