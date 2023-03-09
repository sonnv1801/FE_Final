import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
const FooterSocial = () => {
  return (
    <div className="col-lg-2 col-md-6 mb-4 mb-md-0 social">
      <h5 className=" text-center">Liên hệ</h5>
      <section className="mb-4 body-social">
        <Link
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          to="https://www.facebook.com/profile.php?id=100013919431514"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p className="icon-fb">
            <FacebookIcon className="icon-social" />
            Facebook
          </p>
        </Link>
        <Link
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          to="https://www.youtube.com/channel/UCr2BxKRWiHS5n2jwoabrUag"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p className="icon-yt">
            <YouTubeIcon className="icon-social" />
            Youtobe
          </p>
        </Link>
        <Link
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          to="https://github.com/sonnv1801"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p>
            <GitHubIcon className="icon-social" />
            GitHub
          </p>
        </Link>
        {/* <Link
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          to="/"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p className="icon-tw">
            <TwitterIcon className="icon-social" />
            Twitter
          </p>
        </Link> */}
      </section>
    </div>
  );
};

export default FooterSocial;
