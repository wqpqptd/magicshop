// const express = require("express");
// const contacts = require("../controllers/contact.controller");

const express = require("express")

// module.exports = (app) => {
//     const router = express.Router();

//     //Retrieve all contacts
//     router.get("/", contacts.findAll);

//     //Create a new contact
//     router.post("/", contacts.create); 

//     // Delete all contacts
//     router.delete("/", contacts.deleteAll);

//     // Retrieve all favorite contacts
//     router.get("/favorite", contacts.FindAllFavorite);

//     // Retrieve a single contact with id
//     router.get("/:id", contacts.findOne);

//     //Update a contact with id
//     router.put("/:id", contacts.update);

//     //Delete a contact with id
//     router.delete("/:id", contacts.delete);

//     app.use("/api/contacts", router);
// };

module.exports = (app) => {
    const router = express.Router();

    router.route("/")
        .get(contacts.findAll)
        .post(contacts.create)
        .delete(contacts.deleteAll);
    
        router.route("/favorite")
            .get(contacts.findAllFavorite);

        router.route("/:id")
            .get(contacts.findOne)
            .put(contacts.update)
            .delete(contacts.delete);
        
        app.use("/api/contacts", router);
};