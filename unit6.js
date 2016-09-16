function unit6() {
var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "111111",
        address: ['One Microsoft Way', 'Redmond', 'WA', '00000']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "222222",
        address: ['2 Apple Lane', 'Cupertino', 'CA', '55555']
    }
};    

var list = function(friends) {
    for(var key in friends) {
        console.log(key);
    }
};

var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
                return friends[key];
        }
    }
};

