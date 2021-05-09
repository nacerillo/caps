"use strict";

thankYouHandler = (payload) => {
  console.log(`Thank you for delievering ${payload.orderID} `);
};

module.exports = { thankYouHandler };
