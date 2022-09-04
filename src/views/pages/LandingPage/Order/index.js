import { ScrollToTop } from "helpers/utils";
import { Footer, Navbar } from "views/components";
// import OrderDetail from "./OrderDetail";
import OrderHeader from "./OrderHeader";
import OrderTicket from "./OrderTicket";
// import OrderMethod from "./OrderMethod";
// import OrderPayment from "./OrderPayment";

const Order = () => {
  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <OrderHeader />
      {/* <OrderDetail /> */}
      {/* <OrderMethod /> */}
      {/* <OrderPayment /> */}
      <OrderTicket />
      <Footer />
    </main>
  );
};

export default Order;
