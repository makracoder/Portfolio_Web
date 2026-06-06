import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

export default function About() {
  return (
    <section id="about" className="section">

      {/* Title */}
      <div className="w-full max-w-5xl mx-auto text-center mb-16">
        <h2 className="mb-4">
          About <span className="text-yellow-400">Me</span>
        </h2>

        <p className="text-gray-400">
          A passionate developer dedicated to building impactful software
        </p>
      </div>


      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 sm:px-0">

        {/* LEFT PROFILE CARD */}

        <div className="card bg-slate-900/60">

          <img
            src="plus38.jpeg"
            className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full border-4 border-yellow-400 mb-8 object-cover"
          />

          <div className="space-y-6 text-gray-300">

            <p className="mb-0">
              <span className="text-gray-500 text-sm">Education</span>
              <br />
              <span className="font-semibold text-gray-100">B.Tech @ IIIT Trichy</span>
            </p>

            <p className="mb-0">
              <span className="text-gray-500 text-sm">Location</span>
              <br />
              <span className="text-gray-100">Kolkata, India</span>
            </p>

            {/* CGPA BAR */}

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400 text-sm">CGPA</span>
                <span className="text-white font-semibold">8.45</span>
              </div>

              <div className="w-full bg-gray-700 h-2.5 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full rounded-full w-[85%]"></div>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT CONTENT */}

        <div className="px-4 sm:px-0">

          <h3 className="text-2xl font-semibold mb-6">
            My Journey
          </h3>

          <p className="text-gray-400 mb-6">
            I'm Aditya Gupta, currently pursuing B.Tech in Computer Science at
            IIIT Trichy. I enjoy solving challenging problems and building
            scalable web applications.
          </p>

          <p className="text-gray-400 mb-12">
            I have solved <b>1400+</b> problems across competitive programming
            platforms and achieved Knight rating on LeetCode. I secured 
           <b> AIR 7</b>  in <b>UPSC NDA 2023</b> demonstrating strong discipline and
            analytical thinking.
          </p>


          {/* FEATURE CARDS */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <FaCode className="text-yellow-400 text-xl flex-shrink-0 mt-1" />

              <div>
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm mb-0">
                  Writing maintainable and scalable code.
                </p>
              </div>

            </div>


            <div className="bg-slate-900 p-6 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <FaLightbulb className="text-yellow-400 text-xl flex-shrink-0 mt-1" />

              <div>
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-gray-400 text-sm mb-0">
                  Tackling complex problems with strong logic.
                </p>
              </div>

            </div>


            <div className="bg-slate-900 p-6 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <IoRocketOutline className="text-yellow-400 text-xl flex-shrink-0 mt-1" />

              <div>
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="text-gray-400 text-sm mb-0">
                  Optimizing applications for speed and efficiency.
                </p>
              </div>

            </div>


            <div className="bg-slate-900 p-6 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <FaUsers className="text-yellow-400 text-xl flex-shrink-0 mt-1" />

              <div>
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-gray-400 text-sm mb-0">
                  Working effectively in teams.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}