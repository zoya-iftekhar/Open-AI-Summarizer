import { logo } from '../assets';
const Hero =() => {
    return(
        <header className="w-full flex justify-center items-center flex-col">
            
            <nav className="flex justify-between items-center w-full mb-10 pt-3" >
                <h1><strong>Swift Insight</strong></h1>
                <button type="button" onClick={ () => window.open('https://www.linkedin.com/in/zoyaiftekhar/')} className="black_btn">
                    Contact Me
                </button>
            </nav>   

            <h1 className = "head_text">
                Summarize your Website with <br 
                className = "max-md:hidden" />
                <span className ="blue_gradient">
                    Swift Insight
                </span>
            </h1>
            <h2 className="desc"> 
            Swift Insight transforms lengthy URLs into concise summaries.<br></br> Effortlessly navigate through the web, swiftly gaining a clear understanding of any content.

            </h2>
        </header>
    )
}

export default Hero