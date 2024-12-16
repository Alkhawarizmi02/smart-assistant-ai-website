const LoginButton = () => (
    <button className="group bg-primary p-2.5 border-2 border-primary rounded-2xl hover:scale-105 transition">
      <a href="#" className="flex justify-center items-center gap-2 text-base text-white font-semibold">
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon w-[18px] group-hover:translate-x-0.5 transition"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="56"
            d="M268 112l144 144-144 144M392 256H100"
          />
        </svg>
      </a>
    </button>
  );
  
  export default LoginButton