import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light sticky">
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-3">
                <a href="https://www.instagram.com/pupstopapp/">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-256.png"
                    className="icon"
                    alt="PupStopApp Instagram"
                  />
                </a>
              </div>
              <div className="col-3">
                <a href="https://www.facebook.com/PupStopApp/">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-256.png"
                    className="icon"
                    alt="PupStopApp Facebook"
                  />
                </a>
              </div>
              <div className="col-3">
                <a href="https://www.twitter.com/PupStopApp/">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-256.png"
                    className="icon"
                    alt="PupStopApp Twitter"
                  />
                </a>
              </div>
              <div className="col-3">
                <a href="mailto:pupstopapp@gmail.com">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/black-white-social-media/32/mail_email_envelope_send_message-512.png"
                    className="icon"
                    alt="PupStopApp Email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <br />
        <div className="row">
        <div className="col-sm-4"></div>
          <div className="col-sm-3">
            <p className="small mb-4 mb-lg-0 footer">&copy; PupStop 2021. A Bentley, Maverick, and Charley Production</p>
          </div>
        <div className="col-sm-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
