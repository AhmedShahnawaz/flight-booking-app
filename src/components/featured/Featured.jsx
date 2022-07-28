import "./featured.css";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/square600/285710499.webp?k=00db7f1af9a302005cde4cd0aa99d006d863b20fcb68ca81737cd0126dd92d5a&o=&s=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h1>Roma</h1>
            <h2>500 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/square600/374562937.webp?k=3d8e0f14dc520e9d9f0a6563291cc1001456896eef040961cde18415fadb2ad2&o=&s=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h1>Roma</h1>
            <h2>500 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/square600/317801238.webp?k=ee50a28bb506b055390ea638c60f7f8893210fa24d8d2ced04ba3f95a8522497&o=&s=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h1>Roma</h1>
            <h2>500 properties</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
