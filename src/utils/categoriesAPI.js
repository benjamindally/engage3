import axios from "axios";

export default {
  createCategory: function(newCategoryInformation) {
    return axios
      .post("/api/categories/create", newCategoryInformation)
      .catch(err => console.log(err));
  },

  readCategories: function() {
    return axios.get("/api/categories").catch(err => console.log(err));
  },

  updateCategories: function(id, newCategoryInformation) {
    return axios.put("/api/categories/update/" + id, newCategoryInformation);
  },

  deleteCategories: function(id) {
    return axios.delete("/api/categories/delete/" + id);
  },
};
