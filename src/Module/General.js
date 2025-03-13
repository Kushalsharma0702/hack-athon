// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import Replit from "./Assets/sponsorsLogos/replit.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import ll from "./Assets/sponsorsLogos/ll.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";
import { ToggleButton } from "react-bootstrap";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import zoha from "./Assets/teami/zoha.png";
import Kushal from "./Assets/teami/Kushal.png";
import Sanskriti from "./Assets/teami/Sanskriti.png";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";





const TOP_SECTION = {
  TITLE: "Join HackO'Clock",
  Typed_effect: ["Code Like a Googler, Innovate like a Visionary"],
  SHORT_DESCRIPTION:
    "Join us On 28th March ",
  IMG_SRC: boy,
  DISCORD_LINK: "https://discord.gg/fyHmS66HDT",
  JUDGES_FORM_LINK:
    "https://www.linkedin.com/company/gdgiilm/",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://unstop.com/o/4wABycH?utm_medium=Share&utm_source=shortUrl"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/gdg_iilm/",
  discord: "https://discord.gg/fyHmS66HDT",
  linkedin: "https://www.linkedin.com/company/gdgiilm/",
  twitter: "https://x.com/gdgIILM",
  // devpost: "https://limbo-hacks-12968.devpost.com/",
  email: "mailto:hackoclock.gdgiilm@gmail.com",
  mail: "hackoclock.gdgiilm@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is HackO'Clock?",
  LONG_DESCRIPTION:
    "Attention all code-crunchers, creative geniuses, and caffeine-fueled night owls! GDG IILM proudly presents Hack O’Clock, a thrilling 24-hour hackathon bursting with brain-bending challenges and surprise events that will leave you laughing, learning, and longing for more! This isn’t just any hackathon – it’s a high-energy, all-night coding carnival where brilliant minds from diverse colleges unite to create magic. Bring your team, your wildest ideas, and an appetite for adventure. Let’s hack, laugh, and revolutionize the digital world together. Ready, set, code – your epic journey starts now! Don’t miss this chance to unleash creativity, meet peers, and create unforgettable memories.",
  
  LOGO_EFFECT: true,
  LOGO: ""
};


const FOOTER = {
  VOLUNTEERING_FORM: {
    required: false,
    src: ""
  },
  JOIN_TEAM: {
    required: false,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: false,
    src: ""
  },
  Terms_of_use: {
    required: false,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {   
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "The Almighty Grand Prize (First Prize)",
      content:
      "You came, you coded, you conquered. This is THE prize. The one that’ll make your LinkedIn flex worth it. Walk away with glory, bragging rights, and a pile of goodies that’ll make your friends jealous"},
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "The Almost-There Award (Second Prize)",
      content:
        "So close, yet so far. You didn’t win, but hey, silver still shines! Enjoy your slightly-less-awesome but still pretty cool prize, and maybe next time, try coding a little faster.  "
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "The 'Hey, At Least You Tried' Prize (Third Prize)",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    // {
    //   icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
    //   type: "Best Solo",
    //   content:
    //     "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    // },
    
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track"
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    },
  ],
  [
    //Array 3
    
    
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Kushal Sharma",
      role: "Organizer",
      github: "https://github.com/Kushalsharma0702",
      linkedin: "https://www.linkedin.com/in/kushalsharma0702",
      img: Kushal
    },
    {
      Name: "Tannmay Jain",
      role: "Sponsorship Lead",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Vineet",
      role: "Web Development Lead",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    // {
    //   Name: "Ziyan",
    //   role: "Marketing Lead",
    //   github: "",
    //   linkedin: "",
    //   img: lyin
    // },
    {
      Name: "Saumya",
      role: "Logistic's Lead ",
      github: "",
      linkedin: "",
      img: zoha
    },    
    {
      Name: "Sanskriti",
      role: "PR Lead ",
      github: "",
      linkedin: "",
      img: Sanskriti
    },
  ] 
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: "Someone Cool",
      role: "Judge",
      github: "",
      linkedin: "",
      img: me
    }, 
    {
      Name: "Someone Cool",
      role: "Judge",
      github: "",
      linkedin: "",
      img: me
    }, 
    {
      Name: "Someone Cool",
      role: "Judge",
      github: "",
      linkedin: "",
      img: me
    }, 
  ],
  [
    //Array 2
    {
      Name: "Someone Cool",
      role: "Judge",
      github: "",
      linkedin: "",
      img: me
    }, 
    {
      Name: "Someone Cool",
      role: "Judge",
      github: "",
      linkedin: "",
      img: me
    },    
    {
      Name: "Someone Cool",
      role: "Judge",
      github: "",
      linkedin: "",
      img: me
    }, 
  ] 
];


/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: pass}], //Array 1
  [], //Array 2
  [], //Array 3
  [] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a HackO'Clock?",
        content:
        'It’s a 24-hour coding carnival where bugs get grilled and coffee flows like water. Think of it as a wild coding showdown where your errors get roasted and your genius occasionally shines. Welcome to a non-stop, chaotic, and hilarious marathon of code!'},
        {
          label: "What's the 1st Round Of HackO'Clock?",
          content:"Round 1 – PPT Submission Get your killer pitch ready because your presentation is your ticket to the big leagues. Deadline? March 20th—no slackers allowed!"},
        
        {
          label: "What's the 2nd Round Of HackO'Clock?",
          content:"Round 2 – Build Session: From March 28th to 29th, it’s time to turn that genius into reality. Code like your life depends on it and show us you’re more than just talk."},
        {
        label: "I am a first time hacker, what should I do?",
        content: "Congratulations on your rookie debut! Embrace the chaos, ask every burning question, and don’t worry—everyone here was clueless once. Laugh off your mistakes and let each roast fuel your coding comeback."},
      {
        label: "How team formation works?",
        content: "Imagine speed dating for code nerds! Grab a friend or scout for new allies on the fly. A mismatched team is like a buggy program—unpredictable and hilariously disastrous. Choose wisely, code boldly!"}
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "Simple: click the Unstop link, Submit the PPT, Get Shortlisted and you’re in. No wizardry or secret handshakes required—just a few clicks and you’re ready to rock the code arena."},
      {
        label: "I have more questions?",
        content: "Got more hot queries? Join Our Whatsapp Group), and we’ll roast your doubts into oblivion. We’re here to help—just don’t expect us to debug your life choices!"}
      ,
      
        {
          label: "Will there be swag?",
          content: "Oh, for sure! Expect goodies cooler than your best code fix, stickers, and more epic swag to flaunt your hackathon survival skills. Enjoy the roast and the loot!"
        }
        
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions
};
