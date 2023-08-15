import usersModel from "./users-model.js";

export const findAllUsers = () => usersModel.find();


export const findUserById = (id) => {
usersModel.findById(id);
};


export const findUserByUsername = (username) => {
    usersModel.findOne({ username });
};


export const findUserByCredentials = async (username, password) => {
  return await usersModel.findOne({ username, password }).exec();
};

export const createUser = (user) => usersModel.create(user);


export const updateUser = (id, user) => {
usersModel.updateOne({ _id: id }, { $set: user });
};
export const deleteUser = (id) => {
usersModel.deleteOne({ _id: id });
};
