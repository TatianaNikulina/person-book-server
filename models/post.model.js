module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        person_id:  {
            type: Sequelize.INTEGER,
        },
        body: {
            type: Sequelize.STRING,
            allowNull: false
        },
        short: {
            type: Sequelize.STRING,
           
        }
    });

    return Post
}