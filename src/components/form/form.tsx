type FormProperties = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  setFormValue: React.Dispatch<React.SetStateAction<string>>,
  formValue: string,
}

export default function Form({handleSubmit, formValue, setFormValue}: FormProperties) {
  return (
    <form onSubmit={handleSubmit} className='flex justify-center mb-6 md:mb-12'>
      <input 
        type='text' 
        value={formValue} 
        onChange={(e) => setFormValue(e.target.value)} 
        className='w-[269px] h-[58px] md:min-w-[498px] rounded-l-2xl text-lg p-6' 
        placeholder='Search for any IP address or domain'
      />
      <button 
        type='submit' 
        className='w-[58px] h-[58px] bg-black bg-no-repeat bg-center bg-[url("./assets/icon-arrow.svg")] rounded-r-2xl'>
      </button>
    </form>
  )
}
