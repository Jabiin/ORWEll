import Image from "next/image";
import pic from "../public/pic.jpg";
import picthree from "../public/picthree.jpg";
import picfour from "../public/picfour.jpg";

function Services() {
  const widthvalue = 300;
  const heightvalue = 200;
  const title = `Items are ready`;
  const paragraph = `Click the button to get the item on Shopwhy app.`;
  const btntext = `order`;
  return (
    <>
      <div className="grid grid-cols-2  gap-8 justify-items-center content-center items-center p-3 ">
        <div className="card lg:card-side bg-base-100 shadow-xl w-fit">
          <figure>
            <Image
              src={picfour}
              width={widthvalue}
              height={heightvalue}
              className="rounded"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {title} </h2>
            <p> {paragraph} </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> {btntext} </button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl w-fit">
          <figure>
            <Image
              src={pic}
              width={widthvalue}
              height={heightvalue}
              className="rounded"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p> {paragraph}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> {btntext}</button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl w-fit">
          <figure>
            <Image
              src={picthree}
              width={widthvalue}
              height={heightvalue}
              className="rounded"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p> {paragraph}.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> {btntext}</button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl w-fit">
          <figure>
            <Image
              src={picfour}
              width={widthvalue}
              height={heightvalue}
              className="rounded"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p> {paragraph}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> {btntext}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
