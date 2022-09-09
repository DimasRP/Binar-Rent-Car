import { useState } from "react";
import { Footer, Navbar } from "views/components";
import OrderDetail from "./OrderDetail";
import OrderHeader from "./OrderHeader";
import OrderMethod from "./OrderMethod";
import OrderPayment from "./OrderPayment";
import OrderTicket from "./OrderTicket";

const Order = () => {
  const [activeStep, setActiveStep] = useState("method");

  const handleChangeActiveStep = (step = "") => {
    setActiveStep(step);
  };

  return (
    <main>
      <Navbar />
      <OrderHeader activeStep={activeStep} />
      {activeStep === "method" && <OrderDetail />}
      {activeStep === "method" && (
        <OrderMethod handleChangeActiveStep={handleChangeActiveStep} />
      )}
      {activeStep === "payment" && (
        <OrderPayment handleChangeActiveStep={handleChangeActiveStep} />
      )}
      {activeStep === "ticket" && <OrderTicket />}
      <Footer />
    </main>
  );
};

export default Order;
