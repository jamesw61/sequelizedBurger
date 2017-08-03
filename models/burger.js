module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Burger.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Burger.hasMany(models.Customer, {
      onDelete: "cascade"
    });
  };
    return Burger;
};