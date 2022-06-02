export const testimonials = (testimonials) => {
    const tagTestimonialsList = document.querySelector('.testimonials__list');

    testimonials.map(testimonial => {
        const newTestimonialItem     = document.createElement('li');
        const testimonialAuthorBlock = document.createElement('div');
        const testimonialAuthorMess  = document.createElement('span');
        const testimonialAuthorName  = document.createElement('strong');
        const testimonialAuthorJob   = document.createElement('span');
        
        newTestimonialItem.classList.add('testimonials__item');
        testimonialAuthorName.classList.add('testimonials__author-name');
        testimonialAuthorJob.classList.add('testimonials__author-job');

        testimonialAuthorName.textContent = testimonial.name;
        testimonialAuthorJob.textContent  = testimonial.job;
        testimonialAuthorMess.textContent = testimonial.text;

        testimonialAuthorBlock.append(testimonialAuthorName, testimonialAuthorJob);
        newTestimonialItem.append(testimonialAuthorMess, testimonialAuthorBlock);

        tagTestimonialsList.append(newTestimonialItem);
    })
}