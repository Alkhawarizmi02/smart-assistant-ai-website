const CallToAction = () => {
    return (
        <section className=" bg-gradient-to-t from-primary to-[#111826] text-white py-24 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Boost Your Productivity?
            </h2>
            <p className="max-w-xl mb-6 mx-auto text-lg">
                Join thousands of professionals using SmartAssistant AI to optimize their day and simplify their workflow.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="flex justify-center items-center gap-2 bg-secondary text-primary font-semibold py-3 px-6 rounded-2xl hover:scale-95 transition">
                    Get Started for Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-5 max-sm:w-5 stroke-primary transition" viewBox="0 0 512 512">
                        <path fill="none" stroke="cuurentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="56" d="M268 112l144 144-144 144M392 256H100"/>
                    </svg>
                </button>
                <button className="border-2 border-secondary text-white font-semibold py-3 px-6 rounded-2xl hover:scale-95 transition">
                    Learn More
                </button>
            </div>
            <div className="bg-gradient-to-t">
            </div>
        </section>
    );
};

export default CallToAction;
