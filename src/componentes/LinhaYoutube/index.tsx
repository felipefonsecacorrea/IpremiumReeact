import "./style.css"

export default function VideosYoutube(){
    return(
        <>
            <section id="youtubeIphone15">
                <div className="linhaYoutube">
                    <iframe id="iframe1" src="https://www.youtube.com/embed/XHTrLYShBRQ?si=9G2QD_rkhLMMKhKm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                    <iframe id="iframe2" src="https://www.youtube.com/embed/jELeFXNJUOE?si=adci1H7haooxp5ar" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </section>
        </>
    )
}