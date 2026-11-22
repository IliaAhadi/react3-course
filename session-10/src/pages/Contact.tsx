import Banner from "../components/Banner";
import Container from "../components/Container";
import { CiClock1, CiLocationOn, CiPhone } from "react-icons/ci";

const contact = [
  {
    title: "Address",
    icon: <CiLocationOn size={35} />,
    text: "Iran",
  },

  {
    title: "Phone",
    icon: <CiPhone size={35} />,
    text: "Mobile: +98 9123456789",
  },

  {
    title: "Working Time",
    icon: <CiClock1 size={35} />,
    text: "Saturday - Thursday",
  },
];

// session 7
export default function Contact() {
  return (
    <div className="mb-20">
      <Banner title="Contact Us" />

      <div className="mt-20">
        <h1 className="text-3xl font-bold text-center mb-3">
          Get In Touch With Us
        </h1>
        <p className="text-gray-400 text-center">
          Reach us anytime through our contact page for questions, support, and
          friendly assistance.
        </p>

        <Container>
          <div className="grid grid-cols-2 mt-30 mx-30">
            <div className="flex flex-col gap-15">
              {contact.map((item) => (
                <div key={item.title}>
                  <h3 className="text-2xl flex gap-7">
                    {item.icon} {item.title}
                  </h3>
                  <p className="ml-18 font-medium text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>

            <div>
              <form className="flex flex-col">
                <label htmlFor="name">Your Name</label>
                <input
                  className="border border-gray-400 rounded-md py-3 px-5 outline-none"
                  placeholder="example"
                  type="text"
                  id="name"
                />

                <label className="mt-8" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="border border-gray-400 rounded-md py-3 px-5 outline-none"
                  placeholder="example@email.com"
                  type="text"
                  id="email"
                />

                <label className="mt-8" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="border border-gray-400 rounded-md py-3 px-5 outline-none"
                  placeholder="example"
                  type="text"
                  id="subject"
                />

                <label className="mt-8" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border border-gray-400 rounded-md py-3 px-5 outline-none"
                  placeholder="..."
                  id="message"
                ></textarea>

                <button className="bg-orange-400 text-white font-medium py-3 w-50 cursor-pointer rounded mt-10 hover:bg-orange-500 transition duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
// end of session 7
