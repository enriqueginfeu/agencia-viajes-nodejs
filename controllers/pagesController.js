import { Travel } from '../models/Travel.js';
import { Testimonial } from '../models/Testimonial.js';

const homePage = async (req, res) => {

    const promiseDB = [];

    promiseDB.push( Travel.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );

    try {
        
        const result = await Promise.all( promiseDB );

        res.render('home', {
            page: 'Inicio',
            clase: 'home',
            travels: result[0],
            testimonials: result[1]
        });
    } catch (error) {
        console.log(error);
    }
}

const aboutPage = (req, res) => {

    res.render('about', {
        page: 'Nosotros'
    });
}

const travelPage = async (req, res) => {

    const travels = await Travel.findAll();

    res.render('travels', {
        page: 'Proximos Viajes',
        travels,
    });
}

const testimonialsPage = async (req, res) => {

    try {
        const testimonials = await Testimonial.findAll();        
        res.render('testimonials', {
            page: 'Testimonios',
            testimonials
        });
    } catch (error) {
        console.log(error);
    }

}

const travelDetail = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const travel = await Travel.findOne({ where : { slug }});
        res.render('travel', {
            page: 'Informacion del viaje',
            travel,
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    homePage,
    aboutPage,
    travelPage,
    testimonialsPage,
    travelDetail
}