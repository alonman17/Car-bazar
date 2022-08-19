import { darken } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import daniel from '../../assets/daniel.jpeg'



const Students = () => {
  return (
    <main>
      <Outlet />
      <div className="center_box">
        <h1>
          CAR BAZAR
        </h1>
      </div>
      <div className="partners_containers ">
        <div className="partners fade left">
          <b>Daniel Ohayon </b>
          <b>danielohayon420@gmail.com</b>
          <img id='student_image' src={daniel} alt='daniel' />
        </div>
        <div className="partners fade left" style={{top:'40vh'}}>
          <b>Rom Bardugo</b>
          <b>danielohayon420@gmail.com</b>
          <img id='student_image' src={daniel} alt='daniel' />
        </div>
        <div className="partners right fade">
          <b>Alon Manshari</b>
          <b>danielohayon420@gmail.com</b>
          <img id='student_image' src={daniel} alt='daniel' />
        </div>
          <div className="partners right fade" style={{top:'40vh'}}>
          <b>Shon Hazan</b>
          <b>danielohayon420@gmail.com</b>
          <img id='student_image' src={daniel} alt='daniel' />
        </div>
      </div>
    </main>
  );
};

export default Students;
