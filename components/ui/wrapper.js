import cn from "classnames";

function Wrapper({ children, className, flex, center, vertical, ...props}) {
  return (
    <section className={cn(className, { flex, center, vertical })} {...props}>
      {children}
      <style jsx>{`
        section {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 1rem;
          box-sizing: border-box;
        }
        section.flex {
          display: flex;
        }
        section.center {
          text-align: center;
          justify-content: center;
          align-content: center;
        }
        section.vertical {
          flex-direction: column;
        }
        @media (min-width: 64rem) {
          section {
            padding: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Wrapper;
