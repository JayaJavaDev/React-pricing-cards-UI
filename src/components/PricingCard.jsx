const PricingCard = ({ plan }) => {
  return (
    <div className="pricing-card">

      <h3>{plan.name}</h3>

      <h2>{plan.price}</h2>

      <ul>
        {plan.features.map((feature) => (
          <li key={feature.name}>
            <span className={feature.available ? "check" : "cross"}>
              {feature.available ? "✓" : "✕"}
            </span>

            <span className={feature.available ? "active" : "disabled"}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button className="plan-button">
        BUTTON
      </button>

    </div>
  );
};

export default PricingCard;