// Creating our Event model

module.exports = function(sequelize) {
  const Useritem = sequelize.define("Useritem");
  return Useritem;
};
