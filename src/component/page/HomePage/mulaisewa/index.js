import './style.css';

const MulaiSewa = () => {
    return (
    <div className="bigcard" id='our-services'>
        <div className="container bgcardbg">
            <div className="bigcard-text col-lg-12">
                <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href={'/login'} className="btn btn-success">Mulai Sewa Mobil</a>
            </div>
        </div>
    </div>
    )
}

export default MulaiSewa
