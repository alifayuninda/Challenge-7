const Navbar = () => {
    return (
        <section id="navbar">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img src="../public/logo.png" alt="Logo" width="100" height="34">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <div class="form-control" href="#" type="input">                input here                 </div>
                      </li>
                      <li class="nav-item">
                        <button type="button" class="btn bg-primary" id="cari">Search</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </section>
    )
}

export default Navbar;