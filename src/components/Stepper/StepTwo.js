import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import // setPais,
// setEstado,
// setCidade,
// setComplemento,
// setEndereco,
// setNomeEmpresa,
'../../store/modules/host/actions';

const useStyles = makeStyles({
  margin: {
    margin: '10px 0',
  },
});

export default function StepOne() {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const host = useSelector(state => state.host);
  const [pais, setPais] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [endereco, setEndereco] = useState();
  const [complemento, setComplemento] = useState();
  const [nomeEmpresa, setNomeEmpresa] = useState();

  useEffect(() => {
    setPais(host.anfitriao.pais);
    setCidade(host.anfitriao.cidade);
    setEstado(host.anfitriao.estado);
    setEndereco(host.anfitriao.endereco);
    setComplemento(host.anfitriao.complemento);
    setNomeEmpresa(host.anfitriao.nomeEmpresa);
  }, [host.anfitriao]);

  useEffect(() => {
    host.anfitriao.pais = pais;
    host.anfitriao.cidade = cidade;
    host.anfitriao.estado = estado;
    host.anfitriao.endereco = endereco;
    host.anfitriao.complemento = complemento;
    host.anfitriao.nomeEmpresa = nomeEmpresa;
  });

  return (
    <form>
      <div className={classes.margin}>
        <input
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="País"
          value={pais}
          onChange={e => setPais(e.target.value)}
        />
      </div>
      <div className={classes.margin}>
        <input
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Estado"
          value={estado}
          onChange={e => setEstado(e.target.value)}
        />
      </div>
      <div className={classes.margin}>
        <input
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Cidade"
          value={cidade}
          onChange={e => setCidade(e.target.value)}
        />
      </div>
      <div className={classes.margin}>
        <input
          type="endereco"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Endereço"
          value={endereco}
          onChange={e => setEndereco(e.target.value)}
        />
      </div>
      <div className={classes.margin}>
        <input
          type="Complemento"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Complemento"
          value={complemento}
          onChange={e => setComplemento(e.target.value)}
        />
      </div>
      <div className={classes.margin}>
        <input
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Nome da Empresa/ONG"
          value={nomeEmpresa}
          onChange={e => setNomeEmpresa(e.target.value)}
        />
      </div>
    </form>
  );
}
