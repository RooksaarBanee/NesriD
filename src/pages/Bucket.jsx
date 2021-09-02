import React from "react";

import Header from "../composants/Header";
import Footer from "../composants/Footer";
import BucketContainer from "../composants/Bucket/BucketContainer";

function Bucket() {
  return (
    <div>
        <Header active="shop" />
        <BucketContainer />
        <Footer />
    </div>
  );
}

export default Bucket;