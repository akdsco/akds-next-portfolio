* * *

#### Description

Building web applications for shops to sell grocery products online and deliver 
them locally within 90 minutes.

#### Technology stack

Stack:
- [ReactJS](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Node.js](https://nodejs.org/en/)

#### Achievements

- implemented new designs which improved store application and user experience
- added functionality for store app users to receive push notifications, when
new purchase orders are created for the store.
- improved application reliability by removing known bugs
- fixed asynchronous code problems in the client app, that resulted in a robust
and reliable store search experience for each user
- re-implemented user authentication and login process to make sure it is always
reliable and secure
- implemented new cart and added functionalities which drastically improved the
user experience and perception of the brand

#### Links

[Live App](https://wutzu.com/)

#### Code examples

These are some snippets of my code as I can't share the whole project due to NDA.
I hope this should give some insight into the quality of my code. 

- A Node.js cloud function that removes products (for refund) or re-adds them to the order

```js
function updateOrderProducts(req, res) {
  const body = JSON.parse(req.body);
  const { idToken, selectedItems, orderID, value } = body;

  if (
    !(
      idToken !== undefined &&
      selectedItems !== undefined &&
      orderID !== undefined &&
      value !== undefined
    )
  ) {

  send(res, 400, {
      error: "Missing or invalid parameter in updateOrderProducts",
    });
  }
  
  // authenticate request
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(async (decodedToken) => {
      let uid = decodedToken.uid;
      const snapshot = await admin
        .database()
        .ref("wutzu_orders")
        .child(orderID)
        .once("value");

      const order = snapshot.val();

      if (!snapshot.exists() || uid !== order.stores[0].storeid) {
        send(res, 403, {
          error: "You don't have permission to do that",
        });

        return;
      }
      
      Promise.all(
        order.stores[0].orderContents.map(async (product, index) => {
          return new Promise((resolve, reject) => {
            selectedItems.map(async (selectedProduct) => {
              if (
                selectedProduct.id ===
                (product.product.wutzu_id
                  ? product.product.wutzu_id
                  : product.product.UPC)
              ) {

                return await admin
                  .database()
                  .ref(
                    `wutzu_orders/${orderID}/stores/0/orderContents/${index}/isRefunded`
                  ).set(value);
              }
            });
            resolve();
          });
        })
      ).then(() => {
        send(res, 200, {
          message: `${value ? "Refund" : "Re-add"} successful!`,
        });
      });
    })

    .catch((err) => {
      send(res, 500, {
        error: `Authentication token could not be verified. Please try again`,
      });
      console.log(err);
    });
}
```