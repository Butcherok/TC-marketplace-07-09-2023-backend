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
  delProductById,
  getProductById,
  getProductsByQuery,
  // getOwnerNotices,
  // getFavorites,
  // deleteFavorite,
  addProduct,
  editProductById,
  updateProductById,
} = require("./products/productsController");

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
  addProduct,
  // addFavorite,
  delProductById,
  getProductById,
  getProductsByQuery,
  editProductById,
  updateProductById,
  // getOwnerNotices,
  // getFavorites,
  // deleteFavorite,
};
