var Hotel = sequelize.define('Hotel', {
  id : Sequelize.INTEGER,
  name: Sequelize.STRING,
  address: Sequelize.TEXT,
  star_rating : Sequelize.INTEGER,
  user_rating : Sequelize.INTEGER,
  amenities : Sequelize.STRING,
  location_lat : Sequelize.DOUBLE,
  location_lon : Sequelize.DOUBLE,
  city_code : Sequelize.INTEGER
})