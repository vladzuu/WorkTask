import React, { useCallback, useState } from "react"
import Field from "./Field"
import { FormState, IFieldsProps } from "./types"
import './formBuilder.scss'


interface IFormBuilder {
  submitForm: (value: FormState) => void
  fields: IFieldsProps[]
}

const FormBuilder = ({ submitForm, fields }: IFormBuilder) => {
  const [result, setResult] = useState<FormState>({})

  const changeResult = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setResult((prevValues: FormState) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitForm(result)
  }

  const viewFields = fields.map((value) => <Field
    {...value}
    key={value.id}
    changeResult={changeResult}
  />)

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {viewFields}
      <button type="submit" >Submit</button>
    </form>
  )
}
export default FormBuilder