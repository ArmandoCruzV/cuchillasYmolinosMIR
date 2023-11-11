import './style.css';

function Videos(){ 

    return(
        <div className="videos">
           
            <div className='contain-h1'><h1 className="videos-h1">Videos</h1></div>

            <div className="videos-container">
                <div className='container-videos--section2'>
                <iframe className="video" src="https://cuchillasymolinosmir.com/wp-content/uploads/2022/11/MIR-29-11-22.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className="video" src="https://cuchillasymolinosmir.com/wp-content/uploads/2022/12/VID.-MOLNOS-VARIOS-GDES..mp4" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className="video" src="https://cuchillasymolinosmir.com/wp-content/uploads/2022/11/mir-29-11-22-1.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className="video" src="https://www.youtube.com/embed/gcwM3nUJypg" title="SEPARADOR DE FINOS 5 HP MIR" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div> 
        </div>
    )
}

export { Videos };