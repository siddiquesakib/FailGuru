import React from "react";
import { Link } from "react-router";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "STARTER",
      description:
        "For creators who need simple tools to launch and manage online classes with full control from day one.",
      price: "19.99",
      bgColor: "bg-yellow-100",
      features: [
        "1 course",
        "Up to 100 students",
        "Basic analytics",
        "Email support",
        "Custom domain",
      ],
    },
    {
      id: 2,
      name: "PRO",
      description:
        "For professionals who want control, smart features and more freedom to grow their digital academy.",
      price: "49.99",
      bgColor: "bg-orange-100",
      features: [
        "Unlimited courses",
        "Up to 1,000 students",
        "Automation tools",
        "certificates",
        "Priority support",
      ],
    },
    {
      id: 3,
      name: "ACADEMY",
      description:
        "For teams and schools that scale training delivery with full support and powerful admin features.",
      price: "99.99",
      bgColor: "bg-cyan-100",
      features: [
        "Unlimited courses",
        "Unlimited students",
        "Team accounts",
        "Onboarding",
        "Custom domain",
      ],
    },
  ];

  return (
    <div className=" py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${plan.bgColor} p-8 rounded-lg border-4 border-black transition-all duration-300 hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1`}
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              <h2 className="text-4xl font-black mb-3">{plan.name}</h2>
              <p className="text-base mb-8 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-black">{plan.price}€</span>
                <span className="text-xl font-semibold"> / MO</span>
              </div>

              <div className="mb-8">
                <p className="font-black text-sm mb-4">INCLUDES:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-base flex items-start">
                      <span className="text-xl mr-3">✱</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/register"
                className="block w-full bg-yellow-300 text-black font-bold py-4 rounded-lg text-base text-center border-3 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
                style={{
                  border: "3px solid #000",
                  boxShadow: "4px 4px 0px 0px #000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "2px 2px 0px 0px #000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px #000";
                }}
              >
                Start for free
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
