const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const faker = require("faker");
require("dotenv").config();

function dbConnect(cb) {
  mongoose
    .connect(`${process.env.DB_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(x => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
      cb();
    })
    .catch(err => {
      console.error("Error connecting to mongo", err);
    });
}

getPhone = () => {
  const characters = "0123456789";
  let phone = 91;
  for (let i = 0; i < 7; i++) {
    phone += characters[Math.floor(Math.random() * characters.length)];
  }
  return phone;
};

getMobile = () => {
  const characters = "0123456789";
  let mobile = 6;
  for (let i = 0; i < 8; i++) {
    mobile += characters[Math.floor(Math.random() * characters.length)];
  }
  return mobile;
};

const id_user = [];
const id_plan = [];

for (let i = 0; i < 10; i++) {
  id_user.push(new mongoose.mongo.ObjectId());
}

for (let i = 0; i < 10; i++) {
  id_plan.push(new mongoose.mongo.ObjectId());
}

dbConnect(() => {
  const salt = bcrypt.genSaltSync(saltRounds);

  const User = require("../models/User");
  const Plan = require("../models/Plan");


  let users = [
    {
      _id: id_user[0],
      username: "quique",
      password: bcrypt.hashSync("trainer", bcrypt.genSaltSync(saltRounds)),
      name: "Enrique Montaño",
      telephone: getPhone(),
      mobile: getMobile(),
      email: "quiquemontano@gmail.com",
      imgPath: faker.image.avatar(),
      role: "trainer",
      mode: ["online", "presencial"]
    },
    {
      _id: id_user[1],
      username: "fran",
      password: bcrypt.hashSync("trainer", bcrypt.genSaltSync(saltRounds)),
      name: "Fran Naranjo",
      telephone: getPhone(),
      mobile: getMobile(),
      email: "quiquemontano@gmail.com",
      imgPath: faker.image.avatar(),
      role: "trainer",
      mode: ["online", "presencial"]
    },
    {
      _id: id_user[2],
      username: "cesar",
      password: bcrypt.hashSync("user", bcrypt.genSaltSync(saltRounds)),
      name: "Cesar Val Leiva",
      telephone: getPhone(),
      mobile: getMobile(),
      email: "cesarvalleiva@gmail.com",
      imgPath: faker.image.avatar(),
      role: "user",
      plan: id_plan[0]
    }
  ];

  let plans = [
    {
      _id: id_plan[0],
      trainer: id_user[0],
      user: id_user[1],
      name: "perder peso",
      validity: '1 mes'
    }
  ];


  User.deleteMany()
    .then(() => {
      return User.create(users);
    })
    .then(() => {
      return Plan.deleteMany();
    })
    .then(() => {
      return Plan.create(plans);
    })
    .then(() => {
      console.log("succesfully added all the data");
      mongoose.connection.close();
      process.exit(0);
    });
});
