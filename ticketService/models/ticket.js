module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Ticket;
};
