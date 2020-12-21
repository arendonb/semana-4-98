'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Usuarios', // table name
        'tipo_documento', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Usuarios',
        'num_documento',
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
      queryInterface.removeColumn('Usuarios', 'tipo_documento'),
      queryInterface.removeColumn('Usuarios', 'num_documento'),
      queryInterface.removeColumn('Usuarios', 'direccion'),
      queryInterface.removeColumn('Usuarios', 'telefono'),
    ]);
  },
};
