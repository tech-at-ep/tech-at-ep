/**
 * Represents the page header for the home page
 * @param heading - Large, primary text
 * @param subheading - Smaller, supplementary text
 * @param buttonLabel - the text label of the CTA button
 * @param buttonLink - the link for the CTA
 */
export default function PageHeader({heading, subheading, buttonLabel, buttonLink}) {
    return <div className="w-full bg-red-800 py-20 md:py-36 relative overflow-hidden z-40">
        <svg className="absolute top-0 opacity-25 -mt-12" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
             width="100%" id="blobSvg">
            <path id="blob"
                  d="M396,317.5Q328,385,231,418Q134,451,105,350.5Q76,250,115.5,167.5Q155,85,257.5,72.5Q360,60,412,155Q464,250,396,317.5Z"
                  fill={"#d7291e"}/>
        </svg>
        <svg className="absolute bottom-0 opacity-50" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
             width="150%" id="blobSvg">
            <path id="blob"
                  d="M441.5,325.5Q430,401,356.5,419.5Q283,438,209.5,442.5Q136,447,114,377.5Q92,308,61,239Q30,170,85.5,116Q141,62,216,40.5Q291,19,336.5,79Q382,139,417.5,194.5Q453,250,441.5,325.5Z"
                  fill={"#4d0f0b"}/>
        </svg>

        <div className="max-w-screen-xl mx-auto px-4 z-50 relative">
            <h1 className="text-4xl sm:text-6xl font-display leading-none font-bold tracking-tight text-white mt-10 mb-8 sm:mt-14">
                {heading}
            </h1>
            <p className="text-white max-w-4xl text-lg sm:text-2xl sm:leading-tight font-light mb-10 sm:mb-11">
                {subheading}
            </p>
            <a href={buttonLink}
               className="w-full sm:w-auto flex-none bg-white hover:opacity-75 text-red-800 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white focus:outline-none transition-colors duration-200">
                {buttonLabel}
            </a>
        </div>
    </div>
}