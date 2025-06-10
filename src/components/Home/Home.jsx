import {Link} from 'react-router-dom';
import course01 from '../assets/course01.webp'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-gray-200">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 ">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 ">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto ">
                        <h2 className="text-white text-4xl font-bold sm:text-4xl">
                            Engineering Mathematics
                            {/* <span className="hidden sm:block text-2xl">Core Concepts and Techniques</span> */}
                            <span className="hidden sm:block text-xl">Essential math tools for engineering problem-solving.</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 "
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Book a Free Trial
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-98 px-1 " src={course01} alt="image1" />
                </div>
            </aside>

            <section className="px-60 py-12 bg-white text-black bg-gray-300 border rounded-lg ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Section 1: What You’ll Learn */}
                    <div>
                    <h2 className="text-3xl font-bold mb-6">What You’ll Learn</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios/50/000000/math.png" className="w-6 h-6" alt="icon" />
                        <span>Linear Algebra and Calculus</span>
                        </li>
                        <li className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios/50/000000/graph.png" className="w-6 h-6" alt="icon" />
                        <span>Probability & Statistics</span>
                        </li>
                        <li className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios/50/000000/engineering.png" className="w-6 h-6" alt="icon" />
                        <span>Differential Equations</span>
                        </li>
                        <li className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios/50/000000/data-configuration.png" className="w-6 h-6" alt="icon" />
                        <span>Transforms & Fourier Series</span>
                        </li>
                        <li className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios/50/000000/engineering.png" className="w-6 h-6" alt="icon" />
                        <span>Complex Numbers & Integration</span>
                        </li>
                    </ul>
                    </div>

                    {/* Section 2: Why Choose Us */}
                    <div>
                    <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                    <div className="space-y-2">
                        <div className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios-filled/50/000000/teacher.png" className="w-6 h-6" alt="icon" />
                        <div>
                            <p className="font-semibold">1-on-1 Live Sessions</p>
                            <p className="text-sm text-gray-600">Personal guidance tailored to your learning speed.</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png" className="w-6 h-6" alt="icon" />
                        <div>
                            <p className="font-semibold">24/7 AI Doubt Support</p>
                            <p className="text-sm text-gray-600">Instant doubt resolution any time, anywhere.</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios-filled/50/000000/path.png" className="w-6 h-6" alt="icon" />
                        <div>
                            <p className="font-semibold">Personalized Learning Path</p>
                            <p className="text-sm text-gray-600">Courses adapted to your strengths and goals.</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-4">
                        <img src="https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png" className="w-6 h-6" alt="icon" />
                        <div>
                            <p className="font-semibold">Weekly Progress Reports</p>
                            <p className="text-sm text-gray-600">Track growth with detailed weekly summaries.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

                <hr className="border-t-2 border-gray-300 my-6" />
                <section className="w-full px-10 py-1 bg-gray-300 text-black">
                    <div className="mx-auto w-full">
                        <h2 className="text-3xl font-bold mb-10 text-center">
                        How It Works
                        </h2>
                        <div className="relative border-l-4 border-blue-500 pl-6 pr-4 space-y-10">

                        {/* Step 1 */}
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold ">1</span>
                            <h3 className="text-xl font-semibold">Book a Free Trial</h3>
                            <p className="text-gray-600 text-sm">Get started with a no-obligation trial to experience our personalized teaching style, interactive content, and expert guidance—risk-free and commitment-free.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">2</span>
                            <h3 className="text-xl font-semibold">Choose Your Mentor</h3>
                            <p className="text-gray-600 text-sm">Select a mentor who aligns with your learning pace, academic goals, and personal preferences to ensure a fully customized and effective learning journey.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">3</span>
                            <h3 className="text-xl font-semibold">Attend Live 1-on-1 Classes</h3>
                            <p className="text-gray-600 text-sm">Experience personalized learning through real-time interaction, tailored feedback, and one-on-one attention that keeps you engaged and progressing confidently.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">4</span>
                            <h3 className="text-xl font-semibold">Get Doubt Support + Recordings</h3>
                            <p className="text-gray-600 text-sm">Access AI-powered doubt support 24/7 and revisit your class recordings anytime to reinforce concepts and learn at your own pace without missing a thing.</p>
                        </div>

                        {/* Step 5 */}
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">5</span>
                            <h3 className="text-xl font-semibold">Track Progress Every Week</h3>
                            <p className="text-gray-600 text-sm">Stay on top of your academic growth with detailed weekly performance reports that highlight your progress, strengths, and areas for improvement.</p>
                        </div>

                        </div>
                    </div>
                </section>
                <hr className="border-t-2 border-gray-300 my-6" />
            </section>

            <section className="w-full px-6 py-6 bg-white text-black">
                {/* Section Testimonials */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
                    
                    <div className="space-y-8">
                    {/* Testimonial 1 */}
                    <div className="p-6 border rounded-lg shadow-md bg-gray-50">
                        <div className="text-lg font-semibold">John Doe <span className="text-sm text-gray-500 ml-2">🇺🇸 USA</span></div>
                        <p className="text-gray-600 mt-2 italic">
                        “The one-on-one sessions really helped me grasp concepts I struggled with in school. Loved the flexibility!”
                        </p>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="p-6 border rounded-lg shadow-md bg-gray-50">
                        <div className="text-lg font-semibold">Ananya Singh <span className="text-sm text-gray-500 ml-2">🇮🇳 India</span></div>
                        <p className="text-gray-600 mt-2 italic">
                        “The weekly reports and personalized guidance made a huge difference in my learning journey.”
                        </p>
                    </div>
                    </div>
                </div>

                {/* Section Pricing Plans */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Plan 1 */}
                    <div className="border rounded-lg p-6 shadow-md bg-gray-50">
                        <h3 className="text-xl font-semibold mb-2">3-Month Plan</h3>
                        <p className="text-blue-600 text-2xl font-bold mb-2">$15/hr</p>
                        <ul className="text-sm text-gray-700 list-disc ml-4">
                        <li>Live 1-on-1 Classes</li>
                        <li>Weekly Reports</li>
                        <li>Access to Recordings</li>
                        </ul>
                    </div>
                    {/* Plan 2 */}
                    <div className="border rounded-lg p-6 shadow-md bg-blue-50 border-blue-500">
                        <h3 className="text-xl font-semibold mb-2">6-Month Plan</h3>
                        <p className="text-blue-600 text-2xl font-bold mb-2">$13/hr</p>
                        <ul className="text-sm text-gray-700 list-disc ml-4">
                        <li>Everything in 3-Month Plan</li>
                        <li>Priority Mentor Selection</li>
                        <li>Exclusive AI Tools</li>
                        </ul>
                    </div>
                    {/* Plan 3 */}
                    <div className="border rounded-lg p-6 shadow-md bg-gray-50">
                        <h3 className="text-xl font-semibold mb-2">12-Month Plan</h3>
                        <p className="text-blue-600 text-2xl font-bold mb-2">$11/hr</p>
                        <ul className="text-sm text-gray-700 list-disc ml-4">
                        <li>Everything in 6-Month Plan</li>
                        <li>Dedicated Academic Coach</li>
                        <li>Performance Reviews</li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* Section  Call to Action */}
                <div className="max-w-4xl mx-auto text-center py-12 bg-blue-50 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-gray-700 mb-6">Talk to a counsellor or try a class for free today!</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Talk to a Counsellor</button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Book a Free Trial</button>
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900">Chat with AI Mentor</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
