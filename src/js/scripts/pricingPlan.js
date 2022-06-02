export const pricingPlan = (dataPlans) => {
    const tagPricingPrice = document.querySelectorAll('.pricing-price');
    const tagPlanName     = document.querySelectorAll('.pricing__plan-name');
    const tagRadioPlan    = document.querySelectorAll('.modal__plan-radio > label');

    dataPlans.map((plan, ind) => {
        tagPlanName[ind].textContent = plan.name;
        tagPricingPrice[ind].textContent = plan.price;
        tagRadioPlan[ind].textContent = plan.name
    })
}