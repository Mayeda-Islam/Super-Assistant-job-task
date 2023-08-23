/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import swal from "sweetalert";

const Home = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    swal("Good job!", "Your form submitted", "success");
    reset();
  };

  // const handleAnswerChange = (event) => {
  //   setAnswer(event.target.value);
  // };

  // const handleOptionChange = (option) => {
  //   if (selectedOptions.includes(option)) {
  //     setSelectedOptions(selectedOptions.filter((item) => item !== option));
  //   } else {
  //     setSelectedOptions([...selectedOptions, option]);
  //   }
  // };
  // console.log(watch("example"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="bg-white py-6 my-4 pl-10 pr-96 rounded-lg">
          {/* radio button */}
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="question">
              MCQ
            </label>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  className="form-radio mr-2 h-6 w-6"
                  value="Option 1"
                />
                Option 1
              </label>
            </div>
            {/* check box */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  className="form-radio mr-2 h-6 w-6"
                  value="Option 2"
                />
                Option 2
              </label>
            </div>

            {/* input */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  className="form-radio mr-2 h-6 w-6"
                  value="Option 3"
                />
                Option 3
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white py-6 my-4 pl-10 pr-96 rounded-lg ">
            <div className="mb-4">
              <label className="block font-bold mb-2">Checkbox Group:</label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register("checkbox1", {
                    required: "This is a required question",
                  })}
                  type="checkbox"
                  className="form-checkbox mr-2"
                />
                Option 1
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register("checkbox2", {
                    required: "This is a required question",
                  })}
                  type="checkbox"
                  className="form-checkbox mr-2"
                />
                Option 2
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register("checkbox3", {
                    required: "This is a required question",
                  })}
                  type="checkbox"
                  className="form-checkbox mr-2"
                />
                Option 3
              </label>
            </div>
            {errors.checkbox1 && errors.checkbox2 && errors.checkbox3 ? (
              <p className="text-red-500">This field is required</p>
            ) : null}
          </div>
        </div>
        <div className="bg-white py-6 my-4 pl-10 pr-96 rounded-lg ">
          <div className="mb-4">
            <label className="block font-bold mb-2">Short Answer:</label>
            <input
              type="text"
              className={`bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full py-2 px-3 placeholder-gray-400 ${
                errors.shortAnswer ? "border-red-500" : "" // Add red border on error
              }`}
              placeholder="Your answer"
              {...register("shortAnswer", {
                required: "This field is required",
              })}
            />
            {errors.shortAnswer && (
              <p className="text-red-500">{errors.shortAnswer.message}</p>
            )}
          </div>
        </div>
        {/* paragraph */}
        <div className="bg-white py-6 my-4 px-10  rounded-lg ">
          <div className="mb-4 ">
            <label className="block font-bold mb-2">Paragraph </label>
            <input
              type="text"
              className={`bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full py-2 px-3 placeholder-gray-400 ${
                errors.paragraph ? "border-red-500" : "" // Add red border on error
              }`}
              placeholder="Your answer"
              {...register("paragraph", { required: "This field is required" })}
            />
            {errors.paragraph && (
              <p className="text-red-500">{errors.paragraph.message}</p>
            )}
          </div>
        </div>
        {/* dropdown */}
        <div className="bg-white py-6 my-4 pl-10 pr-96 rounded-lg ">
          <div className="mb-4">
            <label className="block font-bold mb-3">
              Dropdown with Choose:
            </label>
            <select
              className={`block w-full border bg-white focus:outline-none focus:ring focus:border-blue-500 px-2 py-4 ${
                errors.dropdown ? "border-red-500" : "border-gray-300"
              }`}
              {...register("dropdown", { required: "Please select an option" })}
            >
              <option value="">Choose</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            {errors.dropdown && (
              <p className="text-red-500">{errors.dropdown.message}</p>
            )}
          </div>
        </div>
        {/* upload a file */}
        <div className="bg-white py-6 my-4 pl-10 pr-96 rounded-lg ">
          {" "}
          <div className="mb-4">
            <label className="block font-bold mb-4">Upload a File:</label>
            <Controller
              control={control}
              name="file"
              render={({ field }) => (
                <div className="flex items-center border rounded w-full px-2 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <label htmlFor="file" className="cursor-pointer">
                    Add File
                  </label>
                  <input id="file" type="file" {...field} className="hidden" />
                </div>
              )}
              rules={{ required: "This field is required" }}
            />
            {errors.file && (
              <p className="text-red-500">{errors.file.message}</p>
            )}
          </div>
        </div>

        {/* liner scale */}
        <div className="bg-white py-6 my-4 px-10  rounded-lg ">
          <div className="mb-4">
            <label className="block font-bold mb-4 ">Linear Scale</label>
            <div className="flex justify-between items-end">
              <span>Worst</span>
              <div className="flex justify-center space-x-16">
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <div key={index} className="flex flex-col gap-8 ">
                    <label className="text-xl" key={index}>
                      {" "}
                      {value}
                    </label>
                    <input
                      type="radio"
                      name="rating"
                      className="form-radio  h-6 w-6"
                      // value={value}
                      // checked={selectedValue === String(value)}
                      // onChange={handleValueChange}
                    />
                  </div>
                ))}
              </div>
              <span>Best</span>
            </div>
          </div>
        </div>

        {/* Tick box Grid
         * */}
        <div className="bg-white py-6 my-4   rounded-lg ">
          <div className=" mx-auto bg-white p-6 ">
            <label className="block font-bold mb-8">Multi choice Grid * </label>
            <table className="w-full ">
              <thead>
                <tr>
                  <th className=" p-2"></th>
                  <th className=" p-2">Column 1</th>
                  <th className=" p-2">Column 2</th>
                  <th className="p-2">Column 3</th>
                </tr>
              </thead>
              <tbody>
                {["Row 1", "Row 2", "Row 3"].map((row, index) => (
                  <tr
                    className="bg-gray-50 border-b-4 border-b-white  "
                    key={index}
                  >
                    <td className="mb-4 p-4">{row}</td>
                    <td className="text-center  p-4">
                      <input
                        type="radio"
                        name="rating"
                        className="form-radio  h-6 w-6"
                      />
                    </td>
                    <td className="text-center">
                      <input
                        type="radio"
                        name="rating"
                        className="form-radio  h-6 w-6"
                      />
                    </td>
                    <td className="text-center ">
                      <input
                        type="radio"
                        name="rating"
                        className="form-radio  h-6 w-6"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white py-6 my-4   rounded-lg ">
          <div className=" mx-auto bg-white p-6 ">
            <label className="block font-bold mb-8">Multi choice Grid * </label>
            <table className="w-full ">
              <thead>
                <tr>
                  <th className=" p-2"></th>
                  <th className=" p-2">Column 1</th>
                  <th className=" p-2">Column 2</th>
                  <th className="p-2">Column 3</th>
                </tr>
              </thead>
              <tbody>
                {["Row 1", "Row 2", "Row 3"].map((row, index) => (
                  <tr
                    className="bg-gray-50 border-b-4 border-b-white  "
                    key={index}
                  >
                    <td className="mb-4 p-4">{row}</td>
                    <td className="text-center  p-4">
                      <input
                        {...register(`checkboxRow${index}`, { required: true })}
                        type="checkbox"
                        className="form-checkbox h-6 w-6"
                      />
                    </td>
                    <td className="text-center">
                      <input
                        {...register(`checkboxRow${index}`, { required: true })}
                        type="checkbox"
                        className="form-checkbox h-6 w-6"
                      />
                    </td>
                    <td className="text-center ">
                      <input
                        {...register(`checkboxRow${index}`, { required: true })}
                        type="checkbox"
                        className="form-checkbox h-6 w-6"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {Object.keys(errors).some((key) =>
              key.startsWith("checkboxRow")
            ) && (
              <p className="text-red-500">
                Please select at least one option for each row
              </p>
            )}
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
