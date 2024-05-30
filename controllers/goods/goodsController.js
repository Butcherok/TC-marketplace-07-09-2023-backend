const { tryCatchWrapper } = require("../../utils");
const { httpError } = require("../../utils");
const { Good, User, Favorites } = require("../../models");
const { Users } = require("../../services");
const { errorMessage } = require("../../constants");
const addGood = async (req, res) => {
  const { id: owner } = req.user;
  const response = await Good.create({ ...req.body, owner });
  res.status(200).json({ data: response });
};

const getById = async (req, res) => {
  const { goodId } = req.params;
  const response = await Good.findById(goodId);
  if (!response) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(response);
};

const getGoodsByQuery = async (req, res) => {
  const { category, title } = req.query;
  const results = await Good.find({ category, title });
  if (!results) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(results);
};
const delById = async (req, res) => {
  const { goodId } = req.params;
  const { id: owner } = req.user;

  const deletedGood = await Good.deleteById(goodId);

  if (!deletedGood) {
    throw httpError(404, errorMessage[404]);
  }
  await Image.deleteImage(notice.fileId);
  await Users.updateUser({
    id: owner,
    data: { $pull: goodId },
    fieldName: "favorites",
  });
  res.status(204).send("No content");
};
const editGoodById = async (req, res) => {
  const { goodId } = req.params;
  const updatedGood = await Good.findByIdAndUpdate(goodId, { ...req.body });
  if (!updatedGood) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(updatedGood);
};
const updateGoodById = async (req, res) => {
  const { price, quantity } = req.body;
  const { goodId } = req.params;
  const updatedGood = await Good.findByIdAndUpdate(goodId, {
    ...req.body,
    price,
    quantity,
  });
  if (!updatedGood) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(updatedGood);
};
// const getOwnerNotices = async (req, res) => {
//   const { id: owner } = req.user;
//   const { page, limit, sort, filter, category, sex, date } = req.query;
//   const response = await Notices.findAll({
//     owner,
//     page,
//     limit,
//     sort,
//     filter,
//     category,
//     sex,
//     date,
//   });

//   res.json({ data: response });
// };

// const getFavorites = async (req, res) => {
//   const { id: owner } = req.user;
//   const { page, limit, sort, filter, category, sex, date } = req.query;
//   const user = await User.find(owner).populate("user");
//   if (!user) {
//     throw httpError(404, errorMessage[404]);
//   }
//   res.status(200).json(user.favorites);
// };

// const addFavorite = async (req, res) => {
//   const { id: owner } = req.user;
//   const result = await Favorites.findById(owner);
//   if (!result) {
//     throw httpError(404, errorMessage[404]);
//   }
//   const newFavorite = await User.create({ favorites: result }).populate("user");
//   await Notices.updateNotice({
//     id: noticeId,
//     fieldName: "favorites",
//     data: { $addToSet: owner },
//   });

//   const updatedStatus = await Users.updateUser({
//     id: owner,
//     fieldName: "favorites",
//     data: { $addToSet: noticeId },
//   });

//   if (!updatedStatus) {
//     throw httpError(404, errorMessage[404]);
//   }
//   res.status(201).json({
//     newFavorite,
//   });
// };

// const deleteFavorite = async (req, res) => {
//   const { id: owner } = req.user;
//   const { goodId } = req.params;
//   if (owner !== goodId) {
//     throw httpError(400, errorMessage[400]);
//   }
//   const result = await Favorites.findById(owner);
//   if (!result) {
//     throw httpError(404, errorMessage[404]);
//   }
//   const favorites = await User.find({ goodId }, "favorites");
//   await User.findByIdAndUpdate(goodId, {
//     favorites: favorites.filter((item) => item._id !== _id),
//   });
//   await Notices.updateNotice({
//     id: noticeId,
//     fieldName: "favorites",
//     data: { $pull: owner },
//   });

//   const updatedStatus = await Users.updateUser({
//     id: owner,
//     fieldName: "favorites",
//     data: { $pull: noticeId },
//   });

//   if (!updatedStatus) {
//     throw httpError(404, errorMessage[404]);
//   }
//   res.status(204).send("No content");
// };

module.exports = {
  addGood: tryCatchWrapper(addGood),
  getById: tryCatchWrapper(getById),
  getGoodsByQuery: tryCatchWrapper(getGoodsByQuery),
  delById: tryCatchWrapper(delById),
  editGoodById: tryCatchWrapper(editGoodById),
  updateGoodById: tryCatchWrapper(updateGoodById),
  // addFavorite: tryCatchWrapper(addFavorite),
  //   getOwnerNotices: tryCatchWrapper(getOwnerNotices),
  // getFavorites: tryCatchWrapper(getFavorites),
  // deleteFavorite: tryCatchWrapper(deleteFavorite),
};
