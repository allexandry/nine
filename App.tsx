import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DollarSignIcon, BarChartIcon, ShieldCheckIcon, ZapIcon, ArrowRightIcon } from './components/Icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg">
    <div className="mx-auto bg-gray-50 h-16 w-16 rounded-full flex items-center justify-center border border-gray-200 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const HowItWorksStep: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="relative pl-12">
      <div className="absolute left-0 top-0 h-12 w-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center text-red-600 font-bold text-xl">
          {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
  </div>
);

const KpiStat: React.FC<{ target: number; label: string; suffix?: string; duration?: number }> = ({ target, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          if (start === end) return;

          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentNum = progress * (end - start) + start;
            
            if (target % 1 !== 0) {
                 setCount(parseFloat(currentNum.toFixed(1)));
            } else {
                 setCount(Math.floor(currentNum));
            }

            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            }
          };
          animationFrameId = window.requestAnimationFrame(step);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
        window.cancelAnimationFrame(animationFrameId);
        observer.disconnect();
    };
  }, [target, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-extrabold text-red-600 tracking-tight tabular-nums">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm sm:text-base text-gray-600">{label}</p>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 selection:bg-red-500/30">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative text-center pt-32 pb-24 sm:pt-48 sm:pb-32 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-grid-light [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
            <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                    Share Your Wi-Fi,
                    <br/>
                    <span className="text-red-600">Start Earning Money.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-8">
                    Turn your internet connection into a passive income stream with NiNe. Secure, simple, and profitable for businesses of all sizes.
                </p>
                <div className="mt-10 flex items-center justify-center gap-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105">
                         Join / Login
                    </button>                   
                </div>
            </div>
        </section>

        {/* Stats KPI Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                     <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Trusted by Businesses Worldwide</h2>
                     <p className="mt-4 text-lg text-gray-600">Our platform is built for reliability and scale. The numbers speak for themselves.</p>
                </div>
                <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                    <KpiStat target={1500} suffix="+" label="Active Merchants" />
                    <KpiStat target={2} suffix="M+" label="Connections Secured" />
                    <KpiStat target={450000} label="Daily Authentications" />
                    <KpiStat target={99.9} suffix="%" label="Service Uptime" />
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Everything You Need to Run a Wi-Fi Hotspot</h2>
              <p className="mt-4 text-lg text-gray-600">NiNe provides a robust, secure, and easy-to-use platform to monetize your existing internet connection without any technical hassle.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard icon={<DollarSignIcon className="h-8 w-8 text-red-500"/>} title="Monetize Your Network">
                    Effortlessly generate revenue by sharing your unused bandwidth. Our platform handles payments so you can focus on your business.
                </FeatureCard>
                <FeatureCard icon={<BarChartIcon className="h-8 w-8 text-red-500"/>} title="Full Control">
                    Set your own prices, time limits, and data caps. Our intuitive dashboard gives you complete authority over your Wi-Fi zone.
                </FeatureCard>
                <FeatureCard icon={<ShieldCheckIcon className="h-8 w-8 text-red-500"/>} title="Bank-Grade Security">
                    Guest traffic is completely isolated from your private network, ensuring your data and devices remain secure and private.
                </FeatureCard>
                <FeatureCard icon={<ZapIcon className="h-8 w-8 text-red-500"/>} title="Plug & Play Setup">
                    Getting started is simple. Our compatible routers are pre-configured for a quick and easy setup. No technical expertise required.
                </FeatureCard>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 sm:py-28 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Get Started in 3 Simple Steps</h2>
                    <p className="mt-4 text-lg text-gray-600">Launch your own paid Wi-Fi service in minutes. We've streamlined the entire process.</p>
                </div>
                <div className="mt-20 max-w-3xl mx-auto flex flex-col gap-16">
                    <HowItWorksStep number="1" title="Create Your Account">
                        Sign up as a NiNe merchant. It’s free to create an account and explore the dashboard.
                    </HowItWorksStep>
                    <HowItWorksStep number="2" title="Connect Your Router">
                        We ship you a pre-configured router. Just plug it into your existing internet connection. It connects to our cloud platform automatically.
                    </HowItWorksStep>
                    <HowItWorksStep number="3" title="Start Earning">
                        Customers connect, choose a plan from your branded portal, and pay. You get paid for every connection. It's that easy.
                    </HowItWorksStep>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="pricing" className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-10 sm:p-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Turn Your Wi-Fi into a Business?</h2>
                    <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">Join hundreds of merchants earning passive income with NiNe.</p>
                    <button className="mt-8 bg-white hover:bg-gray-200 text-red-700 font-bold py-4 px-10 rounded-md transition duration-300 transform hover:scale-105">
                        Sign Up Today <ArrowRightIcon className="inline h-5 w-5 ml-2"/>
                    </button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;