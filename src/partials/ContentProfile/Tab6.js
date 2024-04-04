import React from 'react';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';
import { ContentAccount } from './styles';

export default function Tab6() {
  return (
    <>
      <ContentAccount>
        <div className="buttons">
          <Button
            size="sm"
            className="col-md-1 col-sm-2"
            variant="outline-secondary"
          >
            Adicionar <Plus size={20} />
          </Button>
        </div>
        <form>
          <div className="form-group col-md-3">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Viajar"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Aprender alemão"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Surfar"
            />
          </div>
          <div className="col-md-2 text-center save">
            <button type="button" className="btn btn-outline-secondary">
              Salvar
            </button>
          </div>
        </form>
      </ContentAccount>
    </>
  );
}
