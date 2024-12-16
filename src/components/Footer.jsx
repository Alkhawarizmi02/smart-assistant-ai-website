function Footer() {
    return (
        <footer className="w-full bg-[#1A1D1F] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-secondary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Features</h3>
            <ul className="space-y-2">
              {[
                'Smart Scheduling',
                'Task Prioritization',
                'Email Integration',
                'Voice Commands',
                'Analytics'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-secondary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Stay Updated</h3>
            <p className="mb-4 text-sm text-gray-400">Subscribe to our newsletter for the latest updates and features.</p>
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="mr-2 h-4 w-4 -rotate-45 group-hover:rotate-1 transition">
                  <path d="m21.916,8.727L3.965.282C2.951-.211,1.756-.041.917.713.076,1.47-.216,2.646.172,3.708c.017.043,4.411,8.296,4.411,8.296,0,0-4.313,8.251-4.328,8.293-.387,1.063-.092,2.237.749,2.993.521.467,1.179.708,1.841.708.409,0,.819-.092,1.201-.279l17.872-8.438c1.285-.603,2.083-1.859,2.082-3.278,0-1.42-.801-2.675-2.084-3.275ZM2.032,2.967c-.122-.415.138-.69.223-.768.089-.079.414-.324.838-.116.005.002,17.974,8.455,17.974,8.455.239.112.438.27.591.462H6.315L2.032,2.967Zm19.034,10.504L3.178,21.917c-.425.209-.749-.035-.838-.116-.086-.076-.346-.353-.223-.769l4.202-8.032h15.345c-.153.195-.355.357-.597.471Z"/>
                </svg>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SmartAssistant AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {[
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>, href: "#" },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, href: "#" },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, href: "#" },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 transition-colors hover:text-[#86E3CE]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <a href="#" className="text-sm text-gray-400 hover:text-secondary">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-secondary">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer