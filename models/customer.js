// module.exports = function(sequelize, DataTypes) {
//     var Customer = sequelize.define("Customer", {
//         name: DataTypes.STRING
//     }, {
//         associate: function(models) {
//             Customer.hasMany(models.Burger, {
//                 onDelete: "cascade"
//             });
//         }
//     });
//     return Customer;
// };

module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        // Giving the Author model a name of type STRING
        name: DataTypes.STRING
    });

    Customer.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Customer.hasMany(models.Burger, {
            
        });
    };
    return Customer;
};