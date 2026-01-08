import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../constants';

const LocationMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-4 border-t border-b border-gray-100 relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap">
            {/* Double the list to create infinite loop effect */}
            {[...LOCATIONS, ...LOCATIONS].map((loc, idx) => (
                <Link 
                    key={`${loc.slug}-${idx}`}
                    to={`/${loc.type}/${loc.slug}`}
                    className="inline-block px-6 py-2 mx-2 bg-gray-50 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
                >
                    {loc.name}
                </Link>
            ))}
        </div>
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 60s linear infinite;
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
        `}</style>
    </div>
  );
};

export default LocationMarquee;