import React from "react";

const HowWeServe = () => {
    const steps = [
        {
            title: "Cooking With Care",
            description:
                "Its the perfect dining experience where Experience quick and efficient",
            isActive: false,
        },
        {
            title: "QUICKLY DELIVERY",
            description:
                "Its the perfect dining experience where Experience quick and efficient",
            isActive: true,
        },
        {
            title: "CHOOSE FOOD",
            description:
                "Its the perfect dining experience where Experience quick and efficient",
            isActive: false,
        },
    ];

    return (
        <section className="py-20 bg-[#FEF9F2]">
            <div className="container mx-auto px-4 xs:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h4 className="text-[#00A859] font-bold text-xs uppercase tracking-widest mb-3">
                        Food Processing
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
                        How We Serve You?
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-300 -z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <div
                                    className={`
                    w-full max-w-sm px-8 py-12 rounded-xl transition-all duration-300
                    ${
                        step.isActive
                            ? "bg-white shadow-xl border border-gray-100 scale-105"
                            : "bg-transparent"
                    }
                  `}
                                >
                                    <h3
                                        className={`text-xl font-black mb-4 uppercase ${
                                            step.isActive
                                                ? "text-[#1A1A1A]"
                                                : "text-[#222]"
                                        }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeServe;
