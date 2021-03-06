const footer = new Vue({
  el: "#footer",
  template: /*html*/ `
          <footer class="page-footer">
      <div class="container">
        <a
          class="navbar-brand animated pulse d-block text-center m-0 p-0"
          href="#"
        >
          <img
            src="../media/brand/logo-light.svg"
            width="50"
            height="50"
            alt="Logo"
          />
        </a>
        <div class="row">
          <div class="col-md-3">
            <h5 class="page-footer-title">OPENING HOURS</h5>
            <p class="mb-0">Open daily from 8am</p>
            <p class="mb-0">Bar: Daily from 8am - 12pm</p>
            <p class="mb-0">Breakfast: Daily from 8am - 11am</p>
            <p class="mb-0">Lunch: Daily from 12pm - 3pm</p>
            <p>Dinner: Daily from 6pm - 12pm</p>
          </div>
          <div class="col-md-3 h-100 border-left-custom">
            <h5 class="page-footer-title mt-3 mt-md-0">LOCATION</h5>
            <address>
              Lorem &amp; Ipsum Restaurant<br />
              24 Akti Kampani St.<br />
              846 00, Mykonos, loef<br />
              <abbr title="Phone">P:</abbr> (+212) 6456789***<br />
              <abbr title="Email">E:</abbr> info@lorem.com
            </address>
          </div>
          <div class="col-md-3 h-100 border-left-custom">
            <h5 class="page-footer-title mt-3 mt-md-0">FOLLOW US</h5>
            <div class="mb-3">
              <a
                class="footer-social"
                href="https://github.com/BenchSimo1"
                aria-label="facebook"
                ><i class="fa fa-facebook" aria-hidden="true"></i
              ></a>
              <a
                class="footer-social"
                href="https://github.com/BenchSimo1"
                aria-label="tripadvisor"
                ><i class="fa fa-tripadvisor" aria-hidden="true"></i
              ></a>
              <a
                class="footer-social"
                href="https://github.com/BenchSimo1"
                aria-label="instagram"
                ><i class="fa fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
          <div class="col-md-3 h-100 border-left-custom">
            <h5 class="page-footer-title mt-3 mt-md-0">NEWSLETTER</h5>
            <p>
              Complete the form to receive information on the latest events,
              news and special offers at Grecko.
            </p>
            <form id="newsletter-form">
              <label class="sr-only" for="formEmail">Email</label>
              <input
                type="email"
                class="form-control form-control-sm rounded"
                id="formEmail"
                placeholder="name@example.com"
              />
              <button
                type="submit"
                class="btn btn-sm btn-outline-light btn-block mt-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="page-footer-copyright container-fluid text-center">
        © 2020 Benchelbikh Mohammed &amp; Restaurant. All rights reserved.<br />
      </div>
    </footer>
    `,

  data: {},
});
