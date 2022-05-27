export const pricingPlan = (dataPlans) => {
    const tagPricingPrice = document.querySelectorAll('.pricing-price'),
          tagPlanName     = document.querySelectorAll('.pricing__plan-name');

    dataPlans.map((plan, ind) => {
        tagPlanName[ind].textContent = plan.name;
        tagPricingPrice[ind].textContent = plan.price
    })
}