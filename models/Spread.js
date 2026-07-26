const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class Spread extends Model {}

Spread.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postedBy: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "spread",
  }
);

// Export Spread model
module.exports = Spread;
