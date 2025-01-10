import ButtonCheckout from "./ButtonCheckout";

const Pricing = () => {
  // Hardcoded pricing plans
  const plans = [
    {
      priceId: "price_1",
      name: "Starter",
      description: "A perfect plan for beginners to start investing.",
      price: "0 - 3000",
      isFeatured: false,
      features: [
        { name: "Access to basic trading tools" },
        { name: "Monthly performance report" },
        { name: "Secure fund management" },
      ],
    },
    {
      priceId: "price_2",
      name: "Pro",
      description:
        "Ideal for experienced investors looking for higher returns.",
      price: "3000 - 20,000",
      isFeatured: true,
      features: [
        { name: "Advanced trading tools" },
        { name: "Weekly performance updates" },
        { name: "Priority support" },
        { name: "Access to exclusive investment strategies" },
      ],
    },
    {
      priceId: "price_3",
      name: "Elite",
      description: "Designed for high-net-worth individuals and institutions.",
      price: "20,000+",
      isFeatured: false,
      features: [
        { name: "Personalized portfolio management" },
        { name: "Daily performance insights" },
        { name: "Direct contact with trading experts" },
        { name: "Exclusive market analysis" },
      ],
    },
  ];

  return (
    <section className="overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-10xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Levels</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Strategies and Investment Bands
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="badge text-xs text-primary-content font-semibold border-0 bg-primary">
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div className="absolute -inset-[1px] rounded-[9px] bg-primary z-10"></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="text-5xl tracking-tight font-extrabold">
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2 mx-auto">
                  <button className="btn btn-primary btn-wide">
                    Start your Investment Journey
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
