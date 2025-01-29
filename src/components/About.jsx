import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1KJnR5qwszhltGyfpXneLZbrJF6u2eZ9A/view?usp=sharing";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am currently pursuing a B.Tech in Electrical Engineering at
                NIT Silchar, with a strong interest in software development and
                machine learning. My experience spans web development and
                Machine Learning, where I have worked on projects like Fake News
                Detection and Epileptic Seizure Detection, leveraging models
                such as Random Forest and Logistic Regression.
                <br />
                In web development, I have built applications like CashTrack, a
                financial tracking app using ReactJS and Node.js, and
                FurryTails, an animal welfare platform integrating Google API.
                My skills include JavaScript, ReactJS, Node.js, and Bootstrap,
                ensuring seamless user experiences. Beyond Angular, I possess a
                versatile skill set. I am proficient in javascript, TypeScript,
                React.js, Bootstrap, Firebase, and GitHub, ensuring that I am
                well-equipped to adapt to diverse project requirements.
                <br /> As an Under Officer in NCC, I have developed strong
                leadership and problem-solving skills. Additionally, I have
                participated in hackathons and competitive coding, consistently
                striving to build scalable and impactful solutions.
              </p>
              <div className="flex px-12 mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div className="px-12">
                <button className="btn-primary" onClick={navigateToResume}>
                  Check Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
