import { Link } from 'react-router-dom';

export default function LandingPage() {

  const handleClick = () => {
    
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-6xl py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-200 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <div className="w-full flex flex-row justify-center lg:justify-start items-center gap-2 mb-8">
              <img
                alt="Urius"
                src="assets/urius-logo.png"
                className="h-[48px] w-[48px]"
              />
              <h2 className="text-2xl font-semibold font-mono tracking-wider">
                URIUS
              </h2>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Revolutionize Your Workflow with
              <br />
              Real-Time Collaboration.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Work together effortlessly with our integrated text and code
              editor platform. Boost productivity with live collaboration and
              seamless coding.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/auth/sign-up"
                className="rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link
                to="/auth/sign-in"
                className="text-sm font-semibold leading-6 text-slate-700"
              >
                Continue <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 w-full">
            <img
              alt="App screenshot"
              src="assets/urius.png"
              width={624}
              height={564}
              className="absolute center left-0 top-0 right-0 w-[1049px] h-[604px] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
