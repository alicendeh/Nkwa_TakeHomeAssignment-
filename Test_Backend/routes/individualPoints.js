const express = require("express");

const router = express.Router();

// user data set
let userData = [
  {
    id: 1,
    name: "Alice Ndeh",
    individualPoints: [
      {
        title: "Finished goal",
        points: 220,
        date: Date.now(),
      },
      {
        title: "Saved today",
        points: 540,
        date: Date.now(),
      },
      {
        title: "Saved 15000",
        points: 990,
        date: Date.now(),
      },
      {
        title: "Goal attain",
        points: 4,
        date: Date.now(),
      },
    ],
  },
  {
    id: 2,
    name: "Yaya Mamoudou",
    individualPoints: [
      {
        title: "Finished goal",
        points: 0,
        date: Date.now(),
      },
      {
        title: "Saved today",
        points: 990,
        date: Date.now(),
      },
      {
        title: "Saved 15000",
        points: 0,
        date: Date.now(),
      },
      {
        title: "Goal attain",
        points: 2,
        date: Date.now(),
      },
    ],
  },
  {
    id: 3,
    name: "Njume Yannick",
    individualPoints: [
      {
        title: "Finished goal",
        points: 20,
        date: Date.now(),
      },
    ],
  },
];

//get user data
router.get("/", (req, res) => {
  try {
    res.status(200).json({ data: userData });
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

//get list pf points accumulated over time
router.get("/list/:id", (req, res) => {
  try {
    let selectedUser = userData.filter((user) => user.id == req.params.id);
    console.log(userData.individualPoints);
    res.status(200).json({ totalPoints: selectedUser[0].individualPoints });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
