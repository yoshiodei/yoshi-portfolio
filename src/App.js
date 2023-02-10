import html from './assets/express.png';

function App() {
  return (
    <div className="App">
        <nav class="navbar fixed-top navbar-expand-md bg-body-tertiary py-3 bg-mid-primary">
          <div class="container">
              <a class="navbar-brand text-white" href="#home"><h4 class="fw-bolder h4">&lt;yoshiodei/&gt;</h4></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active text-white" aria-current="page" href="#home">Home</a>
                  <a class="nav-link ms-2 text-white-50" href="#about">About</a>
                  <a class="nav-link ms-2 text-white-50" href="#services">Services</a>
                  <a class="nav-link ms-2 text-white-50" href="#projects">Projects</a>
                  <a class="nav-link ms-2 text-white-50" href="#contact">Contact</a>
                </div>
              </div>
          </div>
        </nav>
      <div class="container custom-main-section-padding" id="home">
        <div class="row pb-5">
          <div class="col-12">
                <h5 class="card-title display-3 fw-bolder custom-text-primary mb-2">Hello, I'm Yoshi</h5>
                <div class="custom-main-section-hr mb-3"></div>
                <p class="card-text fs-4 text-white">A Full Stack Web Developer & A Graphic Designer</p>
                <p class="card-text fw-light text-white-50 mb-4">fond of creating and designing <br/> websites and mobile applincations <br/> and bringing them to life <br/> using code.</p>
                <a href="#" class="btn px-5 py-2 btn-bd-primary"> Hire Me </a>
          </div>
        </div>
        <div>
          <h2 class="h2 fw-bolder mb-5" id="projects">My Projects</h2>
          <div class="row justify-content-start g-4">
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card custom-card">
                <div class="card-body">
                  <div class="custom-card-image-div mb-3">
                    <img src={html}  class="card-img-landscape"/>
                  </div>
                  <h6 class="card-subtitle mb-1">HTML</h6>
                  <p class="card-text small">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about">
          <h2 class="h2 fw-bolder">About Me</h2>
          <hr/><br/>
          <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
              <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
              <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
              <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
              <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                This is some placeholder content the Settings tab's associated content. 
                Clicking another tab will toggle the visibility of this one for the next. 
                The tab JavaScript swaps classes to control the content visibility and styling. 
                You can use it with tabs, pills, and any other .nav-powered navigation.
              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                This is some placeholder content the Settings tab's associated content. 
                Clicking another tab will toggle the visibility of this one for the next. 
                The tab JavaScript swaps classes to control the content visibility and styling. 
                You can use it with tabs, pills, and any other .nav-powered navigation.
              </div>
              <div class="tab-pane fade" id="v-pills" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                This is some placeholder content the Settings tab's associated content.
                Clicking another tab will toggle the visibility of this one for the next. 
                The tab JavaScript swaps classes to control the content visibility and styling. 
                You can use it with tabs, pills, and any other .nav-powered navigation.
              </div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                This is some placeholder content the Settings tab's associated content.
                Clicking another tab will toggle the visibility of this one for the next. 
                The tab JavaScript swaps classes to control the content visibility and styling. 
                You can use it with tabs, pills, and any other .nav-powered navigation.
              </div>
              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                This is some placeholder content the Settings tab's associated content.
                Clicking another tab will toggle the visibility of this one for the next. 
                The tab JavaScript swaps classes to control the content visibility and styling. 
                You can use it with tabs, pills, and any other .nav-powered navigation.
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="h2 fw-bolder">Test Tab</h2>
          <hr/><br/>
          <div class="row">
              <div class="col-md-2 col-xs-12" id="v-pills-tab" role="tablist">
                <div class="row">
                  <div class="col-md-12 col-3">
                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                  </div>
                  <div class="col-md-12 col-3">
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                  </div>
                  <div class="col-md-12 col-3">
                    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
                  </div>
                  <div class="col-md-12 col-3">
                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                  </div>
                </div>
              </div>
              <div class="col-md-10 col-12">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    This is some placeholder content the Settings tab's associated content. 
                    Clicking another tab will toggle the visibility of this one for the next. 
                    The tab JavaScript swaps classes to control the content visibility and styling. 
                    You can use it with tabs, pills, and any other .nav-powered navigation.
                  </div>
                  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                    This is some placeholder content the Settings tab's associated content. 
                    Clicking another tab will toggle the visibility of this one for the next. 
                    The tab JavaScript swaps classes to control the content visibility and styling. 
                    You can use it with tabs, pills, and any other .nav-powered navigation.
                  </div>
                  <div class="tab-pane fade" id="v-pills" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                    This is some placeholder content the Settings tab's associated content.
                    Clicking another tab will toggle the visibility of this one for the next. 
                    The tab JavaScript swaps classes to control the content visibility and styling. 
                    You can use it with tabs, pills, and any other .nav-powered navigation.
                  </div>
                  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                    This is some placeholder content the Settings tab's associated content.
                    Clicking another tab will toggle the visibility of this one for the next. 
                    The tab JavaScript swaps classes to control the content visibility and styling. 
                    You can use it with tabs, pills, and any other .nav-powered navigation.
                  </div>
                  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                    This is some placeholder content the Settings tab's associated content.
                    Clicking another tab will toggle the visibility of this one for the next. 
                    The tab JavaScript swaps classes to control the content visibility and styling. 
                    You can use it with tabs, pills, and any other .nav-powered navigation.
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div>
          <h2 class="h2 fw-bolder" id="projects">My Projects</h2>
          <hr/><br/>
          <div class="row justify-content-start g-4">
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="h2 fw-bolder" id="contact">Contacts</h2>
          <hr/><br/>
          <div class="row">
            <div class="col-5">
              <h5 class="h5 fw-bolder mb-3">My Socials</h5>
              <ul class="list-group list-group-flush pe-5">
                <li class="list-group-item"><h6 class="h6">Email</h6></li>
                <li class="list-group-item"><h6 class="h6">LinkedIn</h6></li>
                <li class="list-group-item"><h6 class="h6">GitHub</h6></li>
                <li class="list-group-item"><h6 class="h6">Instagram</h6></li>
                <li class="list-group-item"><h6 class="h6">Youtube</h6></li>
              </ul>
            </div>
            <div class="col-7">
              <form>
                <h5 class="h5 fw-bolder mb-3">Send Me A Message</h5>
                <div class="form-floating mb-3">
                  <input class="form-control" id="floatingInput" placeholder="name@example.com" required />
                  <label for="floatingInput">Your Name</label>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                  <label for="floatingTextarea">Message</label>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
