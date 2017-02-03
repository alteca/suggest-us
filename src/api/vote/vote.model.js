'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Vote', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
         model: 'User',
         key: 'id',
      }
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      references: {
         model: 'Subject',
         key: 'id',
      }
    }
  });
}
