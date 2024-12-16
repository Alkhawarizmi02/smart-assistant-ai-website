import { useState } from "react"
import PricingCTA from "./PricingCTA";

function PricingSection() {

    const [isYearly, setIsYearly] = useState(false);

    const pricingPlans = [
        {
            title: 'Free Plan',
            price: <span>
            {isYearly ? (
                <>
                    $0<span className="text-sm text-slate-300">/year</span>
                </>
            ) : (
                <>
                    $0<span className="text-sm text-slate-300">/month</span>
                </>
            )}
            </span>,
            description: 'Perfect for individuals starting out with basic task management.',
            Features:[
                        'Smart Scheduling (limited to 5 events/month)',
                        'Task Prioritization',
                        'Basic Email Suggestions',
                        'Cross-Device Sync (2 devices)'
            ],
            cta: 'Get Started for Free'
        },
        {
            title: 'Pro Plan',
            price: <span>
            {isYearly ? (
                <>
                    $99<span className="text-sm text-slate-300">/year (Save 17%)</span>
                </>
            ) : (
                <>
                    $9.99<span className="text-sm text-slate-300">/month</span>
                </>
            )}
            </span>,
            description: 'Unlock advanced productivity tools for professionals.',
            Features:[
                'Unlimited Smart Scheduling',
                'Advanced Task Prioritization',
                'Email Drafting & Suggestions',
                'Insights & Analytics',
                'Cross-Device Sync (unlimited devices)',
                'Priority Support'
            ],
            cta: 'Start Pro Today'
        },
        {
            title: 'Enterprise Plan',
            price: 'Custom Pricing',
            description: 'Tailored solutions for teams and organizations.',
            Features:[
                        'All Pro Features',
                        'Team Collaboration Tools',
                        'Admin Dashboard & Insights',
                        'Custom Integrations',
                        'Dedicated Support Team'
            ],
            cta: 'Contact Sales'
        },

    ]


    return (
        <section className='bg-pricingBg py-24'>
            <div className="flex flex-col gap-8 max-w-6xl mx-auto px-4 md:px-10 lg:px-0 text-white">

                <div className="text-center">
                    <h2 className="mb-4 text-2xl font-medium md:text-3xl md:font-semibold lg:text-4xl">Flexible Pricing for Every Need</h2>
                    <p className="m-auto text-sm text-slate-300 sm:text-base sm:max-w-xl lg:text-lg">Whether you&apos;re just getting started or looking to unlock advanced features, we have a plan for you.</p>
                </div>

                <div className="flex gap-2 w-fit m-auto p-1 text-sm border-2 border-primary rounded-2xl">
                    <button onClick={() => {setIsYearly(false)}} className={`p-2 ${isYearly ? 'text-slate-300' : 'bg-primary' } rounded-xl transition-all`}>Monthly</button>
                    <button onClick={() => {setIsYearly(true)}} className={`p-2 ${isYearly ? 'bg-primary' : 'text-slate-300' } rounded-xl transition-all`}>Yearly</button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div key={plan.title} className={`flex flex-col gap-6 p-8 pb-4 bg-planBg border-2 ${plan.title === 'Pro Plan' ? 'border-secondary scale-[1.005]' : 'border-primary hover:scale-[1.005] hover:border-secondary transition'} rounded-2xl `}>
                            <div>
                                <h3 className="mb-2 font-semibold">{plan.title}</h3>
                                <p className="text-sm text-slate-300">{plan.description}</p>
                            </div>
                                <h4 className="text-xl font-bold">{plan.price}</h4>
                                <PricingCTA text={plan.cta} plan={plan.title} />
                                <ul>
                                    {plan.Features.map((featur) => (
                                        <li key={featur} className="mb-3 text-slate-400">
                                            <svg className=" inline mr-2 w-4 h-auto fill-secondary" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                            <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"/>
                                            </svg>
                                            {featur}
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection