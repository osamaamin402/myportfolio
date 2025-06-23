import { useEffect } from "react";

export default function Footer() {

    useEffect(() => {
        const handleScrollUp = () => {
            const scrollUp = document.getElementById("scroll-up");
            if (!scrollUp) return;
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScrollUp);

        // Clean up on component unmount
        return () => {
            window.removeEventListener("scroll", handleScrollUp);
        };
    }, []);

    return (
        <>
          
            <div className="container-fluid  py-4 footer-shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center mb-3 mb-md-0">
                            &copy; <a className="border-bottom text-secondary" href="#home">osamaamin402</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center ">
                           
                            Designed By <a className="border-bottom text-secondary" href="#home">Osama Amin Khan</a>
                        </div>
                    </div>
                </div>
            </div>
       

    </>
  );
}
