'use client';

const ScheduleSection = () => {
    const events = [
        { day: 'Day 1', date: 'Oct 24', title: 'Industry & Press Day', description: 'Exclusive previews, product launches, and keynote speeches from industry pioneers.', time: '9:00 AM - 6:00 PM' },
        { day: 'Day 2', date: 'Oct 25', title: 'Public Opening & EV Showcase', description: 'Doors open to the public. Special focus on the latest in electric vehicle technology and test drives.', time: '10:00 AM - 8:00 PM' },
        { day: 'Day 3', date: 'Oct 26', title: 'Classic Cars & Family Day', description: 'A celebration of automotive history with a stunning display of classic cars. Fun activities for all ages.', time: '10:00 AM - 5:00 PM' },
    ];

    return (
        <section id="schedule" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Event Schedule</h2>
                <div className="relative border-l-2 border-gray-700 ml-6 md:ml-0 md:border-l-0 md:border-t-2 md:w-3/4 md:mx-auto">
                    {events.map((event, index) => (
                        <div key={event.day} className={`mb-12 md:mb-0 relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className="absolute -left-7 md:left-1/2 md:-top-6 md:-translate-x-1/2 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-white border-4 border-black">
                                {event.date}
                            </div>
                            <div className="pl-10 md:pl-0 md:w-1/2 md:px-10 md:pt-10">
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
