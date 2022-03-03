const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");
const handlePromise = require("../helpers/promise.helper");
const Contact = require("../models/contact.model");

exports.create = async (req, res, next) => {

    //Validate request
    if(!req.body.name) {
        return next (new BadRequestError(400, "Name can not be empty"));
    }
 
    // Create a contact
    const contact = new Contact({
        name: red.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        favorite:req.body.favorite === true,
    });
 
    //Save contact in the database
    const [error, document] = await handlePromise(contact.save());
 
    if (error){
        return next(new BadRequestError(500, "An error occurred while creating the contact"));
    }
 
    return res.send(document);

    //res.send({ message: "create handler"});
};

exports.findAll = async (red, res, next) => {
    const condition = {  };
    const { name } = req.query;
    if (name){
        condition.name = { $regex: new RegExp(name), $options: "i"};
    }
    const  [error, document] = await handlePromise(Contact.find(condition));
 
    if(error){
        return next(new BadRequestError(500, "An error occurred while retrieving contacts"));
    }
 
    return res.send(documents);
 
    //res.send({ message: "findAll handler"});
};


exports.findOne = async (red, res, next) => {
    const { id } = req.params;
    const condition = {
        _id: id && mongoose.isValidObjectId(id) ? id: null,
    };
 
    const [ error, document] = await handlePromise(Contact.findOne(condition));
 
    if(error) {
        return next(new BadRequestError(500, `Error retrieving contact with id=${req.params.id}`));
    }
    if(!document){
        return next(new BadRequestError(404, "Contact not found"));
    }
    return res.send(document);
 
    //res.send({ message: "findOne handler"});
};


exports.update = async (red, res, next) => {
 
    if (Object.keys(req.body).length === 0) {
        return next(new BadRequestError(400, "Data to update can not be empty"));
    }
    const{ id } = req.params;
    const condition = {
        _id: id && mongoose.isValidObjectId(id) ? id: null,
    };
 
    const [ error, document] = await handlePromise(Contact.findOneAndUpdate(condition, req.body, {
        new: true,
    })
    );
 
    if(error) {
        return next(new BadRequestError(500, `Error updating contact with id=${req.params.id}`));
    }
    if(!document){
        return next(new BadRequestError(404, "Contact not found"));
    }
    return res.send({message: "Contact was updated successfully",});
 
    //res.send({ message: "update handler"});
};


exports.delete = async (red, res, next) => {
    const{ id } = req.params;
    const condition = {
        _id: id && mongoose.isValidObjectId(id) ? id: null,
    };
 
    const [ error, document] = await handlePromise(Contact.findOneAndDelete(condition)
    );
 
    if(error) {
        return next(new BadRequestError(500, `Could not delete contact with id=${req.params.id}`));
    }

    if(!document){
        return next(new BadRequestError(404, "Contact not found"));
    }
    
    return res.send({message: "Contact was deleted successfully",});
 
    //res.send({ message: "update handler"});
};

exports.deleteAll = async (red, res, next) => {
    const [error, data] = await handlePromise(Contact.deleteMany({ })
    );

    if (error) {
        return next (new BadRequestError(500, "An error occurred while removing all contacts"));
    }

    return res.send( { message: `${data.deleteCount} contacts were deleted successfully`, });
    //res.send({ message: "findAllFavorite handler"});
};

exports.findAllFavorite = async (red, res, next) => {
    const [error, documents] = await handlePromise(Contact.find({ 
        favorite: true, })
    );

    if (error) {
        return next (new BadRequestError(500, "An error occurred while retrieving favorite contacts"));
    }

    return res.send(documents);
    //res.send({ message: "findAllFavorite handler"});
};