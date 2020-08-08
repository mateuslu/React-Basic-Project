import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavHeader from '../../components/NavHeader'
import MyCards from '../../components/MyCards'
import MyFooter from "../../components/MyFooter"

const useStyles = makeStyles((theme) => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },

}));

const cards = [
    {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2016/04/20/19/47/wolf-1341881_960_720.jpg",
        title: "Lobo das Neves",
        description: "Lobo caçando nas neves do Canada"
    },
    {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173_960_720.jpg",
        title: "Lobo das Montanha",
        description: "Lobo dos Andes"
    },
    {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2017/02/06/16/17/wolf-2043464_960_720.jpg",
        title: "Lobo dos olhos verdes",
        description: "Raro lobo dos olhos verdes"
    },
    {
        id: 4,
        image: "https://cdn.pixabay.com/photo/2019/09/22/18/12/wolf-4496659_960_720.jpg",
        title: "Lobo da Floresta",
        description: "Lobo das florestas do Canada"
    }
];


function App() {
    const classes = useStyles();



    return (
        <>
            <NavHeader />
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Projeto React
            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s
            </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Doar
                  </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Trabalho voluntario
                  </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <MyCards data={cards} />
                </Container>
            </main>
            {/* Footer */}
            <MyFooter />
            {/* End footer */}
        </>
    );
}

export default App;
