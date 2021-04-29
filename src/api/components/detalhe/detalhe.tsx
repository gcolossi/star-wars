import { SWAPIEndpoint } from "../../generic-api";
import React from "react";
import { CircularProgress, Grid, Button } from "@material-ui/core";
import { getDetailData } from "../../controller-defs";
import { Field } from "./field";
import { useDetalhe } from "./use-detalhe"
import {People} from "../../schemas/people"
import { GenericSchema } from "../../schemas/generic-schema";


interface DetalheProps {
  id: number;
  controller: SWAPIEndpoint;
}

export const Detalhe = <T extends GenericSchema>(props: DetalheProps) => {
  const { id, controller } = props;
  const { isLoading, result, error } = useDetalhe<People>(id, controller);
  const colunas = getDetailData(controller);

  if (isLoading)
    return (
      <div className ={"centralizado"}>
        <CircularProgress />
      </div>
    );
  if (!result) return null;
  return (
    <Grid container direction={"column"} spacing={2} alignItems={"stretch"}>
      <Grid>
        {Object.entries(result)
          .filter((item) => {
            const [key] = item;
            return colunas?.find((campo) => campo === key);
          })
          .map((item) => {
            const [key, value] = item;
            return <Field nome={key} valor={value} />;
          })}
      </Grid>
      <Grid>
        <Button variant={"outlined"}>Voltar</Button>
      </Grid>
    </Grid>
  );
};
