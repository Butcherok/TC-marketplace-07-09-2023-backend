const express = require("express");

const {
  fieldValidation,
  authentificate,
  isValidId,
  checkFieldData,
} = require("../../middlewares");
const ctrl = require("../../controllers");
const { Image } = require("../../services");
const { addProductSchema, updateProductSchema } = require("../../schema");
const { file, errorMessage } = require("../../constants");

const router = express.Router();

router.get("/", ctrl.getProductsByQuery);

// router.get("/owner", authentificate("token"), ctrl.getOwnerNotices);

// router.get("/favorites", authentificate("token"), ctrl.getFavorites);

router.get(
  "/:productId",
  isValidId(400, errorMessage[400]),
  ctrl.getProductById
);

router.post(
  "/add",
  authentificate("token"),
  Image.uploadErrorHandler(file.notice.fieldName, file.notice.fileName),
  checkFieldData,
  fieldValidation(addProductSchema),
  ctrl.addProduct
);

router.delete(
  "/delete/:productId",
  authentificate("token"),
  isValidId(400, errorMessage[400]),
  ctrl.delProductById
);

router.put(
  "/edit/:productId",
  isValidId(400, errorMessage[400]),
  fieldValidation(addProductSchema),
  ctrl.editProductById
);
router.patch(
  "/update/:productId",
  isValidId(400, errorMessage[400]),
  fieldValidation(updateProductSchema),
  ctrl.updateProductById
);
// router.post(
//   "/favorites/add/:goodId",
//   authentificate("token"),
//   isValidId(400, errorMessage[400]),
//   ctrl.addFavorite
// );

// router.patch(
//   "/favorites/delete/:goodId",
//   authentificate("token"),
//   isValidId(400, errorMessage[400]),
//   ctrl.deleteFavorite
// );

module.exports = router;
