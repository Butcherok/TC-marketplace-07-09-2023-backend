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
    // add,
    // addFavorite,
    // delById,
    // getById,
    getNoticeByQuery,
    // getOwnerNotices,
    // getOwnerFavNotices,
    // deleteFavorite,
  } = require("./notices/noticesController");
  
//   const { addPet, deletePet } = require("./pets/petsController");
  
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
    // addPet,
    // deletePet,
    // getSponsors,
    // getArticles,
    // add,
    // addFavorite,
    // delById,
    // getById,
    getNoticeByQuery,
    // getOwnerNotices,
    // getOwnerFavNotices,
    // deleteFavorite,
  };
  