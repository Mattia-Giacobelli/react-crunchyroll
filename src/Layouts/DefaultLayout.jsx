import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function DefaultLayout() {



    return (

        <>

            <Header />

            <main>

                <Outlet />

                <Link className="portfolio btn btn-outline-warning" to={"https://portfolio-supabase.giacobelli-mattia12.workers.dev/projects/4"}>Portfolio</Link>

            </main>

            <Footer />

        </>
    )
}