import React from "react";

const SocialMedia = () => {
  return (
    <>
      <form className="text-end">
        <h1 className="text-center my-5">Social Media</h1>
        <div className="row py-2 ">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            <img src="https://img.icons8.com/material-rounded/24/000000/facebook-new.png" />
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-circle.png" />
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>

        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            <img src="https://img.icons8.com/material-outlined/30/000000/pinterest.png" />
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <div className="row py-2 ">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            <img src="https://img.icons8.com/android/24/000000/twitter.png" />
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            <img src="https://img.icons8.com/material-rounded/24/000000/youtube-play.png" />
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>

        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
           <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-tumblr-a-microblogging-and-social-networking-website-logo-shadow-tal-revivo.png"/>
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <hr className="mb-4" />
      </form>
      <div className="row mb-3 ">
        <span for="inputPassword3" className="col-sm-2 col-form-label"></span>
        <div className="col-sm-10">
          <button type="submit" className="btn-green fw-bold  me-4 ">
            Save
          </button>
          <button type="submit" className="btn-red fw-bold ">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
