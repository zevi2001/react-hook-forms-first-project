import { useForm } from "react-hook-form";
interface FormData {
  userName: string;
  email: string;
  password: string;
}

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
    console.log("Form submitted successfully");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("userName", {
            required: "userName is required",
            minLength: {
              value: 2,
              message: "to short",
            },
          })}
          type="text"
          id="username"
          name="userName"
          placeholder="Enter UserName"
        />
        {errors.userName && <p>{`${errors.userName.message}`}</p>}
      </div>
      <div>
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i,
              message: "Invalid email address",
            },
          })}
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}
      </div>
      <div>
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "password most be 8 characters",
            },
          })}
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        {errors.password && <p>{`${errors.password.message}`}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}

export default RegularForm;
