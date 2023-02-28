const SectionTitle = ({title, subTitle, text }) => {
    return ( 
        <>
            <h6 class="h6 fw-bolder text-white">{title}</h6>
            <h2 class="h1 fw-bolder custom-text-primary mb-2" id="projects">{subTitle}</h2>
            <div class="custom-sub-section-hr mb-md-4 mb-2"></div>
            <div class="row mb-md-4 mb-sm-2">
                <div class="col-md-6">
                    <p class="text-white-50">{text}</p>
                </div>
            </div>
        </> 
    )
}

export default SectionTitle;