import { useForm } from "react-hook-form";

export const Form = () => {
    const { register, handleSubmit, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();

        if (!isValid) {
            e.preventDefault();
        }        
    }    

    return (
        <form
            target="_blank"
            onSubmit={onSubmit}
            action=""
            method="POST"
        >
            <input 
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text" 
                placeholder="NAME"
                {...register("name", {
                    required: true,
                    maxLength: 20
                })}
            />
            {errors.name && (
                <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is required"}
                    {errors.name.type === "maxLength" && "Max length is 20 char."}
                </p>
            )

            }

            <input 
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text" 
                placeholder="EMAIL"
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
            />
            {errors.email && (
                <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" && "This field is requited"}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </p>
            )}



            <textarea 
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                    required: true,
                    maxLength: 2000,
                })}
            />
            {errors.message && (
                <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" && "This field is required"}
                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </p>
            )}

            <button type="submit" className="uppercase rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white text-lg">
                send
            </button>

        </form>
    );
}

export default Form;