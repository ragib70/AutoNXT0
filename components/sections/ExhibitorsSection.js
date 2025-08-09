'use client';

import Image from 'next/image';

const ExhibitorsSection = () => {
    const brands = ["Mahindra", "Maruti Suzuki", "Tata", "Tesla", "BYD", "Ford", "Toyota", "Honda", "Hyundai", "Kia", "Hero MotoCorp", "Volvo"];
    return (
        <section id="exhibitors" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Exhibitors</h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Meet the industry leaders and see their latest creations, from luxury sedans to groundbreaking EVs.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {brands.map(brand => (
                        <div key={brand} className="bg-gray-800 p-6 rounded-xl flex justify-center items-center h-32 transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                            <img 
                                src={`https://logo.clearbit.com/${brand.toLowerCase().replace(' ', '')}.com`} 
                                alt={`${brand} Logo`}
                                className="max-h-12 w-auto"
                                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/120x40/1F2937/FFFFFF?text=${brand}&font=lato`; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExhibitorsSection;
