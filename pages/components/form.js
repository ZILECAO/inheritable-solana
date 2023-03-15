const Form = ({ field, onChangeFunc, placeholder, styling }) => {

  styling = "text-left rounded-sm text-zinc-400 p-1 bg-zinc-800 focus:bg-white focus:text-black " + styling;
  return (
    (<textarea className={styling} onChange={onChangeFunc} type="text" value={field} placeholder={placeholder} />)
  )
}

export default Form;