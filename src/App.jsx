import React from 'react';
import About from './sections/About';
import Services from './sections/Services';

function App() {
  return (
    <div className="App">
      <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary py-3 bg-mid-primary">
        <div className="container">
          <a className="navbar-brand text-white" href="#home"><h4 className="fw-bolder h4">&lt;yoshiodei/&gt;</h4></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
              <a className="nav-link ms-2 text-white-50" href="#about">About</a>
              <a className="nav-link ms-2 text-white-50" href="#services">Services</a>
              <a className="nav-link ms-2 text-white-50" href="#projects">Projects</a>
              <a className="nav-link ms-2 text-white-50" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container custom-main-section-padding" id="home">
        <div className="row pb-5">
          <div className="col-12">
            <h5 className="card-title display-3 fw-bolder custom-text-primary mb-2">Hello, I&apos;m Yoshi</h5>
            <div className="custom-main-section-hr mb-3" />
            <p className="card-text fs-4 text-white">A Full Stack Web Developer & A Graphic Designer</p>
            <p className="card-text fw-light text-white-50 mb-4">
              fond of creating and designing
              <br />
              websites and mobile applincations
              <br />
              and bringing them to life
              <br />
              using code.
            </p>
            <a href="#none" className="btn px-5 py-2 btn-bd-primary"> Hire Me </a>
          </div>
        </div>
        <Services />
        <About />
        <div>
          <h2 className="h2 fw-bolder " id="projects">My Projects</h2>
          <br />
          <div className="row justify-content-start g-4">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                  <a href="#none" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="h2 fw-bolder" id="contact">Contacts</h2>
          <hr />
          <br />
          <div className="row">
            <div className="col-5">
              <h5 className="h5 fw-bolder mb-3">My Socials</h5>
              <ul className="list-group list-group-flush pe-5">
                <li className="list-group-item"><h6 className="h6">Email</h6></li>
                <li className="list-group-item"><h6 className="h6">LinkedIn</h6></li>
                <li className="list-group-item"><h6 className="h6">GitHub</h6></li>
                <li className="list-group-item"><h6 className="h6">Instagram</h6></li>
                <li className="list-group-item"><h6 className="h6">Youtube</h6></li>
              </ul>
            </div>
            <div className="col-7">
              <form>
                <h5 className="h5 fw-bolder mb-3">Send Me A Message</h5>
                <div className="form-floating mb-3">
                  <input className="form-control" id="floatingInput" placeholder="name@example.com" required />
                  <label htmlFor="floatingInput">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required />
                  <label htmlFor="floatingTextarea">Message</label>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
