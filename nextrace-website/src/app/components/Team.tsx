const people = [
  {
    name: 'Charles Dunlap',
    role: 'Software Engineer',
    imageUrl:
      '/charlesProfile.jpeg',
      githubUrl: 'https://github.com/CharlesAndrewDunlap',
    linkedinUrl: 'https://www.linkedin.com/in/charles-andrew-dunlap/',
  },
  {
    name: 'Connor Keyes',
    role: 'Software Engineer',
    imageUrl:
      '/connorProfile.jpeg',
      githubUrl: 'https://github.com/connorkeyes',
    linkedinUrl: 'https://www.linkedin.com/in/connor-keyes/',
  },
  {
    name: 'Simon Lin',
    role: 'Software Engineer',
    imageUrl: '/simonProfile.jpeg',
      githubUrl: 'https://github.com/kedjek',
    linkedinUrl: 'https://www.linkedin.com/in/simon-lin-80995896/',
  },
  {
    name: 'Jose Velasco',
    role: 'Software Engineer',
    imageUrl:
      '/joseProfile.jpeg',
      githubUrl: 'https://github.com/JoseAVelasco',
    linkedinUrl: 'https://www.linkedin.com/in/josealejandrovelasco/',
  },
]

export default function Team() {
  return (
    <div className="bg-gray-900 py-12">
      
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
          
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-40 w-40 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-white">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a target="_blank" href={person.githubUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Github</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <svg className="h-5 w-5" aria-hidden="true" fill="white" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.24-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.23 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.07.08-2.23 0 0 .71-.23 2.33.87.68-.19 1.4-.28 2.12-.28s1.44.09 2.12.28c1.62-1.11 2.33-.87 2.33-.87.44 1.16.16 2.03.08 2.23.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.92-.01 2.19 0 .21.15.46.55.38A8.001 8.001 0 008 0z"
                      />
                  </svg>

                    </svg>
                    
                  </a>
                </li>
                <li>
                  <a target="_blank" href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="white" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  )
}
