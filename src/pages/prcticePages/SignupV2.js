import { useForm } from 'react-hook-form';
import './signupv2.css';

const SignupV2 = ()=>{
        const { register, handleSubmit, reset, formState:{ errors } } = useForm();

        const onSubmit = (data) => {
            console.log("Form submitted", data)
            reset()
        }
    return (
        <><div className='registration'>
                <h2>Registration form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='label'>username</label>
                    <input {...register('username', {required: true, maxLength: 20})} />
                    {errors.username && <p style={{color: "red"}}>Username required</p>}
                    <label className='label'>Gender Selection</label>
                    <select className="section" {...register("gender", {required: "Gender is required"})} >
                        <option value="" >Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <p style={{color: "red"}}>{errors.gender.message}</p>}
                    <label className='label'>Age</label>
                    <input type='number' {...register("age", {required: true})} />
                    {errors.age && <p style={{color: "red"}}>Age is required</p>}
                    <input className='submit' type='submit'/>
                </form>

        </div>
        </>
    )
}

export default SignupV2
