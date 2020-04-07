import React from 'react';
import TinyMCE from 'react-tinymce';




export default class AddApplication extends React.Component {
constructor(){
	super();

	this.handleEditorChange= this.handleEditorChange.bind(this)
}
handleEditorChange(e) {
    console.log(e.target.getContent());
  }

	render() {
		return (
			<div>


      {/* Section: Create Page */}
      <section className="my-5">

        {/* Grid row */}
        <div className="row justify-content-center">

          {/* Grid column */}
          <div className="col-lg-8">

            {/* First card */}
            <div className="card mb-4 post-title-panel">
              <div className="card-body">
                <div className="md-form mt-1 mb-0">
                  <input type="text" id="form1" className="form-control"/>
                  <label className="form-check-label" htmlFor="form1">Post title</label>
                </div>
              </div>
            </div>
            {/* First card */}

            {/* Second card */}
            <div className="card mb-4">
              <TinyMCE onChange={this.handleEditorChange} />
            </div>
            {/* Second card */}
<div className="card">
<form className="md-form">
  <div className="file-field big-2">
    <div className="btn btn-rounded blue-gradient btn-lg float-left">
      <span>Choose file</span>
      <input type="file" />
    </div>
    <div className="file-path-wrapper">
      <input className="file-path validate" type="text" placeholder="Upload your file" />
    </div>
  </div>
</form>

</div>

          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-lg-4">

            {/* Card */}
            <div className="card card-cascade narrower mb-5">

              {/* Card image */}
              <div className="view view-cascade gradient-card-header blue-gradient">
                <h4 className="font-weight-500 mb-0">Publish</h4>
              </div>
              {/* Card image */}

              {/* Card content */}
              <div className="card-body card-body-cascade">

                <p><i className="fas fa-flag mr-1" aria-hidden="true"></i> Status: <strong>Draft</strong></p>
                <p><i className="far fa-eye mr-1" aria-hidden="true"></i> Visibility <strong>Public</strong></p>
                <p><i className="fas fa-archive mr-1 mr-1" aria-hidden="true"></i> Revisions: <strong>2</strong></p>
                <p><i className="far fa-calendar-alt mr-1" aria-hidden="true"></i> Publish: <strong>Immediately</strong></p>
                <div className="text-right">
                  <button className="btn btn-flat waves-effect">Discard</button>
                  <button className="btn btn-primary waves-effect waves-light">Publish</button>
                </div>

              </div>
              {/* Card content */}

            </div>
            {/* Card */}

            {/* Card */}
            <div className="card card-cascade narrower">

              {/* Card image */}
              <div className="view view-cascade gradient-card-header blue-gradient">
                <h4 className="font-weight-500 mb-0">Categories</h4>
              </div>
              {/* Card image */}

              {/* Card content */}
              <div className="card-body card-body-cascade">
                <fieldset className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="color-1" />
                  <label className="form-check-label" htmlFor="color-1">Material Design</label>
                </fieldset>
                <fieldset className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="color-2" />
                  <label className="form-check-label" htmlFor="color-2">Tutorials</label>
                </fieldset>
                <fieldset className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="color-3" />
                  <label className="form-check-label" htmlFor="color-3">Marketing Automation</label>
                </fieldset>
                <fieldset className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="color-4" />
                  <label className="form-check-label" htmlFor="color-4">Design Resources</label>
                </fieldset>
                <fieldset className="form-check">
                  <input className="form-check-input" type="checkbox" id="color-5" />
                  <label className="form-check-label" htmlFor="color-5">Random Stories</label>
                </fieldset>
              </div>
              {/* Card content */}

            </div>
            {/* Card */}

          </div>
          {/* Grid column */}

        </div>
        {/* Grid row */}

      </section>
      {/* Section: Create Page */}


			</div>
		);
	}
}
