import "./portfolio.css";

import IMG1 from "../../assets/Rest api count.png";
import IMG2 from "../../assets/Spotify.webp";
import IMG4 from "../../assets/ebay.jpg";
import IMG5 from "../../assets/Screenshot 2024-06-27 222940.png"
import IMG6 from "../../assets/Screenshot 2024-06-27 223022.png"
import IMG7 from "../../assets/Screenshot 2024-06-27 231630.png"
import IMG8 from "../../assets/Screenshot 2024-07-17 183433.png"
import IMG9 from "../../assets/Screenshot 2024-07-17 183314.png"

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "REST_API_Countries Next.js",
      img: IMG1,
      description:
        "Information About allCountries in the world with dark mode, searc and filter by region by API",
      link: "https://rest-countries-global-bilol.netlify.app/",
      github: "https://github.com/asomjonovbilol/Rest-Countries-Global",
    },
    {
      id: 2,
      title: "Ebay Global",
      img: IMG4,
      description:
        "Famous Ebay online  shop ",
      link: "https://ebay-global.netlify.app/",
      github: "https://github.com/asomjonovbilol/personal",
    },
    {
      id: 3,
      title: "Spotify Global",
      img: IMG2,
      description: "A Spotify website for listening a music and podcast",
      link: "Unfortunately, there is no lik",
      github: "https://github.com/asomjonovbilol/Spotify-Global",
    },
    {
      id: 4,
      title: "Mohid Global",
      img: IMG5,
      description:
        "Mohid smart watches shop",
      link: "https://mohi-global.netlify.app/",
      github: "https://github.com/asomjonovbilol/Mohid-Global-v.2",
    },
    {
      id: 5,
      title: "NORNLIGHT Global",
      img: IMG6,
      description:
        "Website which you can buy a lights",
      link: "nhttps://imtixon-bilolliki.netlify.app/",
      github: "https://github.com/asomjonovbilol/Exam-by-Bilol",
    },
    {
      id: 6,
      title: "Skillbridge Global",
      img: IMG7,
      description:
        "Website for online studying",
      link: "https://skillbridge-global-bilol.netlify.app/",
      github: "https://github.com/asomjonovbilol/Skillbridge-global",
    },
    {
      id: 7,
      title: "Exclusive online shop",
      img: IMG8,
      description:
        "Online shop where u can buy what ever, visit and enjoy.",
      link: "https://final-exam-by-biloliddin.netlify.app/",
      github: "https://github.com/asomjonovbilol/Final-Imtixon",
    },
    {
      id: 9,
      title: "GreenShop online shop for who like a gardening",
      img: IMG9,
      description:
        "If u like gardening and unsusual tree and flowe. I recommend you this website where u can buy a flower",
      link: "https://yakuniy-imtixon-bilol.netlify.app/",
      github: "https://github.com/asomjonovbilol/Exam-by-Biloliddin",
    },    

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
