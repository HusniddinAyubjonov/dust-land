import { useState } from "react";
import "./about.css";

export const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="about-container" id="game">
      <h2 className="about-main-title">ABOUT GAME</h2>

      <div className="about-text-card">
        <p>
          DUSTLAND IS A THIRD-PERSON LOOTER-SHOOTER. IN THE POST-APOCALYPTIC
          WORLD, EVERYONE HAS THE ONLY GOAL: TO RETURN ALIVE AFTER EXPLORING THE
          WASTELAND WITH AS MANY VALUABLE THINGS AS POSSIBLE. 40 YEARS AGO A
          SCIENTIFIC CATASTROPHE INFLICTED UNTOLD DAMAGE TO THE WORLD. NOW THE
          PLANET IS SUFFERING FROM THE UNBEARABLE BOILING HEAT AND ALL LIVING
          CREATURES HAVE EITHER MUTATED OR LOST THEIR SANITY.
        </p>
      </div>

      <div className="video-block">
        {!isPlaying ? (
          <div className="video-poster" onClick={() => setIsPlaying(true)}>
            <div className="play-icon">▶</div>
          </div>
        ) : (
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/6aZ_W8ehj0s?autoplay=1" // <-- замените на любое видео с Dota 2 / киберспорта
            title="Dustland Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      <div className="about-text-card">
        <p>
          A FEW LUCKY SURVIVORS FOUND SHELTER IN THE UNFINISHED SEED VAULT
          CALLED "YANMEI". THEY HOPE TO GIVE NEW BIRTH TO THE WORLD BY CLEARING
          IT OF MONSTERS AND ANOMALIES. ONE OF THE MOST DANGEROUS WORLD REGIONS
          IS CALLED DUSTLAND. AROUND TWO MILES OF HOSTILE BURNT GROUND.
          FEROCIOUS SANDSTORMS, RECURRENT ANOMALIES AND MYRIADS OF MONSTERS...
          IF MANKIND IS DESTINED TO SURVIVE, PEOPLE CAN'T BUT TAKE UP THE
          CHALLENGE TO CLEAR THIS REGION.
        </p>
      </div>

      <div className="bottom-callout">
        DON'T MISS YOUR CHANCE TO EXPERIENCE THE HEART-PUMPING EXCITEMENT OF
        DUSTLAND. JOIN THE FIGHT FOR SURVIVAL TODAY!
      </div>
    </section>
  );
};
