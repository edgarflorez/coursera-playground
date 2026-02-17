const express = require("express");

const router = express.Router();

let friends = {
  "johnsmith@gamil.com": {
    firstName: "John",
    lastName: "Doe",
    DOB: "22-12-1990",
  },
  "annasmith@gamil.com": {
    firstName: "Anna",
    lastName: "smith",
    DOB: "02-07-1983",
  },
  "peterjones@gamil.com": {
    firstName: "Peter",
    lastName: "Jones",
    DOB: "21-03-1989",
  },
};

// GET request: Retrieve all friends
router.get("/", (req, res) => {
  //   Send a JSON response with formatted friends data

  res.send(JSON.stringify(friends, null, 4)); //This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
  const { email } = req.params;

  res.send(friends[email]);
});

// POST request: Add a new friend
router.post("/", (req, res) => {
  // Check if email is provided in the request body
  const { email, firstName, lastName, DOB } = req.body;
  if (email) {
    // Create or update friend's details based on provided email
    friends[email] = {
      firstName: firstName,
      lastName: lastName,
      DOB: DOB,
    };
  }
  // Send response indicating user addition
  res.send("The user" + " " + firstName + " Has been added!");
});

// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Extract email parameter from request URL
  const { email } = req.params;
  const { firstName, lastName, DOB } = req.body;
  let friend = friends[email]; // Retrieve friend object associated with email
  if (friend) {
    // Check if friend exists
    // Add similarly for firstName
    // Add similarly for lastName
    // Update DOB if provided in request body
    if (DOB) {
      friend["DOB"] = DOB;
    }
    if (firstName) {
      friend["firstName"] = firstName;
    }
    if (lastName) {
      friend["lastName"] = lastName;
    }
    friends[email] = friend; // Update friend details in 'friends' object
    res.send(`Friend with the email ${email} updated.`);
  } else {
    // Respond if friend with specified email is not found
    res.send("Unable to find friend!");
  }
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Extract email parameter from request URL
  const email = req.params.email;
  if (email) {
    // Delete friend from 'friends' object based on provided email
    delete friends[email];
  }

  // Send response confirming deletion of friend
  res.send(`Friend with the email ${email} deleted.`);
});

module.exports = router;
