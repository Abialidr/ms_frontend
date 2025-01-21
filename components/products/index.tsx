"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";
import { db, getAllDocuments } from "../../services/firebase/index";
import { collection, getDocs, query } from "firebase/firestore";
import { where } from "firebase/firestore/lite";
const Product = ({ type, url }: any) => {
  console.log("🚀 ~ Product ~ type:", type);
  const [d, setD] = useState([]);
  console.log("🚀 ~ Product ~ d:", d);
  useEffect(() => {
    (async () => {
      const docSnap = await getDocs(
        query(collection(db, "products"), where("category", "==", type))
      );
      const data: any = [];
      docSnap.forEach((element) => {
        const a: any = element.data();
        a._id = element.id;
        data.push(a);
      });

      setD(data);
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
              <span>Our Services</span>
            </li>
          </ul>
          <h1>Services Style 01</h1>
        </div>
      </div>
      {d ? (
        <section className="sec-pad-with-content-margin-30 gray-bg service-page-one">
          <div className="container">
            <div className="row">
              {d?.map((item: any, index: number) => (
                <Card item={item} url={url} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Product;
