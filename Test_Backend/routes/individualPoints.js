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
        date: "01/12/2020",
      },
      {
        title: "Saved today",
        points: 540,
        date: "11/12/2021",
      },
      {
        title: "Saved 15000",
        points: 990,
        date: "02/02/2020",
      },
      {
        title: "Goal attain",
        points: 4,
        date: "01/02/2021",
      },
      {
        title: "Goal attained",
        points: 2,
        date: "02/03/2020",
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
        date: "02/03/2020",
      },
      {
        title: "Saved today",
        points: 990,
        date: "02/03/2020",
      },
      {
        title: "Saved 15000",
        points: 0,
        date: "02/07/2021",
      },
      {
        title: "Goal attain",
        points: 2,
        date: "01/03/2020",
      },
      {
        title: "Goal attain",
        points: 2,
        date: "02/01/2020",
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
        date: "02/07/2021",
      },
    ],
  },
];

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
