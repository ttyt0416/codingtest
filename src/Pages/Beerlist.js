import React, { useState, useEffect, forwardRef } from "react";

//import axios for get data from beerlist api
import axios from "axios";

//import components from material-table
import MaterialTable from "material-table";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";

const Beerlist = () => {
  const [data, setData] = useState();
  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
  };

  const getBeerData = async () => {
    const beerData = await axios.get(" https://api.punkapi.com/v2/beers");
    setData(beerData.data);
  };

  console.log(data);

  useEffect(() => {
    getBeerData();
  }, []);

  return (
    <MaterialTable
      //transfort columns to redux for persistancy
      columns={[
        { title: "name", field: "name" },
        { title: "contributed by", field: "contributed_by" },
        { title: "first brewed", field: "first_brewed" },
        { title: "tagline", field: "tagline" },
        { title: "ph", field: "ph" },
        { title: "abv", field: "abv" },
      ]}
      data={data}
      icons={tableIcons}
      title="Beer List"
    ></MaterialTable>
  );
};

export default Beerlist;
