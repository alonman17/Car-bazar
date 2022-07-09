import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import Orders from "./pages/orders/Orders"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { orderInput, productInputs, userInputs } from "./formSource";
import { useEffect, useState } from "react";
import axios from "./api/axios";
import { userColumns, productColumns, orderColumns } from "./datatablesource"


function App() {


  const [productRows, setProductRows] = useState([]);
  const [userRows, setUserRows] = useState([]);
  const [orderRows, setOrderRows] = useState([]);

  useEffect(()=>{
    
  axios.get("/cars").then((res)=>{
    setProductRows(res.data);
 });

 axios.get("/users/all").then((res)=>{
   setUserRows(res.data);
 });

 axios.get("/orders/all").then((res)=>{
   setOrderRows(res.data);
 });

  }  ,[])



// const januaryStats = getAllOrdersInDateRange("01/01/2022", "01/02/2022");
// console.log( "januatu sold" + januaryStats);

//stats
const [weeklyErnings, setWeeklyErnings] = useState([]);
const [yearlySalesPerMonth , setYearlySalesPerMonth] = useState([]);
const [dailySales , setDailySales] = useState([]);
const [mostSoldCars , setMostSoldCars] = useState([]);

useEffect(()=>{
  axios.get("/statistics/weeklySales").then((res)=>{
    setWeeklyErnings(res.data);
  });

  axios.get("/statistics/yearlySalesPerMonth").then((res)=>{
    setYearlySalesPerMonth(res.data);
  });

  axios.get("/statistics/todaySales").then((res)=>{
    setDailySales(res.data);
  });

  
  axios.get("/statistics/mostSoldCars").then((res)=>{
    setMostSoldCars(res.data);
  });


  }  ,[])

  console.log(mostSoldCars);


  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home inputs={{userAmount: userRows.length, orderAmount: orderRows.length, erningsAmount: weeklyErnings.total, yearlySalesPerMonth: yearlySalesPerMonth, mostSoldCars: mostSoldCars}}/>} />
          <Route path="login" element={<Login />} />
          <Route path="users" >
            <Route index element={<List inputs={{title: "Add new User",link: "/users/new",dataRows:userRows, dataColumn:userColumns }}/> }/>
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add new User"/>} />
          </Route>
          <Route path="products" >
            <Route index element={<List inputs={{title: "Add new Product",link: "/products/new",dataRows: productRows, dataColumn: productColumns }}/>}/>
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add new Product"/>} />
          </Route>
          <Route path="orders" >
          <Route index element={<Orders inputs={{title: "Add new Order",link: "/orders/new",dataRows: orderRows, dataColumn: orderColumns }}/>}/>
          <Route path="new" element={<New inputs={orderInput} title="Add new Order"/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
