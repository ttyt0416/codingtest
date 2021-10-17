import React from "react";
import {
  ModalContainer,
  ModalImage,
  ModalContentContainer,
  ModalContents,
  ModalSpan,
  ModalStronger,
  ModalLighter,
  ModalDashedContainer,
  ModalClose,
} from "../../styles/components/modal/modal.styles";

import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../Modules/modal/modal.reducer";

const Modal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal.modal);
  const closeModal = () => {
    dispatch(hideModal());
  };
  return (
    <ModalContainer>
      <ModalClose onClick={closeModal}>X</ModalClose>
      <ModalImage alt="" src={modalData.image_url} />
      <ModalContentContainer>
        <ModalContents>
          <ModalStronger>Name: {modalData.name}</ModalStronger>
          <ModalStronger>First Brewed: {modalData.first_brewed}</ModalStronger>
          <ModalStronger>ABV: {modalData.abv}</ModalStronger>
          <ModalStronger>EBC: {modalData.ebc}</ModalStronger>
          <ModalStronger>IBU: {modalData.ibu}</ModalStronger>
          <ModalStronger>PH: {modalData.ph}</ModalStronger>
          <ModalStronger>SRM: {modalData.srm}</ModalStronger>
          <ModalStronger>Target FG: {modalData.target_fg}</ModalStronger>
          <ModalStronger>Target OG: {modalData.target_og}</ModalStronger>

          <ModalStronger>
            Boil Volume:{" "}
            {`${modalData.boil_volume.value} ${modalData.boil_volume.unit}`}
          </ModalStronger>
          <ModalStronger>
            Contributed By: {modalData.contributed_by}
          </ModalStronger>
          <ModalLighter>
            <ModalSpan>brewers tips: </ModalSpan>
            {modalData.brewers_tips}
          </ModalLighter>
          <ModalLighter>
            <ModalSpan>Description: </ModalSpan>
            {modalData.description}
          </ModalLighter>
          <ModalLighter>
            <ModalSpan>Tagline: </ModalSpan>
            {modalData.tagline}
          </ModalLighter>
          <ModalStronger>Food Pairing:</ModalStronger>
          <ModalDashedContainer>
            {modalData.food_pairing.map((data) => (
              <ModalLighter>{data}</ModalLighter>
            ))}
          </ModalDashedContainer>
        </ModalContents>
        <ModalContents>
          <ModalStronger>Ingredients:</ModalStronger>
          <ModalStronger style={{ textAlign: "center" }}>Hops</ModalStronger>
          {modalData.ingredients.hops.map((data) => (
            <>
              <ModalDashedContainer>
                <ModalLighter>name: {data.name}</ModalLighter>
                <ModalLighter>add: {data.add}</ModalLighter>
                <ModalLighter>
                  amount: {data.amount.value}
                  {data.amount.unit}
                </ModalLighter>
              </ModalDashedContainer>
            </>
          ))}
          <ModalStronger style={{ textAlign: "center" }}>Malt</ModalStronger>
          {modalData.ingredients.malt.map((data) => (
            <>
              <ModalDashedContainer>
                <ModalLighter>name: {data.name}</ModalLighter>
                <ModalLighter>
                  amount: {data.amount.value}
                  {data.amount.unit}
                </ModalLighter>
              </ModalDashedContainer>
            </>
          ))}
          <ModalStronger style={{ textAlign: "center" }}>Yeast</ModalStronger>
          <ModalLighter style={{ textAlign: "center" }}>
            {modalData.ingredients.yeast}
          </ModalLighter>
          <ModalStronger>Method:</ModalStronger>
          <ModalStronger style={{ textAlign: "center" }}>
            Fermentation
          </ModalStronger>
          <ModalDashedContainer>
            <ModalLighter>
              temp: {modalData.method.fermentation.temp.value}
              {modalData.method.fermentation.temp.unit}
            </ModalLighter>
          </ModalDashedContainer>
          <ModalStronger style={{ textAlign: "center" }}>
            Mash Temp
          </ModalStronger>
          <ModalDashedContainer>
            <ModalLighter>
              temp: {modalData.method.mash_temp[0].temp.value}
              {modalData.method.mash_temp[0].temp.unit}
            </ModalLighter>
            <ModalLighter>
              duration:{" "}
              {modalData.method.mash_temp[0].duration === null
                ? "not described"
                : modalData.method.mash_temp[0].duration}
            </ModalLighter>
          </ModalDashedContainer>
          <ModalStronger style={{ textAlign: "center" }}>Twist</ModalStronger>
          <ModalLighter style={{ textAlign: "center" }}>
            {modalData.method.twist === null
              ? "not described"
              : modalData.method.twist}
          </ModalLighter>
        </ModalContents>
      </ModalContentContainer>
    </ModalContainer>
  );
};

export default Modal;
