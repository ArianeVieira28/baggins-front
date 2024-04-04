import React from 'react';
import { ContentProfile } from './styles';

export default function Tab3() {
  return (
    <>
      <ContentProfile>
        <form>
          <div className="form-group col-md-6">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Nova Senha"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              placeholder="Confirmar Senha"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="password"
              className="form-control"
              id="actualpassword"
              placeholder="Senha atual"
            />
          </div>

          <div className="col-md-6 text-center">
            <button type="button" className="btn btn-outline-primary">
              Salvar
            </button>
          </div>
        </form>
      </ContentProfile>
    </>
  );
}
