
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">About</a>
              <a class="nav-link" href="#">Projects</a>
              <a class="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="container-fluid p-sm-5 p-2 pt-5">
        <div class="row">
          <div class="col-12">
            <div class="card card-border-none">
              <div class="card-body">
                <h5 class="card-title display-3 fw-bolder">Hello, I'm Yoshi</h5>
                <p class="card-text fs-4">A Full Stack Web Developer & A Graphic Designer</p>
                <p class="card-text fw-light">fond of creating and designing <br/> websites and mobile applincations <br/> and bringing them to life <br/> using code.</p>
                <a href="#" class="btn btn-primary px-4 py-2"> Read More ... </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
