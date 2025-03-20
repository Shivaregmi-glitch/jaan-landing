import Image from "next/image"
import { Heart, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-pink-200 opacity-40"></div>
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-blue-200 opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-10 h-10 rounded-full bg-yellow-200 opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-purple-200 opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 rounded-full bg-pink-200 opacity-40"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 px-4 md:px-8 lg:px-16 flex flex-col items-center">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-6 md:p-8 transform transition-transform hover:scale-[1.01] duration-300">
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl overflow-hidden mb-6 border-4 border-pink-200">
            <Image
              src="/jaan-poster.jpg?height=350&width=1000"
              alt="Jaan: Life Movie Poster"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-3 tracking-wide">Jaan: Life</h1>
            <p className="text-lg md:text-xl text-purple-700 italic max-w-2xl mx-auto">
              &quot;Where love writes the melody of destiny...&quot;
            </p>
          </div>
        </div>

        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
          <Heart className="h-10 w-10 text-pink-400 animate-pulse" />
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 flex justify-center">
        <div className="w-full max-w-4xl bg-blue-50 rounded-3xl shadow-md p-6 md:p-8 border-2 border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4 text-center">Our Story</h2>
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-inner">
            <p className="text-gray-700 leading-relaxed text-center md:text-lg">
              Experience a heartwarming journey where dreams, love, and destiny intertwine. Follow the rising star,
              Ritesh, whose life takes an unexpected turn when fate brings him together with the enchanting Rashmi.
              Their bond, filled with hope and bittersweet moments, will leave you breathless.
            </p>
          </div>
        </div>
      </section>

      {/* Cast Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-500 mb-8 text-center">Meet Our Cast</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-pink-100 rounded-3xl p-5 shadow-md transform transition-transform hover:scale-[1.03] duration-300 flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 mb-4">
              <Image src="/ritesh.jpg?height=160&width=160" alt="Ritesh" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-pink-600 mb-1">Ritesh</h3>
            <p className="text-gray-600 text-center">Lead Actor, the singer</p>
          </div>

          <div className="bg-purple-100 rounded-3xl p-5 shadow-md transform transition-transform hover:scale-[1.03] duration-300 flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-300 mb-4">
              <Image src="/rashmi.jpeg?height=160&width=160" alt="Rashmi" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-purple-600 mb-1">Rashmi</h3>
            <p className="text-gray-600 text-center">Lead Actress, the love interest</p>
          </div>
        </div>
      </section>

      {/* Crew Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-50 to-pink-50">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-8 text-center">The Amazing Crew</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Sita Bhandari",
              image: "sita-bhandari.jpg",
              role: "Producer",
              review: "A visionary who brings passion and precision to every project.",
              color: "blue",
            },
            {
              name: "Prakash Dhakal",
              image: "prakash-dhakal.jpg",
              role: "Director of Photography (DOP)",
              review: "Masterful with the camera, turning every scene into a visual masterpiece.",
              color: "green",
            },
            {
              name: "Dipu THAPA",
              image: "dipu-thapa.jpeg",
              role: "Editor",
              review: "Expert in weaving together moments into a seamless, captivating narrative.",
              color: "yellow",
            },
            {
              name: "Prakash Lama",
              image: "prakash-lama.jpg",
              role: "Writer & Director",
              review: "An inspiring storyteller whose direction and writing breathe life into the film.",
              color: "purple",
            },
          ].map((person, index) => (
            <div
              key={index}
              className={`bg-${person.color}-50 rounded-3xl p-5 shadow-md transform transition-all hover:scale-[1.05] duration-300 flex flex-col items-center`}
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-pink-200 mb-4">
                <Image src={`/${person.image}`} alt={person.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-pink-600 mb-1 text-center">{person.name}</h3>
              <p className="text-gray-600 text-sm mb-3 text-center">{person.role}</p>

              <div className="bg-white rounded-2xl p-3 shadow-inner w-full">
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                </div>
                <p className="text-gray-700 text-sm italic">&quot;{person.review}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Jaan: Life. All rights reserved.</p>
      </footer>
    </div>
  )
}
