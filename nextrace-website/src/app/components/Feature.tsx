import {
  BoltIcon
} from '@heroicons/react/20/solid';


const features = [
  {
    name: 'Step 1',
    description: 'Click on NexTrace Logo',
    icon: BoltIcon,
  },
  {
    name: 'Step 2',
    description: 'Click Choose File Button to select entry point to your Next.js application',
    icon: BoltIcon,
  },
  {
    name: 'Step 3',
    description: 'Click Choose Root Button to select your app folder (note: this folder should not be your project folder as it contains node_modules containing a large number of files. Instead select your app folder containing the entry point of your application)',
    icon: BoltIcon,
  },
  {
    name: 'Step 4',
    description: 'Click Start to start tracking your applications network requests',
    icon: BoltIcon,
  },
  {
    name: 'Step 5',
    description: 'Click Logs to display additional panel for your console logs for easy file Navigation',
    icon: BoltIcon,
  },
  {
    name: 'Step 6',
    description: 'When finished, click STOP',
    icon: BoltIcon,
  },
]

export default function Feature2() {
  return (
    <div className="bg-gray-900 py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Metrics Demo</p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis.
          </p> */}
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/demo1.gif"
            alt="App screenshot"
            className="rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
