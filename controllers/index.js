const {
  googleAuth,
  register,
  login,
  refresh,
  logout,
  update,
  getMe,
} = require("./users/usersController");

const {
  // addFavorite,
  delById,
  getById,
  getGoodsByQuery,
  // getOwnerNotices,
  // getFavorites,
  // deleteFavorite,
  addGood,
  editGoodById,
  updateGoodById,
} = require("./goods/goodsController");

//   const { getSponsors } = require("./sponsors/sponsorsController");

//   const { getArticles } = require("./articles/articlesController");

module.exports = {
  googleAuth,
  register,
  login,
  refresh,
  logout,
  update,
  getMe,
  // getSponsors,
  // getArticles,
  addGood,
  // addFavorite,
  delById,
  getById,
  getGoodsByQuery,
  editGoodById,
  updateGoodById,
  // getOwnerNotices,
  // getFavorites,
  // deleteFavorite,
};
