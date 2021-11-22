export default function CourseHighlightCard({title, description, href}) {
    return <div className="p-6 shadow rounded-lg bg-gray-50 text-center hover:bg-blue-50 transition-color duration-150">
        <div className="w-28 h-28 mb-6 rounded-full bg-gray-300 mx-auto"/>
        <h3 className="text-2xl font-semibold text-gray-600 font-display">
            {title}
        </h3>
        <p className="text-gray-400 text-lg mt-2">
            {description}
        </p>
    </div>
}