import Sequelize from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimonios', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
})