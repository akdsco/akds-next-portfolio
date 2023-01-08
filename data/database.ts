const database = {
  information: {
    name: "Arkadiusz",
    aboutContent: "",
    age: null,
    phone: "",
    nationality: "",
    language: "English, Polish",
    email: "",
    address: "London, UK",
    freelanceStatus: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/akds/",
      dribbble: "",
      github: "https://github.com/akdsco",
      stackoverflow: "https://stackoverflow.com/users/8598252/akds",
      pluralsight: "https://app.pluralsight.com/profile/akds",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "",
    cvFile: "",
  },
  services: [
    {
      title: "Software",
      icon: "laptop",
      details:
        "I will do the nerdy stuff, get things done and protect you from details you most likely don't want to understand.",
    },
    {
      title: "Consulting",
      icon: "mobile",
      details:
        "Identifying problems, finding weaknesses in systems, improving data security and explaining it all in plain english.",
    },
    {
      title: "Business",
      icon: "handshake",
      details:
        "It is all about business and technologies are merely tools to success, I emphasize data to help you make smart decisions.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "\"Arkadiusz was amazing to work with, our community liked Arkadiusz's work so much that our hosting " +
        'bandwidth needed to be readjusted to traffic demand twice the following day!"',
      author: {
        name: "Martijn Verburg",
        designation: "Principal Engineering Group Manager at Microsoft",
      },
    },
    {
      id: 2,
      content:
        '"I worked with Arkadiusz on the LJC Unconference website, I really enjoyed working with ' +
        'Arkadiusz, his passion and drive to achieve the best result was clear to see very early on."',
      author: {
        name: "Simon Maple",
        designation: "Field CTO at Snyk",
      },
    },
    {
      id: 3,
      content:
        '"Arkadiusz was a pleasure to work with on our latest web project. He instantly had an appreciation for ' +
        'what we wanted to achieve from the site and worked with us to make sure it was perfect."',
      author: {
        name: "Barry Cranford",
        designation: "Managing Director at RecWorks",
      },
    },
    {
      id: 4,
      content:
        '"Developing good code is a mix of diligence, understanding the use case and good communication. ' +
        'In working with Arkadiusz I was able to see that he excels in each of these areas."',
      author: {
        name: "David McLeary",
        designation: "Managing Director at Cambridge Software Ltd",
      },
    },
  ],
  skills: [
    {
      title: "ReactJS",
      value: 95,
      isVisible: false,
    },
    {
      title: "Javascript",
      value: 95,
      isVisible: false,
    },
    {
      title: "TypeScript",
      value: 75,
      isVisible: false,
    },
    {
      title: "CSS3",
      value: 85,
      isVisible: false,
    },
    {
      title: "Node.js",
      value: 55,
      isVisible: false,
    },
    {
      title: "Python/Java",
      value: 50,
      isVisible: false,
    },
  ],
  portfolio: [
    {
      id: "1",
      title: "wutzu.com",
      subtitle: "React Node.js Firebase",
      imageUrl: "/img/portfolio-thumb-one.png",
      data: "/data/data-p1.md",
      url: "",
    },
    {
      id: "2",
      title: "meet a mentor",
      subtitle: "JS HTML CSS3",
      imageUrl: "/img/portfolio-thumb-two.png",
      data: "data/data-p2.md",
      url: "https://meetamentor.co.uk",
    },
    {
      id: "3",
      title: "foodie b app",
      subtitle: "React GoogleAPI SemanticUI",
      imageUrl: "/img/portfolio-thumb-three.png",
      data: "data/data-p3.md",
      url: "https://foodie-b-app.web.app/",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 4,
        year: "2022 Mar - present",
        position: "Software Engineer",
        company: "Noah Media Group",
        details: "Building new technologies for the film makers.",
      },
      {
        id: 3,
        year: "2020 Nov - 2022 Mar",
        position: "Full Stack Software Developer",
        company: "Connect4",
        details:
          "Built a scalable, highly responsive and multi user application for online meetings. We worked with Meteor JS to achieve a seamless " +
          "multi user experience of a native application that was delivered through the web browser. We relied on MongoDB in the cloud and built the frontend with" +
          " React.JS framework. We focused on functional programming paired with Hexagonal Architecture (Port and Adapter Pattern).",
      },
      {
        id: 2,
        year: "2020 Jul - 2020 Nov",
        position: "JavaScript Software Developer",
        company: "Wutzu Technologies",
        details:
          "Improved the robustness of the application through relentless code refactoring, removing unnecessary bloated code and" +
          " replacing big class components with small functional ones. I addressed all asynchronous problems implementing" +
          " JS Promises and wrote clean functions that delivered consistent app behaviour. This directly impacted user experience of the whole" +
          " application and improved usability. Streamlined the shop onboard process to make it easy and" +
          " fast for any shop eligible to join the platform and start selling products as soon as possible.",
      },
      {
        id: 1,
        year: "2020 May - 2020 Jul",
        position: "Intern Software Developer",
        company: "Wutzu Technologies",
        details:
          "Implemented designs and new features to improve stores application in general. I worked with React and Google Firebase Cloud " +
          "along with a other JavaScript dependencies like Redux, Router, Ant Design, all working on a custom crafted Webpack configuration.\n" +
          "I contributed to the overall development of the product, sales strategy and business offer which allowed us to sign up a significant " +
          "chain of stores as our clients.\n",
      },
      {
        id: 0,
        year: "2018 - 2019",
        position: "Freelance Web Developer",
        company: "Self-employed",
        details:
          "Responsible for developing and co-designing new brand image of London Java Community and Meet a Mentor " +
          "Community. I worked with LJC founders and freelance designer to bring about that change. Some of that work is shared in my portfolio.\n",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020",
        graduation: "Bachelors in Software Development - Front End",
        university: "Openclassrooms.com",
        details:
          "Developed skills in JavaScript OOP, React.js, jQuery, MySQL, Bootstrap 4, CSS3, HTML5, Software Testing, " +
          "Git & GitHub. OpenClassrooms is an online university for vocational training, providing degree level diplomas in IT, " +
          "technology, entrepreneurship, and digital skills. Courses are conducted fully online, through a mix of video " +
          "resources, online reading, real-life projects, and individual mentoring sessions with senior developers.",
      },
      {
        id: 0,
        year: "2019",
        graduation: "Software Development Specialization",
        university: "ucertify.com",
        details:
          "OCA Java SE 8 Programmer I (1Z0-808) MTA Software Development Fundamentals (98-361) CIW Advanced HTML5 and CSS3 Specialist (1D0-620)",
      },
    ],
  },
  blogs: [
    // {
    //   id: 1,
    //   title: "Markdown & Html supported blog.",
    //   featuredImage: "/images/blog-image-1.jpg",
    //   fileSource: "../../blog/markdown-html-supported-blog.md",
    //   createDay: "20",
    //   createMonth: "February",
    //   createYear: "2020",
    // },
    {
      id: 15,
      title: "Programmers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      fileSource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["Connecting..."],
    emailAddress: ["Please use the form, it does work!"],
    address: "East London, UK",
  },
};

export default database;
