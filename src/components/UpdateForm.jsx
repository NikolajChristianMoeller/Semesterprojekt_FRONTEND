// TODO: add dropdown with only colors that exist in db
// TODO: finish form
// TODO: add dropdown with collection
// TODO: setup so you can add multiple collections and colors when updating

export default function UpdateForm({productToUpdate}){

    return(
        <div className="modal" id="update-modal" tabIndex="-1" aria-labelledby="update-modal" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen" >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="update-modal-label">Update {productToUpdate.Name} ({productToUpdate.ID})</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="row g-3">
                <div className="col-md-5">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="productPrice"/>
                </div>
                <div className="col-10">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="productDescription"/>
                </div>
                <div className="col-10">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-10">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </div>

    )

}