import {
  OptionInput,
  Box_anamnesis,
} from "../components/anamnesis/BoxAnamnesis";
import ImportModels from "../components/fbxModels/ImportModels";

function FormIA() {
  return (
    <div>
      <Box_anamnesis>
        <textarea
          name=""
          id=""
          placeholder="El propietario reporta que el paciente fue llevado a otro centro medico donde fue diagnosticado con..."
        ></textarea>
      </Box_anamnesis>
      <Box_anamnesis>
        <OptionInput text="Especie" type="text" />
        <OptionInput text="Raza" type="text" />
        <OptionInput text="Sexo" type="text" />
        <OptionInput text="Raza" type="text" />
        <OptionInput text="Raza" type="text" />
      </Box_anamnesis>
      <ImportModels />
    </div>
  );
}

export default FormIA;
