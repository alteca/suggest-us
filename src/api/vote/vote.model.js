'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Vote', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
         model: 'Users',
         key: 'id'
      }
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
         model: 'Subjects',
         key: 'id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.NOW
    }
  });
}
