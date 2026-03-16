import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

export default function About() {
  return (
    <section id="about" className="section">

      {/* Title */}
      <div className="w-full max-w-5xl mx-auto text-center mb-12">
        <h2 className="mb-3">
          About <span className="text-yellow-400">Me</span>
        </h2>

        <p className="text-gray-400 mt-4">
          A passionate developer dedicated to building impactful software
        </p>
      </div>


      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT PROFILE CARD */}

        <div className="card bg-slate-900/60">

          <img
            src="plus38.jpeg"
            className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full border-4 border-yellow-400 mb-6 object-cover"
          />

          <div className="space-y-4 text-gray-300">

            <p>
              <span className="text-gray-500">Education</span>
              <br />
              <span className="font-semibold">B.Tech @ IIIT Trichy</span>
            </p>

            <p>
              <span className="text-gray-500">Location</span>
              <br />
              Kolkata, India
            </p>

            {/* CGPA BAR */}

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-400">CGPA</span>
                <span className="text-white font-semibold">8.45</span>
              </div>

              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[85%]"></div>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT CONTENT */}

        <div>

          <h3 className="text-2xl font-semibold mb-4">
            My Journey
          </h3>

          <p className="text-gray-400 mb-4">
            I'm Aditya Gupta, currently pursuing B.Tech in Computer Science at
            IIIT Trichy. I enjoy solving challenging problems and building
            scalable web applications.
          </p>

          <p className="text-gray-400 mb-8">
            I have solved <b>1400+</b> problems across competitive programming
            platforms and achieved Knight rating on LeetCode. I secured 
           <b> AIR 7</b>  in <b>UPSC NDA 2023</b> demonstrating strong discipline and
            analytical thinking.
          </p>


          {/* FEATURE CARDS */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-900 p-5 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <FaCode className="text-yellow-400 text-xl" />

              <div>
                <h4 className="font-semibold">Clean Code</h4>
                <p className="text-gray-400 text-sm">
                  Writing maintainable and scalable code.
                </p>
              </div>

            </div>


            <div className="bg-slate-900 p-5 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <FaLightbulb className="text-yellow-400 text-xl" />

              <div>
                <h4 className="font-semibold">Problem Solving</h4>
                <p className="text-gray-400 text-sm">
                  Tackling complex problems with strong logic.
                </p>
              </div>

            </div>


            <div className="bg-slate-900 p-5 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <IoRocketOutline className="text-yellow-400 text-xl" />

              <div>
                <h4 className="font-semibold">Performance</h4>
                <p className="text-gray-400 text-sm">
                  Optimizing applications for speed and efficiency.
                </p>
              </div>

            </div>


            <div className="bg-slate-900 p-5 rounded-xl flex gap-4 items-start hover:scale-105 transition">

              <FaUsers className="text-yellow-400 text-xl" />

              <div>
                <h4 className="font-semibold">Collaboration</h4>
                <p className="text-gray-400 text-sm">
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