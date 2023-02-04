module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define("purchase", {
    corresponding_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    flight_serial: {
      type: DataTypes.INTEGER,
    },
    offer_price: {
      type: DataTypes.INTEGER,
    },
    offer_class: {
      type: DataTypes.STRING,
    },
  });

  return Purchase;
};
