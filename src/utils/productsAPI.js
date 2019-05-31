import axios from "axios";

export default {
  createProduct: function(newProductInformation) {
    return axios
      .post("/api/products/create", newProductInformation)
      .catch(err => console.log(err));
  },

  readProducts: function() {
    return axios.get("/api/products").catch(err => console.log(err));
  },

  updateProducts: function(id, newProductInformation) {
    return axios.put("/api/products/update/" + id, newProductInformation);
  },

  deleteProduct: function(id) {
    return axios.delete("/api/products/delete/" + id);
  },
};
