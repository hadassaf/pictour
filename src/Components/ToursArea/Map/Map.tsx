import "./Map.css";

function Map({map}:any): JSX.Element {
    const map1=map
    
    return (
        <div className="Map">
            <iframe title="i" src={map1}></iframe>
            
			
        </div>
    );
}

export default Map;
