import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@clickcart.com",
    password: bcrypt.hashSync("admin@123", 10),
    isAdmin: true,
  },
  {
    name: "Pravin Shedbale",
    email: "pravin.shedbale@outlook.com",
    password: bcrypt.hashSync("Pass@123", 10),
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("Pass@123", 10),
  },
];

export default users;
