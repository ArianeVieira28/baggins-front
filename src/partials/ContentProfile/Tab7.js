import React from 'react';
import { ContentAccount } from './styles';

export default function Tab7() {
  return (
    <>
      <ContentAccount>
        <form>
          <div className="form-group col-md-4">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Facebook"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Instagram"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Twitter"
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
