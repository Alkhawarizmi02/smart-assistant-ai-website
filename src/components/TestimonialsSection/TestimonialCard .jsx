function TestimonialCard({ name, username, text, avatar }) {
    return (
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col items-start gap-4">

            <div className="flex gap-4">
                <img
                    src={avatar}
                    alt={`${name}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-500">@{username}</p>
                </div>
            </div>
            <p className="mt-3 text-gray-700">{text}</p>
        </div>
    );
}

export default TestimonialCard;
