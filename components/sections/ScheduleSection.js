'use client';

const ScheduleSection = () => {
    const events = [
        { day: 'Day 1', date: 'Aug 18', title: 'Industry & Press Day', description: 'Exclusive previews, product launches, and keynote speeches from industry pioneers.', time: '9:00 AM - 5:00 PM' },
        { day: 'Day 2', date: 'Aug 19', title: 'Public Opening & EV Showcase', description: 'Doors open to the public. Special focus on the latest in electric vehicle technology and test drives.', time: '9:00 AM - 5:00 PM' },
        { day: 'Day 3', date: 'Aug 20', title: 'Classic Cars & Family Day', description: 'A celebration of automotive history with a stunning display of classic cars. Fun activities for all ages.', time: '9:00 AM - 5:00 PM' },
    ];

    return (
        <section id="schedule" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-20 text-center">Event Schedule</h2>
                <div className="relative">
                    {/* The timeline line */}
                    <div className="absolute h-full w-0.5 bg-gray-700 top-0 left-6 md:left-1/2 md:-translate-x-px"></div>

                    {events.map((event, index) => (
                        <div key={event.day} className="relative mb-16">
                            {/* The circle on the timeline */}
                            <div className="absolute bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center font-bold text-white border-4 border-black z-10 top-0 left-6 -translate-x-1/2 md:left-1/2 whitespace-nowrap">
                                {event.date}
                            </div>

                            {/* The content card */}
                            <div className={`
                                w-full pl-20 pt-1
                                md:w-1/2 
                                ${index % 2 === 0 ? 'md:pl-0 md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}
                            `}>
                                <h3 className="text-2xl font-bold text-blue-400 mb-2">{event.day}: <span className="text-white">{event.title}</span></h3>
                                <p className="text-gray-400 mb-2">{event.description}</p>
                                <p className="text-sm text-gray-500 font-mono">{event.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
