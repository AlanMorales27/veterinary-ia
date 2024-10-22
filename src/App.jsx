import React from 'react';
import { OptionInput, Box_anamnesis} from './components/box_anamnesis';
import GLTFModel from './three';

//Stylesheets
import './stylesheets/style.css'
import './fonts/fonts.css'
import { FBXLoader } from 'three/examples/jsm/Addons.js';

const App = () => {
  return (
    <div>
      <Box_anamnesis>
        <textarea
          name=""
          id=""
          placeholder="El propietario reporta que el paciente fue llevado a otro centro medico donde fue diagnosticado con...">
        </textarea>
      </Box_anamnesis>
      <Box_anamnesis>
        <OptionInput text="Especie" type="text"/>
        <OptionInput text="Raza" type="text"/>
        <OptionInput text="Sexo" type="text"/>
        <OptionInput text="Raza" type="text"/>
        <OptionInput text="Raza" type="text"/>
      </Box_anamnesis>
      <GLTFModel/>
    </div>
  );
};

export default App;
