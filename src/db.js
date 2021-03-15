require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
      database: DB_NAME,
      dialect: "mysql", //mySQL ???
      host: DB_HOST,
      port: 5432,
      user: DB_USER,
      password: DB_PASSWORD,
      pool: {
        max: 3,
        min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        keepAlive: false,
      },
      ssl: true,
    })
    : new Sequelize(
      `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
      { logging: false, native: false }
    );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, './models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Education, Experience, Passion, Skill, Summary, Curriculum } = sequelize.models;

User.hasMany(Curriculum);
Curriculum.belongsTo(User);

Curriculum.hasMany(Education);
Education.belongsTo(Curriculum);

Curriculum.hasMany(Experience);
Experience.belongsTo(Curriculum);

Curriculum.hasMany(Passion);
Passion.belongsTo(Curriculum);

Curriculum.hasMany(Skill);
Skill.belongsTo(Curriculum);

Curriculum.hasOne(Summary);
Summary.belongsTo(Curriculum);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
  User,
  Education,
  Experience,
  Passion,
  Skill,
  Summary,
  Curriculum
};
