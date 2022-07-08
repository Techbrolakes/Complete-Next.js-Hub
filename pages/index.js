import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/table";
import Form from "../components/form";
import { useState } from "react";

export const Home = () => {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(!visible);
  };
  return (
    <main className="py-5">
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Employee Management
      </h1>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button
            onClick={handler}
            className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800"
          >
            Add Employee{" "}
            <span className="px-1">
              <BiUserPlus size={23}></BiUserPlus>
            </span>
          </button>
        </div>
      </div>

      {/* collapsable form */}
      {visible ? <Form></Form> : <></>}

      {/* table */}
      <div className="container mx-auto">
        <Table></Table>
      </div>
    </main>
  );
};

export default Home;
