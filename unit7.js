function unit7() {
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for(var j = 0; j < contactsLength; j++) {
        if(contacts[j].lastName === lastName) {
        printPerson(contacts[j]);
      };
};
}


function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length]= {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
    
};
}

var jess= new add("Jess", "Xu", "jess@nz", "535");
list();

search("Xu");
    

    
    
