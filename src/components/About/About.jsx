 import logo from '../assets/logo1.jpg'


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src= {logo}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Obligate Solutions
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Obligate Solutions is committed to delivering high-quality software solutions that drive customer satisfaction and business success. 
                        With a focus on innovation, reliability, and continuous improvement, we provide tailored digital solutions that meet evolving industry needs.

                        </p>
                        <p className="mt-4 text-gray-600">
                        Our customer-first approach and technical expertise make us a trusted partner in your digital journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}