const { tryCatchWrapper } = require("../../utils");
const { httpError } = require("../../utils");
const { Product } = require("../../models");
const { Users } = require("../../services");
const { errorMessage } = require("../../constants");
const addProduct = async (req, res) => {
  const { id: owner } = req.user;
  const response = await Product.create({ ...req.body, owner });
  res.status(200).json({ data: response });
};

const getProductById = async (req, res) => {
  const { productId } = req.params;
  const response = await Product.findById(productId);
  if (!response) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(response);
};

const getProductsByQuery = async (req, res) => {
  const { category, title } = req.query;
  const results = await Product.find({ category, title });
  if (!results) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(results);
};
const delProductById = async (req, res) => {
  const { productId } = req.params;
  const { id: owner } = req.user;

  const deletedProduct = await Product.deleteById(productId);

  if (!deletedProduct) {
    throw httpError(404, errorMessage[404]);
  }
  await Users.updateUser({
    id: owner,
    data: { $pull: productId },
    fieldName: "favorites",
  });
  res.status(204).send("No content");
};
const editProductById = async (req, res) => {
  const { productId } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(productId, {
    ...req.body,
  });
  if (!updatedProduct) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(updatedProduct);
};
const updateProductById = async (req, res) => {
  const { price, quantity } = req.body;
  const { productId } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(productId, {
    ...req.body,
    price,
    quantity,
  });
  if (!updatedProduct) {
    throw httpError(404, errorMessage[404]);
  }
  res.status(200).json(updatedProduct);
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
  addProduct: tryCatchWrapper(addProduct),
  getProductById: tryCatchWrapper(getProductById),
  getProductsByQuery: tryCatchWrapper(getProductsByQuery),
  delProductById: tryCatchWrapper(delProductById),
  editProductById: tryCatchWrapper(editProductById),
  updateProductById: tryCatchWrapper(updateProductById),
  // addFavorite: tryCatchWrapper(addFavorite),
  //   getOwnerNotices: tryCatchWrapper(getOwnerNotices),
  // getFavorites: tryCatchWrapper(getFavorites),
  // deleteFavorite: tryCatchWrapper(deleteFavorite),
};
