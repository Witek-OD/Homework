function Input({ placeholder, type , label , onChange}) {


    return (
        <>
            <label>
                {label && label}
                <input type={type} onChange={onChange} placeholder={placeholder}/>
            </label>
        </>

    );
}

export default Input;