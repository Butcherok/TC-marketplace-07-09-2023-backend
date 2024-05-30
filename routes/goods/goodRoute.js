const express = require("express");

const {
  fieldValidation,
  authentificate,
  isValidId,
  checkFieldData,
} = require("../../middlewares");
const ctrl = require("../../controllers");
const { Image } = require("../../services");
const { addSchema, updateGoodSchema } = require("../../schema");
const { file, errorMessage } = require("../../constants");

const router = express.Router();

router.get("/", ctrl.getGoodsByQuery);

// router.get("/owner", authentificate("token"), ctrl.getOwnerNotices);

// router.get("/favorites", authentificate("token"), ctrl.getFavorites);

router.get("/:goodId", isValidId(400, errorMessage[400]), ctrl.getById);

router.post(
  "/add",
  authentificate("token"),
  Image.uploadErrorHandler(file.notice.fieldName, file.notice.fileName),
  checkFieldData,
  fieldValidation(addSchema),
  ctrl.addGood
);

router.delete(
  "/delete/:goodId",
  authentificate("token"),
  isValidId(400, errorMessage[400]),
  ctrl.delById
);

router.put(
  "/edit/:goodId",
  isValidId(400, errorMessage[400]),
  fieldValidation(addSchema),
  ctrl.editGoodById
);
router.patch(
  "/update/:goodId",
  isValidId(400, errorMessage[400]),
  fieldValidation(updateGoodSchema),
  ctrl.updateGoodById
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
