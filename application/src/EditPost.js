import React, {Component} from 'react';
import AddApplication from './AddApplication';
import {
    Link
} from "react-router-dom";



class Post extends Component {
    render() {
        return (

<section className="section extra-margins pb-3 text-center text-lg-left">

    {/*Grid row*/}
    <div className="row mb-4">

        {/*Grid column*/}
        <div className="col-md-8">
            {/*Card*/}
            <div className="card">

                {/*Card image*/}
                <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg" className="card-img-top" alt="" />
                    <a>
                        <div className="mask rgba-white-slight waves-effect waves-light"></div>
                    </a>
                </div>
                {/*/.Card image*/}

                {/*Card content*/}
                <div className="card-body mx-4">
                    {/*Title*/}
                    <h4 className="card-title">
                        <strong>Lorem ipsum dolor sit amet</strong>
                    </h4>
             <hr></hr>
                    {/*Text*/}
                    <p className="dark-grey-text mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p><p className="dark-grey-text mb-4"> Lorem
                        </p>



                    <div class="edit-option d-flex justify-content-between">
                        <Link to="/AddApplication" className="btn btn-primary"><i class="fas fa-edit mr-2"></i>  Edit</Link>
<button class="btn btn-danger"> <i className="fas fa-trash-alt mr-2"></i> Delete</button>
                    </div>
                </div>
                {/*/.Card content*/}

            </div>
            {/*/.Card*/}

        </div>
        {/*Grid column*/}

    </div>
    {/*/Grid row*/}

</section>



        );
    }
}



export default Post;
