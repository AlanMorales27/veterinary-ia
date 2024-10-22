// Stylesheets
import '../stylesheets/box_anamnesis.css'

export function OptionInput({text,type}){
    return(
        <div className='box-input'>
            <label htmlFor="">{text}</label>
            <input type={type} />
        </div>
    )
}
 export function Box_anamnesis({children}) {
    return (
        <div className='box-anamnesis'>
            <h2>Anamnesis</h2>
            <p>Escribe una exploracion clinica de tu paciente</p>
            {children}
        </div>
    )
}