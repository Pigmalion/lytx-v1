function mockUsers() {
    return {
        goodUserObj: [
            {
                name: "nathan",
                email: "nn@nn.com",
                password: "!@#$%Asss"
            },
        ],

        badUserObj: [
            {
            name: "",
            email: "nn@nn.com",
            password: "!@#$%Asss"
        }, {
            name: "nathan",
            email: "",
            password: "!@#$%Asss"
        }, {
            name: "nathan",
            email: "nn@nn.com",
            password: ""
        },
        ]
    }};

    module.exports = mockUsers();