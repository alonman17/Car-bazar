const router = require("express").Router();
const orderService = require("../services/orderService");
const carService = require("../services/carService");
const { orderValidationSchema } = require("../validation/validationsSchema");
const validateSchema = require("../validation/validation");
const { verifyAuth } = require("../validation/tokenVerify");
router.get("/find/:userId", verifyAuth, async (req, res) => {
  console.log(req.params);
  const orders = await orderService.getByUserId(req.params.userId);
  res.json(orders);
});
router.get("/all", async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.json(orders);
});

router.post("/add", orderValidationSchema, validateSchema, verifyAuth, async (req, res) => {
  const order = await orderService.add(req.body.Order);
  res.json(order);
  // res.status(200).json({ message: "Order added successfully" });
});

// router.put("/:id", orderValidationSchema, validateSchema, verifyAuth, async (req, res) => {
//   const order = await orderService.update(req.params.id, req.body);
//   res.json(order);
// });
module.exports = router;
