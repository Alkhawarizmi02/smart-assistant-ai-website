import CTAButton from './CTAButton';
import BarChartIcon from '/src/assets/bar-chart-outline 1.svg';
import CalendarIcon from '/src/assets/calendar-number-outline 1.svg';
import FlashIcon from '/src/assets/flash-outline 2.svg';
import MailIcon from '/src/assets/mail-outline 1.svg';
import PieChartIcon from '/src/assets/pie-chart-outline 1.svg';


function HeroSection() {
    return (

    <section className='hero-section'>

        {/* Headline */}
        <h1 className='headline'>Boost Your <span className='text-primary'>Productivity</span> with the Ultimate AI Assistant</h1>
        
        {/* SubHeadline */}
        <p className='sub-headline'>Automate tasks, prioritize your day, and simplify your workflow—all in one place.</p>

        {/* CTA Btns */}
        <div className='mt-8 flex gap-4 max-[330px]:flex-col'>
            <CTAButton text="Get Started" href="#" isPrimary />
            <CTAButton text="See It in Action" href="#" />
        </div>

        {/* Floating Icons */}
        <div>
                <img src={BarChartIcon} className='max-lg:hidden w-24 absolute top-48 left-10 animate-downUp'/>
            <img src={CalendarIcon} className='max-lg:hidden w-22 absolute top-64 right-20 animate-downUp' />
            <img src={FlashIcon} className='max-lg:hidden w-20 absolute bottom-36 right-52 animate-upDown' />
            <img src={MailIcon} className='max-lg:hidden w-22 absolute bottom-32 left-32 animate-downUp' />
            <img src={PieChartIcon} className='max-lg:hidden w-24 absolute top-24 right-96 animate-upDown' />
        </div>
        
    </section>
    )
}

export default HeroSection