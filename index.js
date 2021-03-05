const server = require('./src/app.js');
const { conn, User, Experience, Education, Skill, Passion, Summary, Curriculum } = require('./src/db');

conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {  //process.env.PORT
    console.log(` listening at port 3001`); // eslint-disable-line no-console

    await User.create({
      "email": "santiabo@gmail.com",
      "password": "Xja97v",
      "name": "Santiago Aguirre",    
      "title": "Full Stack Developer",
      "mobile": "+54 1166735627",
      "city": "Rio Ceballos",
      "avatar": "https://res.cloudinary.com/dx9na6eh7/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1614516360/avatarImage/dbfcsegfyumhs5v638hm.png"
    });

    await Curriculum.create({
      "language": "english",
      "userId": "1"
    })

    await Experience.create({
      "curriculumId": 1,
      position: "Full stack Developer",
      place: "Soy Henry",
      date: " Jan 2021 - Argentina",
      info: `Built a new mobile e-bank app with React-Native,
        Expo and Redux as frameworks and Paper to give it styles.
       - Made the database using MySQL and Sequelize with Dbeaver
        and postman as helping tools.
       - Used Gmail API for e-mail authentication, fusionAuth for local
        autentication and expo API for loggin with biometricals, Bcrypt for
         encrypting the password in the database.`
    });

    await Experience.create({
      curriculumId: 1,
      position: "Full stack Developer",
      place: "Soy Henry",
      date: " Jan 2021 - Argentina",
      info: `- Worked on an e-commerce web app with React Redux in the frontend,
      taking attention to write well maintained code from the beginning.
              - Made the database using  Postgresql and Sequelize with Dbeaver and
      postman as helping tools.
              - Used passport Local and Bearer strategy with Json web token for
               verifying the user login to site. And Bcrypt for encrypting the
      password in the database.`
    })

    await Education.create({
      curriculumId: 1,
      title: "Full stack Developer",
      place: "Soy Henry",
      date: " Feb 2021 - Argentina"
    });

    await Education.create({
      "curriculumId": 1,
      title: "JavaScript Algorithms and Data Structures",
      place: "freeCodeCamp",
      date: " Feb 2021 - Argentina"
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Coding",
      tools: `HTML CSS/CSS3 LESS StyledComponents Bootstrap
     JQuery JavaScript  React  Redux  SQL Sequelize  Postgresql Passport`
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Tools & Technologies",
      tools: `Visual Studio Code  Figma  Git  npm `
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Project Management",
      tools: `Airtable  Trello  Scrum Agile`
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Languages",
      tools: `Spanish(native)   English(advanced)`
    });

    await Passion.create({
      "curriculumId": 1,
      area: "healt",
      description: `Healthy lifestyle, skateboarding and travel.`
    });

    await Passion.create({
      curriculumId: 1,
      area: "healt",
      description: `Learning new tecnologies and languages.`
    });

    await Summary.create({
      "curriculumId": 1,
      description: `Full stack developer, proactive, fast learner with an advanced English level.`
    })

  })
});
