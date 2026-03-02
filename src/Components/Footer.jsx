import footerLogo from '../assets/footerLogo.png'


export default function Footer() {



    return (


        <>

            <footer>
                <div className="container-black d-flex justify-content-center">
                    <div className="d-flex justify-content-between align-items-center w-50">

                        <img src={footerLogo} alt="logo" />

                        <button className='btn btn-outline-light light-hover'>

                            <i class="bi bi-globe p-2"></i>
                            Italiano
                            <i class="bi bi-chevron-down p-2"></i>

                        </button>

                    </div>
                </div>
                <div className='footer-bcg d-flex justify-content-center align-items-center'>

                    <a className='footer-a' href="#">Termini di  utilizzo</a>
                    <a className='footer-a' href="#">Informativa privacy</a>
                    <a className='footer-a' href="#">Impostazione cookies</a>

                </div>

            </footer>

        </>
    )
}