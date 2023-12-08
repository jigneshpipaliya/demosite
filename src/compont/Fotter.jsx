import { BiLogoFacebook , BiLogoTwitter , BiLogoPinterest} from "react-icons/bi";

const Fotter =()=>{
    return(
        <>
        <div className="mt-28 mb-16 mark6">
         <div className=" container  m-auto">
            <div className="grid grid-cols-4 justify-center">
                <div >
                    <h1 className=" font-semibold text-2xl mb-6">Company</h1>
                     <h1 className="mb-4"><a href="" className="a-tag ">Terms & Conditions</a></h1>
                     <h1 className="mb-4"><a href="" className="a-tag">Privacy Policy</a></h1>
                     <h1 className="mb-4"> <a href="" className="a-tag">Support</a></h1>
                     <h1 className="mb-4"> <a href="" className="a-tag">FAQ</a></h1>
                </div>
                <div>
                    <h1 className=" font-semibold text-2xl mb-6">Quick Links</h1>
                     <h1 className="mb-4"><a href="" className="a-tag ">About</a></h1>
                     <h1 className="mb-4"><a href="" className="a-tag">Services</a></h1>
                     <h1 className="mb-4"> <a href="" className="a-tag">Blogs</a></h1>
                     <h1 className="mb-4"> <a href="" className="a-tag">Contact</a></h1>
                </div>
                <div>
                    <h1 className=" font-semibold text-2xl mb-6">Subscribe Us</h1>
                     <p className="mb-4">Subscribe to get latest news <br />article and resources</p>
                      <input type="text" className=" ring-1 ring-red-600 px-7 py-2" placeholder="subscribe Now ..." />
                      <button className=" bg-red-500 hover:bg-red-700 text-red-50 mt-5 px-4 text-xs font-semibold py-3 ">SUBSCRIBE</button>
                </div>
                <div>
                    <h1 className=" font-bold text-2xl mb-6">Mega<span className="text-red-500">kit.</span></h1>
                     <h1 className="mb-4"><a href="" className="a-tag ">Support@megakit.com</a></h1>
                     <h1 className="mb-4"><a href="" className="text-red-500 font-bold text-2xl">+23-456-6588</a></h1>
                </div>
            </div>
         </div>
        </div>
        <hr />
        <div className=" mt-6 mb-6">
            <div className=" container m-auto">
                <div className=" grid grid-cols-8 mx-10">
                    <div className=" col-span-5">
                        <h1>Copyright © 2020, Designed & Developed by <span className=" font-bold"> Themefisher</span> </h1>
                    </div>
                    <div>
                        <a href="" className="a-tag flex"> <BiLogoFacebook className=" text-xl me-3"/>Facebook</a>
                    </div>
                    <div><a href="" className="a-tag flex "><BiLogoTwitter className="text-xl  me-3"/> Twitter</a>
                        </div>
                    <div><a href="" className="a-tag flex"><BiLogoPinterest className="text-xl  me-3"/>Pinterest</a></div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Fotter;