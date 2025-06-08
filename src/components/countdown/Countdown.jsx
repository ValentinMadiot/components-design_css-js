import { useEffect, useState } from "react";
import "./countdown.css";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const weekdays = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    jours: "00",
    heures: "00",
    minutes: "00",
    secondes: "00",
  });
  const [expired, setExpired] = useState(false);
  const [endMessage, setEndMessage] = useState("");

  useEffect(() => {
    const tempDate = new Date();
    const futureDate = new Date(
      tempDate.getFullYear(),
      tempDate.getMonth(),
      tempDate.getDate() + 10,
      11,
      30,
      0
    );

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    const month = months[futureDate.getMonth()];
    const date = futureDate.getDate();
    const weekday = weekdays[futureDate.getDay()];

    setEndMessage(
      `Le concours se termine le ${weekday} ${date} ${month} ${year} à ${hours}h${minutes}`
    );

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const t = futureDate.getTime() - now;

      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;

      let days = Math.floor(t / oneDay);
      let hours = Math.floor((t % oneDay) / oneHour);
      let minutes = Math.floor((t % oneHour) / oneMinute);
      let seconds = Math.floor((t % oneMinute) / 1000);

      const format = (item) => (item < 10 ? `0${item}` : item);

      if (t < 0) {
        clearInterval(countdown);
        setExpired(true);
      } else {
        setTimeLeft({
          jours: format(days),
          heures: format(hours),
          minutes: format(minutes),
          secondes: format(seconds),
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section className="countdown__section">
      <article className="countdown__info">
        <h4 className="countdown__giveaway">
          {expired ? "Désolé, ce concours est expiré." : endMessage}
        </h4>
        {!expired && (
          <div className="countdown__deadline">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div className="countdown__deadline-format" key={label}>
                <div>
                  <h4>{value}</h4>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default Countdown;
