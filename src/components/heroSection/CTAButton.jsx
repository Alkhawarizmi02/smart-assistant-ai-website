const CTAButton = ({ text, href, isPrimary }) => (
    <button className={`${isPrimary ? 'bg-primary text-accent' : 'border-2 border-primary text-primary'} p-3 rounded-2xl shadow-md hover:scale-95 transition`}>
      <a href={href} className={`flex justify-center items-center gap-2 text-base font-semibold ${isPrimary ? 'text-accent' : 'text-primary'}`}>
        {text}
        {isPrimary && (
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[22px] max-sm:w-5 transition" viewBox="0 0 512 512">
            <path fill="none" stroke="#FFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="56" d="M268 112l144 144-144 144M392 256H100"/>
        </svg>
        )}
      </a>
    </button>
  );
  
  export default CTAButton