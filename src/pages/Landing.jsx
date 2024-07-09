import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <p
                className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                Collaboration Code Editor
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
                Our AI-powered customer service chatbot is an innovative tool that can assist customers 24/7 with their
                inquiries, providing fast and accurate responses.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <Link to="/home" title=""
                    className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                    Create a Room
                </Link>
                <Link to="/"
                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">Join a Room</Link>
            </div>
        </div>
    </div>
    <div className="bg-white">
        <div className="relative mx-auto mt-4 md:mt-8">
            <div className="lg:max-w-4xl lg:mx-auto">
                <img className="px-4 md:mpx-8" src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Landing
