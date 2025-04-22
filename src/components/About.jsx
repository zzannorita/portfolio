import ImageCarousel from "./ImageCarousel";
import imgTest from "../../public/images/cat2.png";

export default function About() {
  const items = [
    {
      // images: ["images/name.png", "images/name2.png"],
      images: [imgTest, imgTest],
      label: "name",
      text: "장유리",
    },
    {
      images: ["images/age.png", "images/age2.png"],
      label: "age",
      text: "1999.05.18",
    },
    {
      images: ["images/major.png", "images/major2.png"],
      label: "major",
      text: "인터넷보안공학과",
    },
    {
      images: ["images/email.png", "images/email2.png"],
      label: "email",
      text: "zzannorita@gmail.com",
    },
    {
      images: ["images/phone.png", "images/phone2.png"],
      label: "phone",
      text: "010-7209-5811",
    },
    {
      images: ["images/certificate.jpg", "images/certificate2.png"],
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
