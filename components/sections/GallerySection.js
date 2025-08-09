'use client';

const GallerySection = () => {
    const images = [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542282088-fe84a45a4da8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617531322474-6a8533a130a2?q=80&w=1964&auto=format&fit=crop",
    ];

    return (
        <section id="gallery" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                 <h2 className="text-4xl font-bold text-white mb-12 text-center">Glimpses from the Expo</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl">
                            <img src={src} alt={`Auto Expo Gallery Image ${index + 1}`} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};

export default GallerySection;
