const users = require('./mockData/mock-users');
const userController = require('./../src/userController');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const assert = require("assert");


describe("User management should be successful", function () {
    it('user should be added to db', function (done) {
        const _validateUserObjStab = sinon.stub(userController, "_validateUserObj").returns(true);
        const dataAccessStab = sinon.stub(userController.dataAccess, "addRecord").returns(1);
        users.goodUserObj.forEach(user => {

            let res = userController.addUser(user);
            expect(_validateUserObjStab.calledOnce).to.be.true;
            expect(dataAccessStab.calledOnce).to.be.true;
            assert.equal(res, 1, "Failed adding user to DB");
            _validateUserObjStab.reset();

        });
        sinon.restore();
        done();

    });

    it("password should be verified ", (done) => {
        let goodPasswords = [
                '@@V4-\3Z`zTzM{>k',
                '12qw!"QW12',
                '123qweASD!"#',
                '1qA!"#$%&',
                'Günther32',]


        goodPasswords.forEach(password =>
            expect(userController._validatePasswordComplexity(password)).to.be.true)
        done();

    });

    it("password should be  thrown", (done) => {
        let  badPasswords =
            [
                '123456789',
                'qweASD123',
                'qweqQWEQWEqw',
                '12qwAS!'
            ];
        badPasswords.forEach(password =>{
            expect(()=>{userController._validatePasswordComplexity(password)}).to.throw("Password in not compliant to standards")
        });
        done();

    });

    it("User Object should be validate properly",(done)=>{
        const _validatePasswordComplexityStub= sinon.stub(userController,"_validatePasswordComplexity").returns(true);
        users.goodUserObj.forEach(user =>{
                expect(userController._validateUserObj(user)).to.be.true;
                expect(_validatePasswordComplexityStub.calledOnce).to.be.true
            }

        );
        sinon.restore();
        done();

    });

    it("User Object validation should throw error",(done)=>{
        const _validatePasswordComplexityStub= sinon.stub(userController,"_validatePasswordComplexity").returns(true);
        users.badUserObj.forEach(user =>{
            expect(()=>{userController._validateUserObj(user)}).to.throw('Missing parameters');
            expect(_validatePasswordComplexityStub.notCalled).to.be.true;
        }

    );
        sinon.restore();
        done();

    });



});
