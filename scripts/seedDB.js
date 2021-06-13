const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User, Yard, Comment, and Appointment collections and inserts the data below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pupstop");

const User = require("../models/user");
const Yard = require("../models/yard");
const Comment = require("../models/comment");
const Appointment = require("../models/appointment");

User.collection.drop();
Yard.collection.drop();
Comment.collection.drop();
Appointment.collection.drop();

db.User.remove({})
  .then(() =>
    db.User.insertMany([
      {
        fname: "Gabe",
        lname: "Quakkelaar",
        email: "gq@gmail.com",
        password: "password1234",
        image:
          "https://drive.google.com/uc?export=view&1pnj52qiutq_F--Z84vd5FfjKwP-Psne0",
      },
      {
        fname: "Jenn",
        lname: "Greiner",
        email: "jg@gmail.com",
        password: "password1234",
        image:
          "https://drive.google.com/uc?export=view&1pnj52qiutq_F--Z84vd5FfjKwP-Psne0",
      },
    ])
  )
  .then((res) => {
    console.log("user", res);
    // process.exit(0);
    // Add seed yards to the DB
    db.Yard.remove({})
      .then(() =>
        db.Yard.insertMany([
          {
            name: "Sleepy Hollow",
            description:
              "A peaceful escape from the realities of everyday dogwalking",
            address: "123 Somewhere St",
            city: "Nowhereville",
            state: "CO",
            zip: 12345,
            fence: true,
            water: false,
            hasPets: true,
            rate: 20,
            user_id: res[0]._id,
          },
          {
            name: "Peaceful Meadow",
            description: "A peaceful escape from the life",
            address: "999 Nonstop Ave",
            city: "Boulder",
            state: "CO",
            zip: 12223,
            fence: true,
            water: false,
            hasPets: true,
            rate: 10,
            user_id: res[1]._id,
          },
        ])
      )
      .then((res) => {
        console.log("yard", res);
        process.exit(0);
      })
      .catch((err) => {
        console.log("Yard error");
        console.error(err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.log("User error");
    console.error(err);
    process.exit(1);
  });

// Add seed users to the DB
// db.User.remove({})
//   .then(() =>
//     db.User.create({
//       fname: "Gabe",
//       lname: "Quakkelaar",
//       email: "gq@gmail.com",
//       password: "password1234",
//       image:
//         "https://drive.google.com/uc?export=view&1pnj52qiutq_F--Z84vd5FfjKwP-Psne0",
//     })
//   )
//   .then((res) => {
//     console.log("user", res);
//     // process.exit(0);
//     // Add seed yards to the DB
//     db.Yard.remove({})
//       .then(() =>
//         db.Yard.create({
//           name: "Sleepy Hollow",
//           description:
//             "A peaceful escape from the realities of everyday dogwalking",
//           address: "123 Somewhere St",
//           city: "Nowhereville",
//           state: "CO",
//           zip: 12345,
//           fence: true,
//           water: false,
//           hasPets: true,
//           rate: 20,
//           user_id: res._id,
//         })
//       )
//       .then((res) => {
//         console.log("yard", res);
//         // process.exit(0);
//       })
//       .catch((err) => {
//         console.log("Yard error");
//         console.error(err);
//         process.exit(1);
//       });
//   })
//   .catch((err) => {
//     console.log("User error");
//     console.error(err);
//     process.exit(1);
//   });
// .then(
//   db.User.create({
//     fname: "Jenn",
//     lname: "Greiner",
//     email: "jg@gmail.com",
//     password: "password1234",
//     image:
//       "https://drive.google.com/uc?export=view&1pnj52qiutq_F--Z84vd5FfjKwP-Psne0",
//   })
//     .then((res) => {
//       console.log("user");
//       console.log("res", res);
//       // process.exit(0);
//       // Add seed yards to the DB
//       db.Yard.create({
//         name: "Peaceful Meadow",
//         description: "A peaceful escape from the life",
//         address: "999 Nonstop Ave",
//         city: "Boulder",
//         state: "CO",
//         zip: 12223,
//         fence: true,
//         water: false,
//         hasPets: true,
//         rate: 10,
//         user_id: res._id,
//       });
//     })
//     .then((res) => {
//       console.log("yard");
//       console.log("res", res);
//       process.exit(0);
//     })
//     .catch((err) => {
//       console.log("Yard error");
//       console.error(err);
//       process.exit(1);
//     })
// );

// // Add seed appointments to the DB
// db.Appointment.remove({})
//   .then(() => db.Appointment.collection.insertMany(appointmentSeed))
//   .then((data) => {
//     console.log(data.result.n + " appointment records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// const userSeed = [
//   {
//     // id: "3",
//     fname: "Gabe",
//     lname: "Quakkelaar",
//     email: "gabe.quakkelaar@gmail.com",
//     password: "password12345",
//     image:
//       "https://drive.google.com/uc?export=view&1pnj52qiutq_F--Z84vd5FfjKwP-Psne0",
//   },
//   {
//     // id: "2",
//     fname: "Justin",
//     lname: "Westmoreland",
//     email: "justinrwestmoreland@gmail.com",
//     password: "password12345",
//     image:
//       "https://drive.google.com/uc?export=view&1xrm9Im28vcV52GVtIHmB3dR-wSmEYWp2",
//   },
//   {
//     // id: "1",
//     fname: "Jenn",
//     lname: "Greiner",
//     email: "jenn.greiner1@gmail.com",
//     password: "password12345",
//     image:
//       "https://drive.google.com/uc?export=view&1tYVs1rQcjF_uOK9voDu18aye8Acwfus-",
//   },
// ];

// const yardSeed = [
//   {
//     name: "Sleepy Hollow",
//     description: "A peaceful escape from the realities of everyday dogwalking",
//     address: "123 Somewhere St",
//     city: "Nowhereville",
//     state: "CO",
//     zip: 12345,
//     fence: true,
//     water: false,
//     hasPets: true,
//     rate: 20,
//     user_id: user_id,
//   },
//   {
//     name: "La Vista Relaxation",
//     description:
//       "A sunny place off the main strip where you and yours can go to relax and recharge",
//     address: "88 Uptown Ave",
//     city: "Nothere City",
//     state: "CO",
//     zip: 12345,
//     fence: false,
//     water: true,
//     hasPets: false,
//     rate: 5,
//     user_id: 2,
//   },
//   {
//     name: "My backyard",
//     description:
//       "Not too big, but enough room for a few dogs to play comfortably",
//     address: "4 S Parking Rd",
//     city: "Smalltown",
//     state: "CO",
//     zip: 10001,
//     fence: true,
//     water: true,
//     hasPets: true,
//     rate: 17,
//     user_id: 3,
//   },
// ];

// const commentSeed = [
//   {
//     body: "This is an incredible yard! The grass is green, the sun is shining, and the dogs had a great time!",
//     date_created: "2021-03-22",
//     user_id: user_id,
//     yard_id: yard_id,
//   },
//   {
//     body: "Average yard, loud neighbor dogs, but having water available is great!",
//     date_created: "2021-03-29",
//     user_id: "1",
//     yard_id: "3",
//   },
//   {
//     body: "Lots of dead grass, clearly dogs dig a lot of holes here.",
//     date_created: "2021-03-15",
//     user_id: "3",
//     yard_id: "1",
//   },
//   {
//     body: "No shade or water makes this yard very hot for my fluffy pooch.",
//     date_created: "2021-03-25",
//     user_id: "2",
//     yard_id: "1",
//   },
// ];

// const appointmentSeed = [
//   {
//     user_id: "1",
//     yard_id: "3",
//     datetime: "2021-05-12",
//     num_pets: "2",
//   },
//   {
//     user_id: "1",
//     yard_id: "2",
//     datetime: "2021-04-28",
//     num_pets: "2",
//   },
//   {
//     user_id: "2",
//     yard_id: "1",
//     datetime: "2021-04-18",
//     num_pets: "1",
//   },
//   {
//     user_id: "3",
//     yard_id: "1",
//     datetime: "2021-05-12",
//     num_pets: "4",
//   },
// ];
