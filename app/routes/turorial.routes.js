module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const employee = require("../controllers/employee.controller.js")

  var router = require("express").Router();

  //router.post("/saveFile",employee.uploadFiles);

  router.post("/uploadFiles",employee.uploadFiles);

  // Create a new Tutorial
  router.post("/", tutorials.create);

  router.post("/employee",employee.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  router.get("/titleData/:title", tutorials.findByTitle);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  //router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
 // router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
  
};
