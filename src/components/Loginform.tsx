import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    username: string
    email: string
    password:string
  }
function Loginform() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return ( <> <input placeholder="Enter your email" {...register("email", { required: true })} />
    <input placeholder="Enter your password" {...register("password", { required: true })} />
    {/* errors will return when field validation fails  */}
    {(errors.email || errors.username ||errors.password)&& <span>This field is required</span>}

    <input type="submit" /></> );
}

export default Loginform;