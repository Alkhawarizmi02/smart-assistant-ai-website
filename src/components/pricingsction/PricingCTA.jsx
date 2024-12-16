
function PricingCTA({text, plan}) {
    return (
        <button className={`group w-full flex justify-center items-center gap-1 p-3 text-sm font-semibold border-2 border-secondary ${ plan === 'Pro Plan' ? "bg-secondary text-black" : "bg-transparent hover:text-black hover:bg-secondary transition" } rounded-2xl`}>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 ${ plan === 'Pro Plan' ? "translate-x-1" : "translate-x-0 group-hover:stroke-black group-hover:translate-x-1 transition-transform" } `} viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="56" d="M268 112l144 144-144 144M392 256H100"/>
            </svg>
        </button>
    )
}

export default PricingCTA