const { User } = require("./user/userModel");

const { Good } = require("./goods/goodModel");

const { Favorites } = require("./favoriteGoods/favoriteGoodsModel");

// const { Sponsor } = require("./sponsor/sponsorModel");

// const { Article } = require("./article/articleModel");

module.exports = { Good, User, Favorites };
