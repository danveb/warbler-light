import "../styles/NotFound.css"; 

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__wrapper">
        <main className="notFound__main">
          <div className="notFound__title">
            <h1 className="notFound__title-text">🚒 Not Found</h1>
          </div>
          <div className="notFound__content">
            <p className="notFound__content-text">404 | Looks like you encountered an error...</p>
          </div>
        </main>
      </div>
    </div>
  )
}