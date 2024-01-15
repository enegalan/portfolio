import DeveloperSVG from "./DeveloperSVG";

export default function Header () {

    return (
        <header>
            <div>
                <h1>
                    <span>Hey! I'm Eneko Galan</span>
                    <p>DevOps <b>{"<"}Web Developer{" />"}</b></p>
                </h1>
                <p>Hello! I am a dedicated individual with a passion for new technologies. My experience covers several areas of the technology sector, meeting all the needs of an application throughout its life cycle, from development to deployment.</p>
            </div>
            <div>
            <DeveloperSVG />
            </div>
        </header>
    );
}