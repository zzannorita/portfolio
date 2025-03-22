import ImageCarousel from "./ImageCarousel";

export default function About() {
  const items = [
    {
      images: ["/src/images/name.png", "/src/images/name2.png"],
      label: "name",
    },
    { images: ["/src/images/age.png", "/src/images/age2.png"], label: "age" },
    {
      images: ["/src/images/major.png", "/src/images/major2.png"],
      label: "major",
    },
    {
      images: ["/src/images/email.png", "/src/images/email2.png"],
      label: "email",
    },
    {
      images: ["/src/images/phone.png", "/src/images/phone2.png"],
      label: "phone",
    },
    {
      images: ["/src/images/certificate.jpg", "/src/images/certificate2.png"],
      label: "certificate",
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto h-[60vh] min-h-[500px] my-24">
      <h1 className="flex justify-center items-center h-[15vh] text-3xl text-gray-700 font-logo">
        About me!
      </h1>
      <div className="w-[90%] flex flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <ImageCarousel key={index} images={item.images} label={item.label} />
        ))}
      </div>
    </div>
  );
}
