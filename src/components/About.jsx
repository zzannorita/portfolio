import ImageCarousel from "./ImageCarousel";

export default function About() {
  const items = [
    {
      images: ["/src/images/name.png", "/src/images/name2.png"],
      label: "name",
      text: "장유리",
    },
    {
      images: ["/src/images/age.png", "/src/images/age2.png"],
      label: "age",
      text: "1999.05.18",
    },
    {
      images: ["/src/images/major.png", "/src/images/major2.png"],
      label: "major",
      text: "인터넷보안공학과",
    },
    {
      images: ["/src/images/email.png", "/src/images/email2.png"],
      label: "email",
      text: "zzannorita@gmail.com",
    },
    {
      images: ["/src/images/phone.png", "/src/images/phone2.png"],
      label: "phone",
      text: "010-7209-5811",
    },
    {
      images: ["/src/images/certificate.jpg", "/src/images/certificate2.png"],
      label: "certificate",
      text: "정보처리기사",
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto h-auto mt-16">
      <h1 className="flex justify-center items-center h-[15vh] text-2xl text-black-700 font-bold my-4">
        about me!
      </h1>
      <div className="w-[90%] flex flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <ImageCarousel
            key={index}
            images={item.images}
            label={item.label}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
