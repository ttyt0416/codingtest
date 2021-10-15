import React, { useState, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { addHeader, resetHeader } from "../Modules/header/header.reducer";
import { addModal, showModal } from "../Modules/modal/modal.reducer";
import { addCart } from "../Modules/cart/cart.reducer";

//import axios for get data from beerlist api
import axios from "axios";

//import components from material-table
import MaterialTable from "material-table";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import { AddShoppingCart } from "@material-ui/icons";

import Modal from "../components/modal/modal";

//styled button by styled component
const BeerListResetButton = styled.div`
  color: black;
  backgruond-color: white;
  font-size: 15px;
  line-height: 1.5;
  border: 1px solid black;
  border-radius: 10px;
  width: 5%;
  text-align: center;
  position: absolute;
  top: 12%;
  left: 10%;
  cursor: pointer;
  padding: 5px 10px;
`;

const ToggleFilterButton = styled.div`
  color: black;
  background-color: white;
  font-size: 15px;
  line-height: 1.5;
  border: 1px solid black;
  border-radius: 10px;
  width: 7%;
  text-align: center;
  position: absolute;
  top: 12%;
  left: 20%;
  cursor: pointer;
  padding: 5px 10px;
  white-space: nowrap;
`;

const FilterContainer = styled.div`
  position: absolute;
  text-align: center;
  z-index: 10;
  width: 100px;
  height: 200px;
  top: 12%;
  left: 20%;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const FilterCheckbox = styled.input`
  color: black;
`;

const FilterLabel = styled.label`
  color: black;
  font-size: 12px;
`;

const FilterButton = styled.div`
  font-size: 12px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 5px 7px;
  margin-bottom: 5px;
`;

const Beerlist = () => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState([]);
  const [filterBox, setFilterBox] = useState(false);
  const column = [
    {
      title: "name",
      field: "name",
      render: (row) => (
        <div
          onClick={() => {
            dispatch(addModal(row));
            dispatch(showModal());
          }}
          style={{ cursor: "pointer" }}
        >
          {row.name}
        </div>
      ),
    },
    { title: "contributed by", field: "contributed_by" },
    { title: "first brewed", field: "first_brewed" },
    { title: "tagline", field: "tagline" },
    { title: "ph", field: "ph" },
    { title: "abv", field: "abv" },
  ];
  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
  };
  const filterRef = useRef([]);
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header.header);
  const modal = useSelector((state) => state.modal.visible);
  let filteredData = [];

  //function for dispatch order changed header data to header redux
  const OnOrderChanged = () => {
    let beerHeaderList = [];
    const beerNow = document.querySelectorAll(".MuiTableSortLabel-root> div");
    for (let i = 0; i < beerNow.length; i++) {
      if (beerNow[i].innerText !== "name") {
        beerHeaderList.push({
          title: beerNow[i].innerText,
          field: beerNow[i].innerText.replace(" ", "_"),
        });
      } else {
        beerHeaderList.push({
          title: beerNow[i].innerText,
          field: beerNow[i].innerText.replace(" ", "_"),
          render: (row) => (
            <div
              onClick={() => {
                dispatch(addModal(row));
                dispatch(showModal());
              }}
              style={{ cursor: "pointer" }}
            >
              {row.name}
            </div>
          ),
        });
      }
    }
    dispatch(addHeader(beerHeaderList));
  };

  //function for reset order of header
  const resetOrderOfHeader = () => {
    dispatch(resetHeader());
  };

  //function to call api data by axios
  const getBeerData = async () => {
    const beerData = await axios.get("https://api.punkapi.com/v2/beers");
    setData(beerData.data);
  };

  const toggleFilter = () => {
    setFilterBox(!filterBox);
  };

  //function for filtering data when click filterbutton
  const activateFilter = () => {
    setFilter([]);
    for (let i = 0; i < filterRef.current.length; i++) {
      if (filterRef.current[i].checked === true) {
        let filterValue = filterRef.current[i].value;
        if (filterValue < 11) {
          filteredData.push(
            data.filter(
              (data) =>
                filterValue <= Math.floor(data.abv).toFixed(0) &&
                filterValue + 1 > Math.floor(data.abv).toFixed(0)
            )
          );
        } else {
          filteredData.push(data.filter((data) => filterValue <= data.abv));
        }
      }
    }
    if (filteredData.length >= 2) {
      for (let i = 1; i < filteredData.length; i++) {
        let concatedFilteredData = filteredData[0].concat(filteredData[i]);
        setFilter(concatedFilteredData);
      }
    } else if (filteredData.length === 1) {
      setFilter(filteredData[0]);
    }
    setFilterBox(false);
    return filteredData;
  };

  //function for reset filters when click resetbutton
  const resetFilter = () => {
    setFilter([]);
  };

  useEffect(() => {
    getBeerData();
  }, []);

  return (
    <>
      <MaterialTable
        columns={header.length === 0 ? column : header}
        data={filter.length === 0 ? data : filter}
        icons={tableIcons}
        onColumnDragged={OnOrderChanged}
        title="Beer List"
        actions={[
          (rowData) => {
            return {
              icon: AddShoppingCart,
              tooltip: "add to cart",
              onClick: () => {
                dispatch(
                  addCart({
                    id: rowData.id,
                    image_url: rowData.image_url,
                    name: rowData.name,
                  })
                );
              },
            };
          },
        ]}
        style={{ marginTop: "2%" }}
      ></MaterialTable>
      {modal ? <Modal /> : null}
      <BeerListResetButton onClick={resetOrderOfHeader}>
        Reset Order
      </BeerListResetButton>
      <ToggleFilterButton onClick={toggleFilter}>
        Filter By ABV
      </ToggleFilterButton>
      {filterBox === true ? (
        <FilterContainer>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="filterNumber"
              value="4"
              ref={(el) => (filterRef.current[0] = el)}
            />
            4-5
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="filterNumber"
              value="5"
              ref={(el) => (filterRef.current[1] = el)}
            />
            5-6
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="filterNumber"
              value="6"
              ref={(el) => (filterRef.current[2] = el)}
            />
            6-7
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="filterNumber"
              value="7"
              ref={(el) => (filterRef.current[3] = el)}
            />
            7-8
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="filterNumber"
              value="8"
              ref={(el) => (filterRef.current[4] = el)}
            />
            8-9
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="filterNumber"
              value="10"
              ref={(el) => (filterRef.current[5] = el)}
            />
            10-11
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="filterNumber"
              value="11"
              ref={(el) => (filterRef.current[6] = el)}
            />
            11+
          </FilterLabel>
          <FilterButton onClick={activateFilter}>Filter</FilterButton>
          <FilterButton onClick={resetFilter}>Reset</FilterButton>
        </FilterContainer>
      ) : null}
    </>
  );
};

export default Beerlist;
