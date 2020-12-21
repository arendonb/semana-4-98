'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Usuarios', // table name
        'tipoDocumento', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Usuarios',
        'numeroDocumento',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Usuarios',
        'direccion',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Usuarios',
        'telefono',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Usuarios', 'tipoDocumento'),
      queryInterface.removeColumn('Usuarios', 'numeroDocumento'),
      queryInterface.removeColumn('Usuarios', 'direccion'),
      queryInterface.removeColumn('Usuarios', 'telefono'),
    ]);
  },
};
