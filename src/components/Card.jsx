import html from '../assets/css.png'; 

const Card = ({skill, key}) => {
 
    let {isPortrait, image, title , text, link} = skill;

    const shortenedText = text.length > 80 ? text.substring(0,80).trim().concat('...') : text;
    console.log('image file', html);

    return (
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="custom-card-image-div mb-3">
                        <img src={image}  className={isPortrait ?  `card-img-portrait` : `card-img-landscape`}/>
                    </div>
                    <h6 class="card-subtitle mb-1">{title}</h6>
                    <p class="card-text small">{shortenedText}</p>
                    <a href={link} class="card-link text-white-50" target="_blank">read more...</a>
                </div>
            </div>
        </div>
    );
}

 export default Card;