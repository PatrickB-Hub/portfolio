import landing_page from "../images/projects/landing-page.jpg";
import news_grid from "../images/projects/news-grid.jpg";
import world_countries from "../images/projects/world-countries.jpg";
import ruhr_trips from "../images/projects/ruhr-trips.jpg";
import portfolio from "../images/projects/portfolio.jpg";
import bike_finder from "../images/projects/bike-finder.jpg";

export const projectsList = [
  {
    imgPath: bike_finder,
    icons: ["React", "JavaScript", "HTML5", "CSS3"],
    title: "Bike Finder",
    description:
      "Website die dem Nutzer die Möglichkeit bietet, nach verlorenen und gestohlenen Fahrrädern zu suchen und die Ergebnisse zu filtern. Realisiert mit React.js Hooks mit Hilfe der Context API.",
    liveLink: "https://github.com",
    sourceLink: "https://github.com"
  },
  {
    imgPath: ruhr_trips,
    icons: ["HTML5", "CSS3", "Sass", "JavaScript"],
    title: "Ruhrtrips",
    description:
      "Die schönsten Zechen und Industrie-Denkmäler im Ruhrgebiet. Tickets buchen oder geführte Touren reservieren. Mit Fokus auf einen modularen Aufbau des stylings durch die Verwendung des CSS-Preprozessors Sass.",
    liveLink: "https://ruhrtrips.herokuapp.com/",
    sourceLink: "https://github.com"
  },
  {
    imgPath: portfolio,
    icons: ["React", "JavaScript", "HTML5", "CSS3"],
    title: "Portfolio",
    description:
      "Portfolio Website mit einer Übersicht an Fähigkeiten und einem Auszug bereits abgeschlossener Projekte. Den Abschluss bildet ein Kontaktformular. Realisiert mit React Hooks unter Verwendung von react-particles",
    liveLink: "https://patrickbecker.me",
    sourceLink: "https://github.com/"
  },
  {
    imgPath: world_countries,
    icons: ["HTML5", "CSS3", "JavaScript"],
    title: "Countries of the World",
    description:
      "Eine Liste aller Länder mit der jeweiligen Hauptstadt, den gesprochenen Sprachen und der Bevölkerungsgröße. Die meist gesprochenen Sprachen, sowie die bevölkerungsreichsten Länder werden zusätzlich durch ein Säulendiagramm veranschaulicht.",
    liveLink: "https://countries-world.herokuapp.com/",
    sourceLink: "https://github.com"
  },
  {
    imgPath: news_grid,
    icons: ["HTML5", "CSS3"],
    title: "News Grid",
    description:
      "Nachrichtenseite mit Grid-Layout, einer About-Page und einer Artikel Seite.",
    liveLink: "https://news-grid.herokuapp.com/",
    sourceLink: "https://github.com"
  },
  {
    imgPath: landing_page,
    icons: ["HTML5", "CSS3", "JavaScript"],
    title: "Nature - Landing Page",
    description:
      "Nature landing-page mit Fokus auf animations und transitions. Unterstüzt durch die Verwendung von TweenMax, einer JS Bibliothek für komplexe Animationen.",
    liveLink: "https://nature-landing-page.herokuapp.com/",
    sourceLink: "https://github.com"
  }
];
