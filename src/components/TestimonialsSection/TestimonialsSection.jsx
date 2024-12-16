import TestimonialCard from "./TestimonialCard ";

function TestimonialsSection() {
    const testimonials = [
        {
            name: "Hikmet Atçeken",
            username: "hiatceken",
            text: "SmartAssistant AI has transformed the way we manage tasks, making every day more productive and less stressful!",
            avatar: "/src/assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
        },
        {
            name: "Arda Guler",
            username: "ardaguler_x",
            text: "With SmartAssistant AI, prioritizing tasks and meeting deadlines has never been easier. It's an absolute must-have!",
            avatar: "/src/assets/zhanarys-dakhiyev-WMlRkqt1vII-unsplash.jpg",
        },
        {
            name: "Maria Ancelotti",
            username: "maria_ancelotti",
            text: "SmartAssistant AI takes the chaos out of daily planning. It’s like having a personal assistant available 24/7!",
            avatar: "/src/assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
        },
        {
            name: "Ragip Diler",
            username: "rgdiler",
            text: "Thanks to SmartAssistant AI, I can focus on what truly matters while it handles my scheduling and tasks seamlessly!",
            avatar: "/src/assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
        },
        {
            name: "Jenny Wilson",
            username: "wilson_jenny19",
            text: "SmartAssistant AI is intuitive, efficient, and a game-changer for professionals juggling multiple responsibilities.",
            avatar: "/src/assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
        },
        {
            name: "Guy Hawkins",
            username: "ghawkins",
            text: "SmartAssistant AI helps me stay organized and productive, no matter how hectic my day gets. Highly recommend it!",
            avatar: "/src/assets/zhanarys-dakhiyev-WMlRkqt1vII-unsplash.jpg",
        },
    ];
    

    return (
        <section className="py-24 px-6 bg-gradient-to-br from-testimonialBg to-gray-100">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl font-medium md:text-3xl md:font-semibold lg:text-4xl text-gray-800 mb-2">
                What Our Users Are Saying
                </h2>
                <p className="max-w-xl m-auto text-gray-600 mb-12">
                Don't just take our word for it—hear from professionals who have transformed their productivity with SmartAssistant AI.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl m-auto">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        username={testimonial.username}
                        text={testimonial.text}
                        avatar={testimonial.avatar}
                    />
                ))}
            </div>
        </section>
    );
}

export default TestimonialsSection;
