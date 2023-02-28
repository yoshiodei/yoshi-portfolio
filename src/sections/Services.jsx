import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { skills } from "../assets/data/skills";

const Services = () => {

    const text = 'Below are the tools and technologies I use in designing and creating websites as well as mobile applications.';
    const title = 'SERVICES';
    const subTitle = 'My Skillset';

    return (
        <div id="services" class="custom-section">
          <SectionTitle text={text} subTitle={subTitle} title={title}  />
          <div class="row justify-content-start g-4">
            {
              skills.map((skill, index) => 
              (
                <Card skill={skill} key={index} />
              )
              )
            }
          </div>
        </div>
    );
}

export default Services;