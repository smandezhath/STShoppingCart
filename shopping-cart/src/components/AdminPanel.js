import React from "react";
import "./ap.css";


const AdminPanel = () => {
  return (
    <>
      <form className="form-horizontal">
        <fieldset>
          
          <div class="c1">
          <h1> ShopC    Merchandise</h1>
          </div>
          <h3>ADD PRODUCT</h3>
          <div className="form-group">
            <label className="col-md-4 control-label" for="product_name">
              Product Name :
            </label>
            <div class="col-md-4">
              <input
                id="product_name"
                name="product_name"
                placeholder="eg : Iphone 14 plus"
                className="form-control input-md"
                required=""
                type="text"
              />
            </div>
          </div>

          <div class="form-group">
            <label className="col-md-4 control-label" for="product_description">
              Product Description :
            </label>
            <div class="col-md-4">
              <textarea
                className="form-control"
                id="product_description"
                name="product_description"
                placeholder="Describe Your Product"
              ></textarea>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" for="product_id">
              Quantity :
            </label>
            <div className="col-md-4">
              <input
                id="product_id"
                name="product_id"
                placeholder="eg : 100"
                className="form-control input-md"
                required=""
                type="text"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" for="filebutton">
              Product Image :
            </label>
            <div class="col-md-4">
              <input
                id="filebutton"
                name="filebutton"
                className="input-file"
                type="file"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4">
              <button 
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary">Add Product</button>
            </div>
          </div><br/>
          <br/>
          <br/>

          <div>
            <h3>PRODUCT STATUS</h3>
            </div>
            <div className="form-group">
            <label className="col-md-4 control-label" for="product_name">
              Product Name :
            </label>
            <div class="col-md-4">
              <input
                id="product_name"
                name="product_name"
                placeholder="eg : Iphone 14 plus"
                className="form-control input-md"
                required=""
                type="text"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4">
              <button 
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary">Check Status</button>
            </div>
          </div>

        </fieldset>
      </form>
    </>
  );
};

export default AdminPanel;