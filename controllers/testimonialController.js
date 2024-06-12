import { Testimonial } from '../models/Testimonial.js'

const saveTestimonial = async (req, res) => {

    const { name, email, message } = req.body;

    const errors = [];

    if(name.trim() === ''){
        errors.push({messages: 'El campo nombre esta vacio'});
    }
    if(email.trim() === ''){
        errors.push({messages: 'El campo correo esta vacio'});
    }
    if(message.trim() === ''){
        errors.push({messages: 'El campo mensaje esta vacio'});
    }

    if(errors.length > 0) {

        const testimonials = await Testimonial.findAll();

        res.render('testimonials', {
            page: 'Testimonios',
            errors,
            name,
            email,
            message,
            testimonials
        });
    } else {

        try {
            await Testimonial.create({
                name,
                email,
                message
            });
        res.redirect('/testimonials');

        } catch (error) {
            console.log(error);
        }
    }
}

export {
    saveTestimonial
}