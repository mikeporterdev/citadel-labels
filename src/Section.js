import {Paint} from "./Paint";

export function Section(props) {

    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none'

    }

    return (
        <div>
            <h2>{props.sectionName}</h2>
            <ul style={style}>
            {
                props.paints.map(paint => {
                    return (<Paint key={paint.name}  paint={paint} sectionName={props.sectionName}/>)
                })
            }
            </ul>
        </div>
    )
}
