//Driver Code

const User = require("./user");
const Contact = require("./contact");
const ContactInfo = require("./contactInfo");

try {
    const admin1 = User.newAdmin("yash", "yash1234");
    console.log("admin1>>>", admin1);
    const user1 = admin1.newUser("Ravi", "ravi1234");
    console.log("user1>>>", user1);
    const user2 = admin1.newUser("Abhay", "abhay1234");
    console.log("user2>>>", user2);
   

    user1.newContact("Ajay Kumar");
    user1.newContact("Rahul Sharma");
    user2.newContact("Prakash Pandey");
    user2.newContact("Shauraya Mishra");
    console.log("user1.contacts>>>", user1.contacts);
    console.log("user2.contacts>>>", user2.contacts);
    user1.updateContact("Rahul Sharma", "name", "John Smith");
    
} catch (error) {
    console.log(error.message)
}
