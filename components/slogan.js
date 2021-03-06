import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import useDocumentVisibility from "@rehooks/document-visibility";
import useOnScreen from "../lib/use-on-screen";
import shuffle from "../lib/shuffle";
import slogans from "../data/slogans.json";

const words = ["de Desarrollo"].concat(
  shuffle(new Set(slogans)).slice(0, 13),
  "de Tecnología"
);

// it should be a number max 2s and min 600ms or calculated to be completed in 2m 30s
const duration =
  60000 / words.length >= 1200
    ? 1200
    : 60000 / words.length < 600
    ? 600
    : 60000 / words.length;

function Slogan({ animate = true } = {}) {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);
  const documentVisibility = useDocumentVisibility();
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, "-40px");

  useEffect(
    () => {
      if (documentVisibility === "hidden" || !isOnScreen || !animate) return;
      let timer;
      if (running) {
        timer = setTimeout(
          () =>
            count + 1 === words.length
              ? setRunning(false)
              : setCount(count + 1),
          duration
        );
      } else {
        timer = setTimeout(() => {
          setCount(0);
          setRunning(true);
        }, 10000);
      }
      return () => clearTimeout(timer);
    },
    [count, running, documentVisibility, isOnScreen, animate]
  );

  return (
    <h2 ref={ref}>
      {running && animate ? (
        <>
          <span>Tu Meetup</span> <strong>{words[count]}</strong>
          <Head>
            <title>Tech Talks - Tu Meetup {words[count]}</title>
          </Head>
        </>
      ) : (
        <>
          <span className="finished">Tu Meetup</span>
          <Head>
            <title>Tech Talks - Tu Meetup</title>
          </Head>
        </>
      )}
      <style jsx>{`
        h2 {
          font-size: 1.75em;
          margin: 0 0 2.5rem;
          font-weight: 400;
          height: 83px;
        }
        h2 strong {
          font-size: 1em;
          font-weight: 700;
        }
        .finished {
          animation-name: slideDown;
          animation-duration: 300ms;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          will-change: font-size, font-weight;
        }
        @media (min-width: 64em) {
          h2 {
            margin-bottom: 1.5rem;
          }
        }
        @keyframes slideDown {
          from {
            font-size: 1em;
            font-weight: 600;
          }

          to {
            font-size: 1.5em;
            font-weight: 700;
          }
        }
      `}</style>
    </h2>
  );
}

export default Slogan;
