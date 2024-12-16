function FeaturSection() {

    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h4c.553,0,1-.448,1-1s-.447-1-1-1H5c-1.654,0-3-1.346-3-3V10H23c.553,0,1-.448,1-1v-2c0-2.757-2.243-5-5-5Zm3,6H2v-1c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v1Zm-3.121,4.879l-5.707,5.707c-.756,.755-1.172,1.76-1.172,2.828v1.586c0,.552,.447,1,1,1h1.586c1.068,0,2.073-.417,2.828-1.172l5.707-5.707c.566-.567,.879-1.32,.879-2.122s-.313-1.555-.879-2.121c-1.17-1.17-3.072-1.17-4.242,0Zm2.828,2.828l-5.707,5.707c-.378,.378-.88,.586-1.414,.586h-.586v-.586c0-.526,.214-1.042,.586-1.414l5.707-5.707c.391-.39,1.023-.39,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Z"/></svg>
            ,
            title: "Smart Scheduling", 
            description: "Effortlessly arrange meetings and sync with your calendar for seamless planning."
        },
        {
            icon: <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m4 6a2.982 2.982 0 0 1 -2.122-.879l-1.544-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.604-3.431a1 1 0 0 1 1.378 1.448l-3.589 3.414a2.964 2.964 0 0 1 -2.1.862zm20-2a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.589-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1.023 1.023 0 0 1 -1.414 0l-1.59-1.585a1 1 0 0 0 -1.414 1.414l1.585 1.585a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.585-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1 1 0 0 1 -1.456-.04l-1.585-1.414a1 1 0 0 0 -1.332 1.494l1.544 1.374a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1z"/></svg>,
            title: "Task Prioritization", 
            description: "Automatically prioritize tasks by urgency, deadlines, and estimated time."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m22.459,9.098l-1.459-1.398v-3.7c0-2.206-1.794-4-4-4H7C4.794,0,3,1.794,3,4v3.7l-1.459,1.397c-.979.938-1.541,2.254-1.541,3.61v6.293c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-6.293c0-1.356-.562-2.672-1.541-3.609ZM7,2h10c1.103,0,2,.897,2,2v8.242l-4.879,4.879c-1.133,1.133-3.109,1.133-4.242,0l-4.879-4.879V4c0-1.103.897-2,2-2Zm15,17c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-6.293c0-.195.022-.388.059-.577l6.406,6.406c.943.944,2.199,1.465,3.535,1.465s2.592-.521,3.535-1.465l6.406-6.406c.037.189.059.383.059.577v6.293ZM7.319,9.536c-.404-.376-.428-1.009-.052-1.413.377-.405,1.011-.426,1.413-.052l1.851,1.721c.269.268.666.269.911.024l3.863-3.724c.398-.384,1.031-.371,1.414.025.384.397.372,1.031-.025,1.414l-3.851,3.712c-.504.504-1.171.756-1.839.756-.673,0-1.348-.256-1.861-.768l-1.824-1.696Z"/>
            </svg>,
            title: "Email Drafting & Response Suggestions", 
            description: "Generate email drafts and response ideas to streamline communication."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23,22H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V19a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z"/><path d="M6,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,6,20Z"/><path d="M10,10v9a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"/><path d="M15,13v6a1,1,0,0,0,2,0V13a1,1,0,0,0-2,0Z"/><path d="M20,9V19a1,1,0,0,0,2,0V9a1,1,0,0,0-2,0Z"/><path d="M6,9a1,1,0,0,0,.707-.293l3.586-3.586a1.025,1.025,0,0,1,1.414,0l2.172,2.172a3,3,0,0,0,4.242,0l5.586-5.586A1,1,0,0,0,22.293.293L16.707,5.878a1,1,0,0,1-1.414,0L13.121,3.707a3,3,0,0,0-4.242,0L5.293,7.293A1,1,0,0,0,6,9Z"/></svg>
            ,
            title: "Insights & Analytics", 
            description: "Get daily productivity summaries with personalized improvement tips."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,20a8.009,8.009,0,0,0,8-8V8A8,8,0,0,0,4,8v4A8.009,8.009,0,0,0,12,20ZM12,2a6.006,6.006,0,0,1,5.91,5H15a1,1,0,0,0,0,2h3v2H15a1,1,0,0,0,0,2h2.91A5.993,5.993,0,0,1,6.09,13H9a1,1,0,0,0,0-2H6V9H9A1,1,0,0,0,9,7H6.09A6.006,6.006,0,0,1,12,2Z"/><path d="M23,12a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9H11a9.011,9.011,0,0,1-9-9,1,1,0,0,0-2,0A11.013,11.013,0,0,0,11,24h2A11.013,11.013,0,0,0,24,13,1,1,0,0,0,23,12Z"/></svg>
            ,
            title: "Voice Command Integration", 
            description: "Leverage NLP for intuitive, hands-free task management via voice commands."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m24,12.5c0,2.062-.819,3.984-2.308,5.412-.399.382-1.031.369-1.414-.029-.382-.398-.369-1.031.029-1.414,1.092-1.047,1.692-2.457,1.692-3.969,0-2.614-1.857-4.882-4.417-5.394-.958-.191-1.744-.8-2.158-1.673-1.183-2.494-3.814-3.832-6.568-3.329-2.406.44-4.368,2.439-4.771,4.862-.122.737-.114,1.471.023,2.18.191.989-.178,2.047-.962,2.762-.729.663-1.147,1.606-1.147,2.591,0,1.17.582,2.259,1.557,2.911.459.308.582.929.274,1.388-.193.288-.51.443-.832.443-.191,0-.385-.055-.556-.169-1.53-1.024-2.443-2.734-2.443-4.573,0-1.546.656-3.03,1.801-4.07.272-.248.405-.594.346-.902-.184-.943-.194-1.916-.033-2.889C2.66,3.349,5.226.736,8.497.137c3.59-.658,7.184,1.167,8.734,4.439.141.295.411.502.742.569,3.492.697,6.026,3.79,6.026,7.354Zm-12-.5h-1.086l1.793-1.793c.391-.391.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.75,2.75c-.78.78-.78,2.049,0,2.828l2.75,2.75c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-1.707-1.707h1c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4c0-.271.026-.54.08-.802.109-.541-.241-1.068-.782-1.179-.539-.11-1.068.241-1.179.782-.079.392-.119.795-.119,1.198,0,3.309,2.691,6,6,6s6-2.691,6-6-2.691-6-6-6Z"/>
            </svg>,
            title: "Seamless Cross-Device Syncing", 
            description: "Keep your tasks and data synced in real-time across all your devices."
        }
    ];
    

    return (
        <section className='bg-primary py-24'>

            <div className='max-w-6xl mx-auto px-4 md:px-10 lg:px-0 text-white'>

                <div className='flex flex-col items-center gap-4 mb-8 text-center'>
                    <h2 className='text-2xl font-medium md:text-3xl md:max-w-xl md:font-semibold lg:text-4xl'>Empower Your Workflow with Cutting-Edge Features</h2>
                    <p className='text-sm text-slate-300 sm:text-base sm:max-w-xl lg:text-lg'>From smart scheduling to seamless syncing, explore the tools designed to simplify your day and supercharge your productivity.</p>
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                    {features.map((feature) => (
                        <article key={feature.title} className='group flex flex-col justify-between gap-8 p-4 bg-featureCardBg rounded-2xl hover:scale-[1.01] transition-transform'>
                            <div className='flex justify-between'>
                                    <span className="[&>svg]:w-8 [&>svg]:h-auto [&>svg]:fill-white" >{feature.icon}</span>
                                    <svg className="h-auto w-4 fill-white group-hover:rotate-45 transition-all" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                    <path d="M19.5,0H10.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h8.379L.439,21.439c-.586,.585-.586,1.536,0,2.121,.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439L21,5.121V13.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V4.5c0-2.481-2.019-4.5-4.5-4.5Z"/>
                                    </svg>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                                <p className="text-slate-300">{feature.description}</p>
                            </div>

                        </article>
                    ))
                }
                </div>
            </div>

        </section>
    )
}

export default FeaturSection