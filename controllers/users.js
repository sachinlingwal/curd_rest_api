import { v4 as uuidv4 } from "uuid";

let users = [];
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`users with the name ${user.firstName} added to the Database`);
};

export const getUsers = (req, res) => {
  res.send(users);
};
export const findUser = (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send("User Deleted Successfully");
};

export const updateUser = (req, res) => {
  const { firstName, lastName, age } = req.body;
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send("user details is updated");
};
