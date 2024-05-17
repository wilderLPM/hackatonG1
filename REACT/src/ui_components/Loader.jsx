import "../ui_components/Loader.css";

export default function Loader({isLoading, destination, currentIndex, images}){

    return(
        <div className="loadersContainer">
          {isLoading === true ?
          (destination !== "Chamonix" &&
          destination !== "Grenoble" ? (
            <div className={destination} />
          ) : destination === "Chamonix" ? (
            <section className="circle">
              <div className="lake">
                <div></div>
              </div>
              <div className="clouds">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="mountain">
                <div></div>
              </div>
              <div className="mountain">
                <div></div>
              </div>
            </section>
          ) : (
            <img src={images[currentIndex]} alt="tree" />
          )) : null}
      </div>
    );
}