import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
export default function InputPassword(props) {
    const footer = (
        <>
            <Divider/>
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Au moin un caractere en miniscule</li>
                <li>Au moin un caractere en majuscule</li>
                <li>Au moin un chiffre</li>
                <li>Minimum 8 caracters</li>
            </ul>
        </>
    );

    return <Password 
            feedback={props.regex==null || props.regex===false ? false : true}
            footer={props.regex==null || props.regex===false ? null : footer}
            content={props.regex==null || props.regex===false ? <></> : null}
            required={props.regex==null || props.regex===false ? false : true}
            placeholder={props.placeholder}
            strongRegex={props.regex===true || props.regex!=null  ? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})':null}
            onChange={props.onChange}
            value={props.value} 
            ref={props.ref} 
            disabled={props.disabled==null || props.disabled===false ? false : true}
            toggleMask
        />
}