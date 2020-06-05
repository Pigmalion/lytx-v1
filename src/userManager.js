const dataAccess = require('./dataAccess');

class UserManager {

    constructor() {
        dataAccess.init();
        this.dataAccess = dataAccess;
    }

    _validateUserObj(user) {
        if (!user.password || !user.name || !user.email)
            throw new Error('Missing parameters');

       return this._validatePasswordComplexity(user.password);
    }

    _validatePasswordComplexity(password) {
        let reg = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;

        if (!reg.test(password)) {
            throw new Error('Password in not compliant to standards')
        }
        return true
    }

    addUser = (user) => {
        this._validateUserObj(user);
        return this.dataAccess.addRecord(user)
    };

    removeUser = (userID) => {
        dataAccess.removeRecord(userID)
    };

    getAllUsers = () => {
        return dataAccess.getAllRecords()

    };



}

module.exports = new UserManager();