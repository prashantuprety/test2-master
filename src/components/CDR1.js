import axios from "axios";
import React, { useEffect, useState } from "react";

const CDR1 = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const apii = axios
      .get("https://cdrforengineer.cdrsites.rocks/api/landing?populate=deep")
      .then((response) => {
        setApi(response.data.data.attributes.trackRecord);
      });
  });

  return (
    <div className="container">
      <div className="row">
        {api?.map((items) => (
          <>
            <div className="col-lg-6 col-sm-12 " id={items.id}>
              <div className="img " style={{ marginleft: "5px" }}>
                <img
                  src={items.image.data.attributes.url}
                  class="rounded-circle shadow-4-strong mt-2 "
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>

                <p className="card-text mt-2">{items.paragraph}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CDR1;
