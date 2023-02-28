import SectionTitle from "../components/SectionTitle";

const About = () => {

    const text = 'Here are some random facts about myself that you may find interesting. Enjoy!';
    const title = 'ABOUT';
    const subTitle = 'About Me';

    return (
        <div id="about" class="custom-section">
          <SectionTitle text={text} subTitle={subTitle} title={title} />
          <div class="row custom-tab-row">
              <div class="col-md-2 col-xs-12" id="v-pills-tab" role="tablist">
                <div class="row custom-tab-pill-row">
                  <div class="col-md-12 col-3">
                    <button class="nav-link active custom-tab-btn" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
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
              <div class="col-md-10 col-12 ">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active custom-tab-content p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
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
    );
}

export default About;