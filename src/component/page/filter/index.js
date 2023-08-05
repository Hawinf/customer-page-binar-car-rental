
import React ,{ useState }from "react";
import './filter.css';




// menggunakan regex untuk currency
// const currencyFormat = (num) => {
//   return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
// }

// atau dengan dibawah ini
// const currencyFormat = (x) => {
//   return x.toString()replace.(/\B(?=(\d{3})+(?!\d))g, ".");
// }

const Filter = (filterData) => {
  // console.log(filterData)
  const [active, setActive] = useState(false);

  const openOverlay = () => {
    setActive(true);
  }
  const closeOverlay = () => {
    setActive(false);
  }
  
  

    return (

  
<>
    {/* <div className={`overlay-bg ${active ? 'menu-active' : ''}`} /> */}
    {/* <div className="container"  > */}
      <div className="row">
        <div className="col">
          <form className="form d-flex"  onSubmit={filterData.getData}>

          
            <div className="col-lg-2">
              <div className="kartu">
                <label
                  className="d-block mb-2"
                  htmlFor=""
                >
                  Nama Mobil
                </label>
                <input type="text" className="form-1" ref={filterData.namaMobil} />
              </div>
            </div>

            <div className="col-lg-2">
              <div className="kartu-1 ">
                <label className="judul" htmlFor="" >
                  Kategory
                </label>
                <select ref={filterData.category} className="form-1">
                <option value="" hidden>Masukan Kapasitas Mobil</option>
                  <option value="small">2 - 4 Orang</option>
                  <option value="medium">4 - 6 Orang</option>
                  <option value="large">6 - 8 Orang</option>
                </select>
              </div>
            </div>

            <div className=" col-lg-2">
              <div className="kartu-2">
                <label className="judul-2" htmlFor="">
                  Harga
                </label>
                <select ref={filterData.harga} className="form-1">
                  <option value="" hidden>Masukan Harga Sewa per Hari</option>
                  <option value="small">{'< Rp. 400.000'}</option>
                  <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                  <option value="large">{'> Rp. 800.000'}</option>
                </select>
              </div>
            </div>

            <div className=" col-lg-2">
              <div className="kartu-3">
                <label className="judul-3" htmlFor="">
                  Status
                </label>
                <select ref={filterData.statusOrder} className="form-1">
                  <option value="" hidden>Disewa</option>
                  <option value="true">Tersedia</option>
                  <option value="false">Disewa</option>
                </select>
              </div>
            </div>

            <div className="col-lg-2 ">
              <div  className="cari-mobil "  >
                <button className="btn btn-success" type="submit" >
                  Cari Mobil
                </button>
              </div>
            </div>

         
          </form>
          

          
       </div>
       {/* </div> */}
      
  </div>
  </>
    )
}

export default Filter