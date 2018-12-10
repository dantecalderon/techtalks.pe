import Section from "./ui/section";
import venue from "../data/venue.json";

function Venue() {
  return (
    <Section id="venue">
      <div className="wrapper">
        <iframe
          src={venue.map}
          height="200"
          frameBorder="0"
          allowFullScreen
        />
        <div className="content">
          <h2>Ubicación</h2>
          <address>
            {venue.address.place}
            <br />
            {venue.address.direction}
            <br />
            {venue.address.city}
          </address>
        </div>
      </div>
      <style jsx>{`
        iframe {
          border: none;
          margin-right: 1em;
          padding-right: 1em;
          box-sizing: border-box;
          width: 50%;
        }
        h2 {
          font-size: 2em;
          font-weight: 600;
          margin-top: 0;
        }
        address {
          font-style: normal;
          font-size: 1.25em;
          margin-bottom: 2em;
        }
        .wrapper {
          max-width: 60em;
          margin: 0 auto;
          display: flex;
        }
        @media (max-width: 30em) {
          .wrapper {
            flex-direction: column;
          }
          iframe {
            width: 100%;
            margin-right: 0;
            padding-left: 2em;
            padding-right: 2em;
            margin-bottom: 2em;
          }
          address {
            margin-bottom: 0;
          }
          .content {
            padding: 0 2em;
          }
        }
      `}</style>
    </Section>
  );
}

export default Venue;
