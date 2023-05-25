const express = require("express");
const { getBrands } = require("../controllers/brandController");
const { getBrand } = require("../controllers/brandController");
const { createBrand } = require("../controllers/brandController");
const { updateBrand } = require("../controllers/brandController");
const { deleteBrand } = require("../controllers/brandController");
const router = express.Router();

router.get("/", getBrands);
router.get("/:brandId", getBrand);
router.post("/", createBrand);
router.put("/:brandId", updateBrand);
router.delete("/:brandId", deleteBrand);

module.exports = router;
