'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Subject', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  });
}
