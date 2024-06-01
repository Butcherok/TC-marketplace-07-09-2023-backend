const { User } = require("./user/userModel");

const { Product } = require("./products/productsModel");

const { Favorites } = require("./favoriteGoods/favoriteGoodsModel");

// const { Sponsor } = require("./sponsor/sponsorModel");

// const { Article } = require("./article/articleModel");

module.exports = { Product, User, Favorites };
