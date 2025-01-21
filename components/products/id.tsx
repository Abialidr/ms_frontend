"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getDocumentById } from "../../services/firebase";

const ProductDeatil = () => {
  const parms = useParams();
  const [formData, setFormData] = useState({
    category: "",
    mainImage: "",
    cardShortDescription: "",
    cardTitle: "",
    image: "",
    subImages: ["", "", "", ""],
    detailPageTitle: "",
    paraAfterMainImage: "",
    paraAfterSubImages: "",
  });
  console.log("🚀 ~ ProductDeatil ~ formData:", formData);
  useEffect(() => {
    (async () => {
      const doc: any = await getDocumentById("products", parms.id);
      setFormData(doc);
    })();
  }, []);
  return (
    <>
      <div className="inner-banner text-center">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>
              <span>{formData?.category}</span>
            </li>
          </ul>
          <h1></h1>
        </div>
      </div>

      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-service-widget">
                <div className="contact-infos-widget">
                  <h3>Need Help?</h3>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                  </p>
                  <div className="phone-box">
                    <i className="facdori-icon-phone-call-1"></i>
                    <span>666 888 0000</span>
                  </div>
                </div>
              </div>
              <div className="single-service-widget">
                <div className="contact-form-widget">
                  <h3>Get a Free Quote</h3>
                  <form
                    action="https://ashik.templatepath.net/facdori-main-html/inc/sendemail.php"
                    className="contact-form-validated"
                  >
                    <input type="text" name="name" placeholder="Full Name" />
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                    />
                    <textarea
                      placeholder="Write Message"
                      name="message"
                    ></textarea>
                    <button type="submit" className="thm-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single-service-page-content">
                <img src="images/service-single-1-1.jpg" alt="Awesome Image" />
                <br />
                <br />
                <h3>Industrial Construction</h3>
                <br />
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing.
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the ndustry standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries. Lorem Ipsum is simply dummy text of the
                  new design printng and type setting Ipsum Take a look at our
                  round up of the best shows coming soon to your telly box has
                  been the is industrys. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has industr
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of.
                </p>
                <br />
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src="images/service-single-1-2.jpg"
                      alt="Awesome Image"
                    />
                    <br />
                    <br />
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="images/service-single-1-3.jpg"
                      alt="Awesome Image"
                    />
                    <br />
                    <br />
                  </div>
                </div>
                <p>
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the ndustry stan when an unknown printer took a
                  galley.
                </p>
                <br />
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like including versions of.
                </p>
                <br />
                <a href="#" className="thm-btn">
                  Download our brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDeatil;
