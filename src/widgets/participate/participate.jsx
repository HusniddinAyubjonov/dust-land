import "./participate.css";

export const Participate = ({ onOpenModal }) => {
  return (
    <section className="participate-container">
      <div className="participate-left">
        <span className="part-subtitle">
          PARTICIPATE IN THE OPEN BETA TEST OF THE
        </span>
        <h2 className="part-title">
          DUST LAND <br />
          <span>GAME</span>
        </h2>
        <p className="part-gift">
          AND GET 1 BATTLE PASS AND A «TESTER» SKIN AS A GIFT!
        </p>

        <div className="info-card">
          <p>
            SPEND THE MOST HOURS IN THE GAME, SHARE YOUR APOCALYPTIC EXPERIENCE
            WITH YOUR FRIENDS VIA SOCIAL MEDIA, USING THE HASHTAG #DUSTLAND AND
            GET A STEAM GIFT CARD!
          </p>
        </div>

        <div className="steam-card-block">
          <p>
            THE FIRST 100 MOST ACTIVE PLAYERS WILL RECEIVE $20 STEAM GIFT CARDS!
          </p>
          <img src="/steam.png" alt="Steam Cards" className="steam-img" />
        </div>

        <button className="register-now-btn" onClick={onOpenModal}>
          REGISTER NOW
        </button>
      </div>

      <div className="participate-right">
        <div className="soldier-bg-glow"></div>
        <img src="/soldier.png" alt="Character" className="soldier-img" />
      </div>
    </section>
  );
};
