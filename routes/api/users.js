const express = require("express");
const router = express.Router();

//@route get api/users/test
//@desc Test  profile route
//@access Publis
router.get("/test", (req, res) =>
  res.json({
    msg: "Users works"
  })
);

module.exports = router;
