import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

import {
  createHostRequest,
  createHostAddressRequest,
} from '../../store/modules/host/actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  steper: {
    width: '50%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    'Qual o tipo do seu projeto?',
    'Forneça alguns dados de sua empresa',
    'Escolha o seu plano',
    'Enviar para avaliação',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    case 3:
      return `Vamos analisar o perfil de sua empresa/ONG e enviaremos uma notificação com os detalhes dessa análise.
      A aprovação do seu projeto será baseada nas avaliações ja existentes em outras plataformas como: Booking, Facebook.`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const host = useSelector(state => state.host);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  const history = useHistory();

  function sendRequest() {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');

    dispatch(
      createHostRequest(token, {
        idPessoa: id,
        tipoEmpresa: host.anfitriao.tipoEmpresa,
        nomeEmpresa: host.anfitriao.nomeEmpresa,
      })
    );
    setTimeout(() => {
      dispatch(
        createHostAddressRequest(token, {
          idAnfitriao: host.anfitriao.id,
          cidade: host.anfitriao.cidade,
          estado: host.anfitriao.estado,
          pais: host.anfitriao.pais,
          endereco: host.anfitriao.endereco,
          complemento: host.anfitriao.complemento,
        })
      );
    }, 1000);
    setTimeout(() => {
      history.push('/main');
    }, 1000);
  }

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.steper}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Enviar' : 'Próximo'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            Obrigado por juntar-se ao grupo dos anfitriões!
          </Typography>
          <Button onClick={sendRequest} className={classes.button}>
            Finalizar
          </Button>
        </Paper>
      )}
    </div>
  );
}
