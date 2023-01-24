import "./Description.css";


function Description({tour}:any): JSX.Element {
    return (
        <div className="Description">
            {tour.rules}
        </div>
    );
}

export default Description;
