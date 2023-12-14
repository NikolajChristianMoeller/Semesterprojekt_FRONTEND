//TODO: set button group, enable ok button when input is enabled


export default function ProductTableAdmin({ products, deleteClicked, updateClicked, adjustStock }) {

  const handleClick = (event, product)=>{
    event.preventDefault()
    const input = document.getElementById(product.ID+"-stock")
    const submit = document.getElementById(product.ID+"-submit")
    if(input.disabled){
      input.disabled = false;
      event.target.textContent = "Cancel"
      // submit.disabled = true
      submit.classList.remove("hidden")
    } else {
      input.value = product.Stock
      input.disabled = true;
      event.target.textContent = "Adjust"
      // submit.disabled = false
      submit.classList.add("hidden")
    }
  }

  const handleSubmit = (e, product)=>{
    e.preventDefault();
    const form = e.target;
    adjustStock(product.ID, form.stock.value)
    form.stock.disabled = true;
    form.querySelector("button").textContent = "Adjust"
    form.querySelector("button:last-child").classList.add("hidden")
  }


  return (
    <table className="table table-light table-striped" id="product-list">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Produkt</th>
          <th scope="col">Stock</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.ID}>
            <th scope="row">{product.ID}</th>
            <td>{product.Name}</td>
            <td>
              <form onSubmit={(event)=>handleSubmit(event, product)}>
                <input className="form-control w-25" name="stock"id={product.ID+"-stock"} disabled defaultValue={product.Stock}/>
            <button className="btn btn-secondary ms-2" onClick={(event)=>handleClick(event, product)}>
              Adjust
            </button>
            <button role="submit" className="btn btn-success ms-2 hidden" id={product.ID+"-submit"}>
              OK
            </button>
              </form>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
                onClick={() => deleteClicked(product, "products")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
              </button>
              <button
                className="btn btn-info ms-2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#update-modal"
                onClick={() => updateClicked(product, "products")}
              >
                Update
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-recycle"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                </svg> */}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
