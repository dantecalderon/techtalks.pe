import dynamic from "next/dynamic";
import Navigation from "../navigation";
import Name from "../name";
import Slogan from "../slogan";
import Button from "../ui/button";
import Wrapper from "../ui/wrapper";

const NextEvent = dynamic(() => import("../next-event"), { ssr: false, loading: () => null });

function Hero() {
  return (
    <section id="hero" className="hero">
      <Navigation />
      <Wrapper>
        <header>
          <div>
            <Name />
            <Slogan />
            <div className="button-container">
              <Button href="/cfp" invert>
                Quiero dar una charla
              </Button>
            </div>
          </div>
          <NextEvent />
        </header>
      </Wrapper>
      <style jsx>{`
        .hero {
          background-color: white;
          background-image: radial-gradient(
            circle,
            #d7d7d7,
            #d7d7d7 1px,
            #fff 1px,
            #fff
          );
          background-size: 28px 28px;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-direction: column;
        }
        .button-container {
          margin-bottom: 2.5rem;
        }
        @media (min-width: 64em) {
          .button-container {
            margin-bottom: 5rem;
          }
          header {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
