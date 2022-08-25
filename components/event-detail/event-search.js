import React, { useRef } from "react";
import Button from "../UI/Button";

const EventSearch = (props) => {
  const inputMonthRef = useRef();
  const inputYearRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    const year = inputYearRef.current.value;
    const month = inputMonthRef.current.value;

    props.onSearch(year, month);
  };
  return (
    <form
      className="my-8 mx-auto shadow bg-white rounded-md w-[90%] max-w-2xl flex justify-between flex-col gap-4 md:flex-row p-2"
      onSubmit={submitHandler}
    >
      <div className="w-full flex gap-4 flex-col md:w-[80%] md:flex-row">
        <div className="flex-1 flex gap-4 items-center justify-between">
          <label htmlFor="year" className="font-bold">
            Year
          </label>
          <select
            id="year"
            className="bg-white rounded-md w-[70%] p-1 md:w-full"
            ref={inputYearRef}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="flex-1 flex gap-4 items-center justify-between">
          <label htmlFor="month" className="font-bold">
            Month
          </label>
          <select
            id="month"
            className="bg-white rounded-md w-[70%] p-1 md:w-full"
            ref={inputMonthRef}
          >
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sept</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Find</Button>
    </form>
  );
};

export default EventSearch;
