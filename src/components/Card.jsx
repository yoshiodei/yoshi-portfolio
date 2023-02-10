
const Card = ({imageName, isPortrait, title, text}) => {
    return (
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="card custom-card">
                <div class="card-body">
                <div class="custom-card-image-div mb-3">
                    <img src={imageName}  className={ isPortrait ?  `card-img-portrait` : `card-img-landscape`}/>
                </div>
                <h6 class="card-subtitle mb-1">{title}</h6>
                <p class="card-text small">{text}</p>
                </div>
            </div>
        </div>
    );
}

 export default Card;