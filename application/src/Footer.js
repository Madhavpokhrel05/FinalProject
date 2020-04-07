import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                    {/*Footer*/}
    <footer className="page-footer stylish-color mt-0 pt-0 text-center text-md-left">

        {/*Footer Links*/}
        <div className="container">

            {/*First row*/}
            <div className="row">

                {/*First column*/}
                <div className="col-md-12 py-4">

                    <div className="footer-socials mb-5 flex-center">

                        {/*Facebook*/}
                        <a className="fb-ic">
                            <i className="fab fa-facebook-f fa-lg white-text mr-md-4 mr-3 fa-lg"> </i>
                        </a>
                        {/*Linkedin*/}
                        <a className="li-ic" href="https://www.linkedin.com/in/madhavpokhrel/" target="_blank" >
                            <i className="fab fa-linkedin-in fa-lg white-text mr-md-4 mr-3 fa-lg"> </i>
                        </a>
                        {/*Instagram*/}
                        <a className="ins-ic">
                            <i className="fab fa-instagram fa-lg white-text mr-md-4 mr-3 fa-lg"> </i>
                        </a>
                    </div>
                </div>
                {/*/First column*/}
            </div>
            {/*/First row*/}
        </div>
        {/*/Footer Links*/}

        {/*Copyright*/}
        <div className="footer-copyright text-center py-3">
            <div className="container-fluid">
                Design By: <a href="https://madhavpokhrelportfolio.netlify.com/" target="_blank"> Madhav Pokhrel</a>
            </div>
        </div>
        {/*/Copyright*/}

    </footer>
            </div>
        );
    }
}



export default Footer;
