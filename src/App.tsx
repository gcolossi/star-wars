import { getByDisplayValue } from "@testing-library/dom";
import React, { useEffect, useState } from "react";
import { genericController, PageData } from "./api/generic-api";
import { People } from "./api/schemas/people";
import { Vehicle } from "./api/schemas/vehicle";
import { Detalhe } from "./api/components/detalhe/detalhe";
import { Film } from "./api/schemas/films";
import "./style.css";

export const App = () => {
    return (
      <Detalhe<Film> id ={2} controller = {"films"}/>

    












 /* 
  //VEHICLE
  const { getByPartialName } = genericController<Vehicle>("vehicles");
  const [vehicle, setVehicle] = useState<Vehicle[]>();
  //PEOPLE
  const { getAll } = genericController<People>("people");
  const [people, setPeople] = useState<People[]>();
  const [page, setPage] = useState<PageData>();
  useEffect(() => {
    getByPartialName("a", 1).then((valor) => {
      setVehicle(valor.dados);
    });
    getAll(1).then((valor) => {
      setPeople(valor.dados);
      setPage(valor.page);
    });
  }, []);

  if (people && vehicle) {
    return (
      <>
        {vehicle.map((vehicle) => (
          <div>{vehicle.vehicle_class}</div>
        ))}
        <div>
          Paginação Anterior: {page?.anterior} - Próximo {page?.proximo}
        </div>
        {people.map((person) => (
          <div>{person.name}</div>
        ))}
      </>
    );
  } else {
    return <div></div>;
  }
*/
  
    const [schema, setSchema] = useState<People>();
    const {getById} = genericController<People>('people');
    useEffect(()=> {

    getById(1).then(valor=>setSchema(valor));

    },[])
    return (
        <div> {schema?`O personagem ${schema.name} é do sexo: ${schema.gender}`:null}</div>
    )
    )
    
};
