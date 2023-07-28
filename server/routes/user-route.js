const { Router } = require("express");
const { userModel } = require("../models/user-model");

const userRoute = Router();

// for post the user
userRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    if (Object.keys(data).length >= 7) {
      // check for existing email and username in db
      let existEmail = await userModel.findOne({ email: data["email"] });
      if (existEmail) {
        res.status(200).send({ msg: "email is already registered" });
      } else {
        const createUser = new userModel(data);
        await createUser.save();
        res
          .status(200)
          .send({ msg: "User has been added", userDetails: createUser });
      }
    } else {
      res.status(400).json({ error: "Provide the all details" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// for send the user

userRoute.get("/", async (req, res) => {
  const { search } = req.query;

  try {
    let usersData = await userModel.find();
    if (search) {
      usersData = await userModel.find({
        $or: [
          {
            first_name: { $regex: search },
          },
        ],
      });
    }
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const data = usersData.slice(startIndex, endIndex);
    // ------------------------------
    res.status(200).send({
      currentPage: page,
      totalPages: Math.ceil(usersData.length / limit),
      data,
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// For Specific id route

userRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({ _id: id });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// For Delete User

userRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const user = await userModel.findByIdAndDelete({ _id: id });
    if (user) {
      res.status(200).send({ msg: "user deleted" });
    } else {
      res.status(400).send({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// for update user

userRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndUpdate({ _id: id }, req.body);
    if (user) {
      res.status(200).send({ msg: "user updated" });
    } else {
      res.status(400).send({ error: "user not found" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = { userRoute };
