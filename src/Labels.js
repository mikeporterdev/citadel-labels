import {Section} from "./Section";

export function Labels(props) {
    const sections = Object.keys(props.data);

    return (
        <div className="section-container">
                {sections.map(sectionName => {
                    return <Section key={sectionName} sectionName={sectionName} paints={props.data[sectionName]}/>
                })}
        </div>
    );
}
