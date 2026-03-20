import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = ({ setUsers }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
//   console.log(errors);
  let handleFromSubmit = (data) => {
    // console.log(data);
    // Never change old state, always create new state
    setUsers((prev) => [...prev, data]);

    
    reset();
  };
  return (
    <div className="h-[90%] flex flex-col gap-10 justify-center items-center mt-2">
      <h1 className="text-3xl font-bold">Add a user</h1>
      <form
        onSubmit={handleSubmit(handleFromSubmit)}
        className="border-3 flex w-[30%] flex-col gap-6 border-yellow-500 rounded-xl p-8"
      >
        <input
          {...register("name", { required: "Employee name is required" })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="text"
          placeholder="Employee name"
        />
        {errors.name &&<p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", { required: "Employee email is required" })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="email"
          placeholder="Employee Email"
        />
        {errors.email &&<p className="text-red-500">{errors.email.message}</p>}
        
        <input
          {...register("mobile", {
            required: "Employee mobile is required",
            minLength: {
              value: 10,
              message: "minimun 10 digit required",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 digit required",
            },
          })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="number"
          placeholder="Employee Mobile"
        />
        {errors.mobile &&<p className="text-red-500">{errors.mobile.message}</p>}
        <input
          {...register("designation", {
            required: "Employee designation is required",
          })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="text"
          placeholder="Employee Designation"
        />
        {errors.designation && <p className="text-red-500">{errors.designation.message}</p>}
        <input
          {...register("emp_id", { required: "Employee id is required" })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="text"
          placeholder="Employee Id"
        />
        {errors.emp_id && <p className="text-red-500">{errors.emp_id.message}</p>}
        <div className="flex gap-10">
          <div className="flex gap-5">
            <p className="text-xl">Manager</p>
            <input {...register("role", {required: "Role is required" })} type="radio" value="manager" />
          </div>
        
          <div className="flex gap-5">
            <p className="text-xl">Employee</p>
            <input {...register("role")} type="radio" value="employee" />
          </div>
        </div>
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        <button className="bg-blue-400 text-white py-3 text-xl rounded-xl cursor-pointer transition">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
