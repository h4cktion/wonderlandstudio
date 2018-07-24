import React from 'react';

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
<section className="section" id="about">
    <div className="container">
        <div className="row ">
            <div className="section-title col-lg-12">
                <h1 className="col-lg-2 col-m-2 col-xs-2">About</h1>
                <p className=" col-m-10 col-lg-offset-1 col-lg-9 col-xs-10 ">
                    Un petit cabinet de curiosités musicales et artistiques,
						dirigé par deux professionnels de la musique,
						<strong> Fiona AIT BOUNOU </strong> professeur de chant et <strong> Guiom REGNIER </strong> professeur de piano.
					</p>
            </div>
        </div>
        <div className="row visible-lg visible-m">
            <div className="about">

                <div className="about-fiona col-lg-6">
                    <img src="dist/images/portrait-fiona.png" width="200" height="200" alt="fiona" className="portrait col-lg-4 col-sm-6 col-xs-5" />
                    <p className="col-lg-offset-1 col-lg-4 col-sm-6 col-xs-offset-1 col-xs-6">
                        Fiona vie sur un petit nuage de bonheur depuis qu'elle partage sa passion avec les autres.

						</p>
                </div>
                <div className="about-guiom col-lg-6 ">
                    <p className="col-lg-offset-2 col-lg-4 col-xs-6">
                        Guiom accompagné de ses 88 touches de piano vous fera voyager avec ses douces mélodies.
					</p>
                    <img src="dist/images/portrait-guiom.png" width="200" height="200" alt="fiona" className="portrait col-lg-offset-1 col-lg-4 col-xs-offset-1 col-xs-5" />

                </div>
            </div>
        </div>

        <div className="row">
            <div style={{textAlign:'center'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QysM7qcAlBw" frameBorder="0" allowFullScreen></iframe>

            </div>
        </div>

    </div>
</section>
        );
    }
}

export default About;