const iniHero = () => {
    return (
        <section class="hero">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="button">
                    <h2>List Car</h2>
                    <a class="btn bg-primary" target="_blank" id="all-car" href="/">All</a>
                    <a class="btn bg-light" target="_blank" id="small-car" href="/">Small</a>
                    <a class="btn bg-light" target="_blank" id="medium-car" href="/">Medium</a>
                    <a class="btn bg-light" target="_blank" id="large-car" href="/">Large</a>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="img-hero">
                    <img src="../public/img_car.png" alt="Hero Image"  style={{
                    height: "249px"}} aria-hidden="true"/>
                </div>
            </div>
        </div>
        </section>
    )
}

export default iniHero;