import axios from "axios";
import { useEffect } from "react";

export const MakeOrder = () => {
  useEffect(() => {
    axios
      .post(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/orders",
        {
          id: 0,
          companyId: 2000,
          created: "2022-03-29T11:00:00",
          createdBy: "The master",
          paymentMethod: "Diamanter",
          totalPrice: 9999,
          orderRows: [],
          status: -1,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return <></>;
};
