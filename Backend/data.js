import { data } from "./assets.js";
import { run } from "./db/db.js";
import Item from "./models/productmodel.js";



export const start = async () => {
  try {
    await run();
   const result =  await Item.insertMany(data , {ordered : false});
    console.log("success ✅");
  } catch (error) {
    console.log(error);
  }
};
