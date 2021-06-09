import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const About = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid 
                container  
                direction='row'
                justify="center"
                alignItems="center"
                textAlign="center"
                spacing={3}
            >
                <Grid item xs>
                <h1>About Me</h1>
                <br></br>
                <div className="card outer-card p-4 m-4">
                    <h2>History</h2>
                    <br></br>
                    <div className="card container-fluid">
                        <p>Camille's Corner started back in the summer of 2019 when Camille first moved to NYC for an internship. Sitting behind a screen all day in the middle of a giant concrete jungle made her long for the proper outdoors. Hopelessly stuck between being drawn to the cliture of cities and the allure of Mother Nature, Camille decided to bridge the two worlds through adventure and discovery, adopting a digital nomad life that took her across the country. The name of the blog comes from the corner in her room where Camille hung up tapestries that depicted beautifli landscapes juxtaposed against her Soho apartment. The goal of Camille's Corner is to show others that in every city, nature offers an escape, and no one has to choose only one world.</p>
                </div></div>
                <div className="card outer-card p-4 m-4">
                    <h2>About Camille</h2>
                    <br></br>
                    <div className="card container-fluid">
                        <p>Camille is a recent college graduate from UVA currently traveling from city to city exploring what urban life offers while taking advantage of any opportunity to get back to the great outdoors. Educated as a chemical engineer, Camille threw that into the wind to pursue software development and adventure. Exclusively working for new start-ups as a freelancer, she has been able to have extended stays in NYC, Denver, SF, Seattle, and Barcelona. She hopes to go next to Austin or London, but, in truth, with her, you never know where she'll be next. Known to be spontaneous and indecisive, Camille chose this life because it allows her to explore every option that life provides. She loves being a digital nomad because each new city brings new stories and opportunities. She never realized that documenting this way of life wolid garner such a large following for which she is gratefli every day. Her goal is to promote adventures and positivity. One day she hopes to go to every national park.</p>
                </div></div>
                <div className="card outer-card p-4 m-4">
                    <h2>Fun Facts</h2>
                    <br></br>
                    <div className="card container-fluid">
                        <ul>
                            <li>Her hobbies include hiking, climbing, yoga, snowboarding, and anything with music.</li>
                            <li>She is a Virgo Libra cusp.</li>
                            <li>Best parts of nature: trees, mountains, and rivers</li>
                            <li>Best parts of cities: music and rooftops</li>
                        </ul>
                </div></div>
                </Grid>
                <Grid item xs>
                    <div className="card outer-card p-4 m-4">
                        <img src="https://media.discordapp.net/attachments/364210318190051328/852278647742398464/unknown.png?width=465&height=621"/>
                    </div>
                </Grid>
            </Grid>
      </div>
    )
}

export default About
