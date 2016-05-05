var Room = sequelize.define('Room', {
  id : Sequelize.INTEGER,
  hotel_name : Sequelize.STRING,
  type : Sequelize.INTEGER
  start_date : Sequelize.DATE,
  end_date : Sequelize.DATE,
  count : Sequelize.INTEGER
}) 