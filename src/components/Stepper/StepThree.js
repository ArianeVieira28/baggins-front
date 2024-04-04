import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function StepThree() {
  const [value, setValue] = useState('PlanoMensal');

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="plan"
          name="plan"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="PlanoMensal"
            control={<Radio color="primary" />}
            label="Plano Mensal"
          />
          <FormLabel component="legend">
            Escolhendo o plano mensal o valor será de 59,90/mês
          </FormLabel>
          <FormControlLabel
            value="PlanoAnual"
            control={<Radio color="primary" />}
            label="Plano Anual"
          />
          <FormLabel component="legend">
            Escolhendo o plano anual o valor será de 600,90/ano
          </FormLabel>
        </RadioGroup>
      </FormControl>
    </>
  );
}
