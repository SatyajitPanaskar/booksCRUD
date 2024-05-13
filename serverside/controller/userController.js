import User from "../model/user.js";

//  create book data
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "Books not Found..." });
    }

    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// display all the books data
export const getAllBooks = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: "Books are Not Found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// display one Books data
export const getOneBook = async (res, req) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "Book Not Found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Books update Api
export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const userExits = await User.findById(id);
    if (!userExits) {
      return res.status(401).json({ msg: "Book Not Found " });
    }
    const updatedBook = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Data Delete Api
export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User not exist" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "Book Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
