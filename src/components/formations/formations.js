import React from 'react';
import Formation from './formation';

class Formations extends React.Component {

    constructor(props) {
        super(props);

        this.modifArticle = this.modifArticle.bind(this);
        this.state = {
            formations: [
                
                {
                    id: 2,
                    type: 'formation',
                    titre: 'Cours collectifs',
                    paragraphe: `Une écoute est nécessaire avant inscription.<br /></span>
                                Ouvert à tous les niveaux, vous pourrez présenter votre travail lors d'un concert en fin d'année scolaire, 
                                mais également au cours de l'année pour des auditions exceptionnelles dans le cadre d'événements organisés par le Studio.
                                <br />
                                - Niveau avancé mardi de 19h à 21h
                                <br/>
                                - Niveau intermédiaire et débutant le mercredi de 18h à 20h
                                <br/>
                                <strong>Tarif année scolaire 2016/2017 - 60 euros par mois</strong>`,
                    img: 'dist/images/icon-group.png'
                },
                 {
                    id: 3,
                    type: 'formation',
                    titre: 'Cours particuliers',
                            paragraphe: `Ouvert à tous les niveaux, à tous ceux qui aiment chanter,
                            qui aimeraient découvrir la technique vocale ou se perfectionner, 
                            avec des projets artistiques ou la simple envie de se faire plaisir ... Seule exigence, la motivation ! 
                            <br/>
                            <strong> Tarif année scolaire 2016/2017 - 25 euros de l'heure</strong>`,
                            img: 'dist/images/icon-particulier.png'
                },
                 {
                     id: 4,
                     type: 'formation',
                     titre: 'Jazz choir',
                     paragraphe: `Le lundi de 19h30 à 21h, tous nivaux.
                                    <br/>
                                    Chantons le jazz tous en choeur ! Avec des arrangement originaux pour choeur a cappella,
                                    vous découvrirez des standards oubliés et chanterez aussi des morceaux qui vous ont fait vibrer,
                                    swinger, jazzer tel que Summertime, My favorite sing, my funny valentin, Papermoon...
                                    Travaille également sur la technique vocale, l'histoire de la musique et les bases du solfège.
                                    Ouvert à toutes personnes aimant chanter, nos seuls exigences sont la motivation et l'assiduité.
                                    <br/>
                                    <strong>Tarif année scolaire 2016/2017 - 180e l'année.</Strong>
                                    <br/>
                                    (possibilité de payer au mois ou au trimestre)`,
                     img: 'dist/images/icon-jazz2.png'
                },
                {
                    id: 5,
                    type: 'formation',
                    titre: 'The owl and the pussycat',
                    paragraphe: `Le jeudi de 17h à 18h15. <br/>
                                Cet atelier propose aux enfants de 5 à 8 ans,
                                une découverte de la langue anglaise par le biais de projets manuels et créatifs, de jeux et de chansons.
                                Les ateliers animés par une artiste anglaise, sont organisés en petits groupes et adaptés aux âges et aux besoins de chacun !
                                Le professeur d'art plastique, <strong>Lois</strong>.
                                <br/>
                                <strong>Tarifs pour l'année scolaire 2015/2016 - 95 euros par trimestre</strong>
                                <br/>	(matériel fourni)`,
                    img: 'dist/images/icon-art.png'
                }
            ]
        };
    }

    // componentWillMount(){

    //     const self = this;
    //     console.log("BEFOR STATE : " + self.state.formations)
        
    //     let data = _.cloneDeep(self.state.formations);
    //     let formations = [];

    //     data.forEach((item, index) => {

    //         if (index % 2) {

    //             console.log("data " + data[index - 1].id);
    //             /* debugger; */
    //             console.log("item " + item.id);
                
    //             /* formations.push([data[index - 1], data[index]]); */
    //             formations.push([data[index - 1], item]);
    //         } else if ( data.length === index+1 ){
    //             formations.push( [item] );
    //         }
    //     });

    //     self.setState({
    //         formations
    //     }, () => {
    //         self.state.formations.map((formation) => {
    //             console.log(" STATE : " + formation[0].id)
    //             console.log(" STATE : " + formation[1].id)
    //         })
    //     });
    // }

    componentDidMount(){
       

    }

     modifArticle(article) {
         console.log("ok");
        console.log(article); 
    } 



    render() {
        const self = this;
        let newRow = false;
        let nbArticle = 0;
        let centerCssClass = "col-lg-offset-3 col-lg-5 col-sm-12";
        let leftCssClass = "col-lg-5 col-sm-12";
        let rightCssClass = "col-lg-offset-2 col-lg-5";

        return (
            <section className="section" id="formations">
                <div className="container">
                    <div className="row">
                        <div className="section-title col-lg-12">
                            <h1 className="col-lg-2 col-m-2 col-xs-3">Formations</h1>
                            <p className=" col-m-10 col-lg-offset-1 col-lg-9 col-xs-9">
                                Tous les cours et ateliers figurants sur cette page seront animés par
						<strong>Fiona AIT BOUNOU</strong>,
						<strong>Guiom REGNIER</strong> et ses 88 touches de Piano
						nous accompagneront toute l'année.
					</p>
                        </div>
                    </div>
                    {self.state.formations.reduce((acc, item, index, ary) => {
                        

                        if (index % 2 === 0)
                            acc.push(
                                <div className="row" key={"row"+item.id}>
                                    <Formation key={item.id} formation={item} cssClass={leftCssClass} save={ self.modifArticle } />
                                    {(ary[index + 1] !== undefined) ? <Formation key={ary[index + 1].id} formation={ary[index + 1]} cssClass={rightCssClass} save={self.modifArticle}  /> : "" }
                                </div>
                         );
                        return acc;
                    }, [])}

                   {/*  {
                        self.state.formations.map((formation) => {
                                return (
                                    <div className="row" key={"row"+item.id}>
                                        <Formation key={formation[0].id} formation={formation[0]} cssClass={ leftCssClass } />
                                        {(formation.length === 2) ? <Formation key={formation[1].id} formation={formation[1]} cssClass={rightCssClass} /> : "" }
                                    </div>
                                )
                           
                        })
                    }  */}
                   
                  
                </div>
            </section>
        );
    }
}

export default Formations;