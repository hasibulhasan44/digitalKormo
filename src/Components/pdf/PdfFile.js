import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Pdf from "react-to-pdf";
const ref = React.createRef();

export default function PdfFile() {
  const data = useLoaderData();
  const {img, name, rating, price, details} = data;
  const { myStyle } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex">
      <div className="w-3/4 mx-auto" ref={ref}>
          <div>
          <img className="rounded-lg" src={img} alt=""></img>
          </div>
          <div>
            <h2 className="text-xl">Name: <span className="font-bold">{name}</span></h2>
            <div className="flex mt-4">
              <p>Rating: {rating}</p>
              <p className=" ml-12">Price: ${price}</p>
            </div>            

            <div className="mt-4">
              <p>Details: {details.description}</p>
            </div>
          </div>
      </div>


      <Pdf className="flex" targetRef={ref} filename={`${name}.pdf`}>
        {({ toPdf }) => <ArrowDownTrayIcon onClick={toPdf}className="h-12 w-12 lg:mr-8 lg:mt-4 mx-auto text-red-600 "></ArrowDownTrayIcon>}
      </Pdf>
    </div>
  );
}