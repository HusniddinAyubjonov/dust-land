import "./decide.css";

export const Decide = () => {
  return (
    <section className="decide-container" id="features">
      <h2 className="decide-header-title">FEATURES</h2>

      <div className="decide-content-wrapper">
        <div className="decide-image-box">
          <img src="map.png" alt="Gas Station Map" className="map-img" />
        </div>

        <div className="decide-text-box">
          <h3>
            DECIDE ON <br />
            <span className="orange-text">THE WAYS</span>
          </h3>
          <p>
            TO ACHIEVE YOUR MISSION GOAL. BUT BE ON YOUR GUARD, AS THE SHORTEST
            PATH ISN'T ALWAYS THE EASIEST... WILL YOU DARE?
          </p>
          <div className="decide-arrow">
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
