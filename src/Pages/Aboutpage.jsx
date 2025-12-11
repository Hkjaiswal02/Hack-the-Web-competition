import logo from "../assets/Images/logo.png";
import SlideOnScroll from "../components/ScrollOnScroll";
import clubHead from "../assets/Images/lead.png";
function Aboutpage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white pt-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <SlideOnScroll direction="left">
          <img src={logo} alt="Techspire" className="w-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About TECHSPIRE
          </h1>
        </SlideOnScroll>
        <SlideOnScroll direction="right">
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            excepturi molestias adipisci laboriosam perspiciatis expedita
            voluptate mollitia, sequi cumque quidem obcaecati consequatur a
            ipsam id sint itaque! Tempore aliquam illum perferendis quidem?
            Similique nemo cumque beatae! Et, similique quos! Ratione.
          </p>
        </SlideOnScroll>
      </div>
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <SlideOnScroll direction="left">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Our Vision
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ex vitae sequi laboriosam quia deserunt sed illum provident
              tempore delectus.
            </p>
          </SlideOnScroll>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <SlideOnScroll direction="right">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              Our Mission
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ex vitae sequi laboriosam quia deserunt sed illum provident
              tempore delectus.
            </p>
          </SlideOnScroll>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-12 items-center">
        <SlideOnScroll direction="left">
          <div className="flex justify-center">
            <img
              src={clubHead}
              alt="Club Head"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </SlideOnScroll>
        <SlideOnScroll direction="right">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Message from the Club Head
            </h2>
            <h3 className="text-lg text-blue-400 font-semibold mb-3">
              Bias Bhadra — Founder & Lead Coordinator
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              excepturi nesciunt eos quis, impedit itaque ipsum, labore
              consectetur tempore similique libero distinctio corrupti commodi
              tempora? Ipsum reiciendis placeat fugiat. Ut accusamus nesciunt
              voluptatem repudiandae. Autem eligendi aliquid neque alias
              consequuntur.
            </p>
            <p className="text-gray-400 text-sm">
              "Success is built through teamwork, consistency, and curiosity."
            </p>
          </div>
        </SlideOnScroll>
      </div>
    </section>
  );
}
export default Aboutpage;
