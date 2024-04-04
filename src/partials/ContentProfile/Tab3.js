import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Plus } from 'react-bootstrap-icons';
import { ContentAccount } from './styles';

export default function Tab3() {
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
        <Form className="row col-sm-12">
          <Form.Group controlId="formBasicEmail" className="col-md-1">
            <Form.Label>Ano</Form.Label>
            <Form.Control type="email" placeholder="2019-2020" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col-md-3">
            <Form.Label>Empresa</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col-md-3">
            <Form.Label>Cargo</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </Form>
        <div className="col-md-2 text-center save">
          <button type="button" className="btn btn-outline-secondary">
            Salvar
          </button>
        </div>
      </ContentAccount>
    </>
  );
}
