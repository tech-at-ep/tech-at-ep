export default function Card({heading, children}) {
    return <div
        className="w-full mx-auto bg-white p-10 rounded-lg shadow-lg z-40 relative"
        >
        <h2 className="font-bold font-display text-center text-4xl text-gray-700">
            {heading}
        </h2>

        <div className="mt-10">
            {children}
        </div>

    </div>
}