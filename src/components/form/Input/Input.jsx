const Input = ({name , id , value , type , label , change}) => {
    return(
        <>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name">{label} </label>
                    <input
                        onChange={change}
                        autoComplete={'off'}
                           id={id} type={type}
                           value={value}
                        name={name}
                           className="form-input w-full  text-gray-800"
                           placeholder={`Enter your ${name}`}
                           required />
                </div>
            </div>

        </>
    )
}

export default Input