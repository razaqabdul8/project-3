// Creating our Event model

module.exports = function(sequelize) {
  const Userevent = sequelize.define("Userevent");
  return Userevent;
};
