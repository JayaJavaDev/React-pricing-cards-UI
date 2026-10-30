import "./App.css";
import PricingCard from "./components/PricingCard";
import pricingPlans from "./data/pricingData";

const App = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
    </div>
  );
};

export default App;