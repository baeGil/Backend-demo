const { next } = require("cherio/lib/api/traversing");
const Detail = require("../models/Customer/detail");

// get all details
exports.getBrands = (req, res, next) => {
  Brand.findAll()
    .then((brands) => {
      res.status(200).json({ brands: brands });
    })
    .catch((err) => console.log(err));
};

//get brand by Id
exports.getBrand = (req, res, next) => {
  const brandId = req.params.brandId;
  Brand.findByPk(brandId)
    .then((brand) => {
      if (!brand) {
        return res.status(404).json({ message: "Brand not found!" });
      }
      res.status(200).json({ brand: brand });
    })
    .catch((err) => console.log(err));
};

// create new brand
exports.createBrand = (req, res, next) => {
  // const id la dat ten bien
  // req.body.id la cach viet trong body o postman
  // brandId: id la cach gan gia tri bien id vao bang brandId
  const name = req.body.name;
  Brand.create({
    brandName: name,
  })
    .then((result) => {
      console.log("Created Brand");
      res.status(201).json({
        message: "Brand created successfully!",
        brand: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update brand
exports.updateBrand = (req, res, next) => {
  const brandId = req.params.brandId;
  const updatedName = req.body.name;
  Brand.findByPk(brandId)
    .then((brand) => {
      if (!brand) {
        return res.status(404).json({ message: "Brand not found!" });
      }
      brand.brandName = updatedName;
      return brand.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Brand updated!", brand: result });
    })
    .catch((err) => console.log(err));
};

//delete brand
exports.deleteBrand = (req, res, next) => {
  const brandId = req.params.brandId;
  Brand.findByPk(brandId)
    .then((brand) => {
      if (!brand) {
        return res.status(404).json({ message: "Brand not found!" });
      }
      return Brand.destroy({
        where: {
          brandId: brandId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "Brand deleted!" });
    })
    .catch((err) => console.log(err));
};
