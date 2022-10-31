const iniHero = () => {
    return (
        <section class="hero">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="button">
                    <h2>List Car</h2>
                    <a class="btn bg-primary" target="_blank" id="all-car">All</a>
                    <a class="btn bg-light" target="_blank" id="small-car">Small</a>
                    <a class="btn bg-light" target="_blank" id="medium-car">Medium</a>
                    <a class="btn bg-light" target="_blank" id="large-car">Large</a>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="img-hero">
                    <img src="../public/img_car.png" alt="Hero Image"  style="
                    height: 249px;">
                </div>
            </div>
        </div>
        </section>
    )
}

export default iniHero;