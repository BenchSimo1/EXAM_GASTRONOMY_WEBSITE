const header = new Vue({
  el: "#header",
  template: /*html*/ `
         <header>
      <!-- NAVBAR -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand animated pulse" href="../index">
          <img
            src="../media/brand/logo-dark.svg"
            width="30"
            height="30"
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="../index"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="../pages/food.html"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div
                class="dropdown-menu text-center text-lg-left"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="../pages/food.html">Food</a>
                <a class="dropdown-item" href="../pages/desserts.html">Desserts</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../pages/about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../pages/album.html">Album</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../pages/reservations.html"
                >Reservations</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../pages/contact.html">Contact</a>
            </li>
          </ul>
          <div class="ml-auto">
            <a class="nav-social mr-2" href="https://github.com/BenchSimo1"
              ><i class="fa fa-facebook" aria-hidden="true"></i
            ></a>
            <a class="nav-social mr-2" href="https://github.com/BenchSimo1"
              ><i class="fa fa-tripadvisor" aria-hidden="true"></i
            ></a>
            <a class="nav-social mr-2" href="https://github.com/BenchSimo1"
              ><i class="fa fa-instagram" aria-hidden="true"></i
            ></a>
            <a class="nav-social" href="https://github.com/BenchSimo1"
              ><i class="fa fa-envelope" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </nav>
    </header>
    `,
  data: {},
});
