const express = require("express");
const userData = require("../Data/Data");

const router = express.Router();

//get user data
router.get("/", (req, res) => {
  try {
    res.status(200).json({ users: userData });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//get total points
router.get("/totalpoints/:id", (req, res) => {
  try {
    let selectedUser = userData.filter((user) => user.id == req.params.id);
    let total = 0;
    selectedUser[0].individualPoints.map((data) => (total += data.points));
    res.status(200).json({ totalPoints: total });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//get list of points accumulated over time
router.get("/list/:id", (req, res) => {
  try {
    let selectedUser = userData.filter((user) => user.id == req.params.id);

    selectedUser[0].individualPoints.sort((a, b) => {
      return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });
    res.status(200).json({ totalPoints: selectedUser[0].individualPoints });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
