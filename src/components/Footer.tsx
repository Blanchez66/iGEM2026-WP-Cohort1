export function Footer() {
  const base = import.meta.env.BASE_URL;

  return (
    <footer className="pt-5 pb-5 footer py-5 mt-5 footer-custom text-white">
      <div className="container">
        <div className="footer-top-row mb-4">
          <div className="footer-contact">
            <h4 className="mb-3">Contact us</h4>
            <p className="mb-1">2026 Zhejiang University</p>
            <p className="mb-1">ZJU-China</p>
            <p className="mb-0"><a href="mailto:igemzjuchina@zju.edu.cn">igemzjuchina@zju.edu.cn</a></p>
          </div>
          <div className="footer-logo-row">
            <img
              src={`${base}images/home/zjulogo.svg`}
              alt="Zhejiang University logo"
              className="footer-logo footer-logo--zju"
            />
            <img
              src={`${base}images/home/igemlogo.svg`}
              alt="iGEM logo"
              className="footer-logo footer-logo--igem"
            />
          </div>
        </div>
        <hr />
        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row mt-4">
          <div className="col">
            <p className="mb-0">
              <small>
                © 2026 - Content on this site is licensed under a{" "}
                <a
                  className="subfoot"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="license"
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </small>
            </p>
            <p>
              <small>
                The repository used to create this website is available at{" "}
                {/* <a href={`https://github.com/AnyaReese/iGEM26-WP-Tutorial-React`}> */}
                <a href={`https://github.com/Blanchez66/iGEM2026-WP-Cohort1`}>
                  github.com/Blanchez66/iGEM2026-WP-Cohort1
                </a>
                .
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
