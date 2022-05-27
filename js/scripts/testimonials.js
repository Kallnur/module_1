export const testimonials = (testimonials) => {
    const tagTestimonialsList = document.querySelector('.testimonials__list');

    testimonials.map(testimonial => {
        let newTestimonialItem     = document.createElement('li'),
            testimonialAuthorBlock = document.createElement('div'),
            testimonialAuthorMess  = document.createElement('span'),
            testimonialAuthorName  = document.createElement('strong'),
            testimonialAuthorJob   = document.createElement('span');
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