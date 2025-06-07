import React from 'react';
import { Book } from 'lucide-react';

const profile = {
  name: 'Dr. Anilkumar Bachu',
  title: 'Assistant Professor',
  department: 'Department of Civil and Environmental Engineering',
  department1: 'Indian Institute of Technology Patna',
  about: `I am an Assistant Professor at the Indian Institute of Technology Patna, specializing in Transportation Engineering. My research focuses on traffic flow modeling, intelligent transportation systems, and sustainable urban mobility solutions. Through my work, I aim to contribute to the development of efficient and eco-friendly transportation networks.`,
};

const appointments = [
  {
    title: 'Assistant Professor',
    institution: 'Indian Institute of Technology Patna',
    year: 'Jun 2019 - Present',
    logo: 'images/iitp1.png',
  },
  {
    title: 'Research Fellow',
    institution: 'Centre of Excellence for Testing & Research of Autonomous Vehicles NTU (CETRAN)',
    year: 'Jul 2018 - May 2019',
    logo: 'images/ntu.jpg',
  },
  {
    title: 'Senior Project Officer',
    institution: 'Indian Institute of Technology Madras',
    year: 'Jul 2017 - Jun 2018',
    logo: 'images/iitm.jpg',
  },
  {
    title: 'Pre-Dcotoral Fellow',
    institution: 'Indian Institute of Technology Madras',
    year: 'Dec 2016 - Jun 2017',
    logo: 'images/iitm.jpg',
  },
];

const education = [
  {
    degree: 'M.S. (by Research) & Ph.D',
    thesis: 'Specilization: Transportation Engineering',
    university: 'Indian Institute of Technology Madras',
    year: 'Jul 2012 - Jul 2017',
    logo: 'images/iitm.jpg',
  },
  {
    degree: 'B.Tech in Civil Engineering',
    university: 'Bharat Institute of Engineering and Technology Hyderabad (affiliated to JNTU Hyderabad)',
    year: 'Sep 2008 - Jun 2012',
    logo: 'images/biet.png',
  },
];

function Home() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <img
            src="images/Anil.jpg"
            alt="Profile of Dr. Anilkumar Bachu"
            className="w-48 h-56 rounded-lg mb-8 md:mb-0 md:mr-8 object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{profile.name}</h1>
            <p className="mt-3 font-bold text-2xl text-gray-500">{profile.title}</p>
            <p className="mt-2 text-xl font-medium text-gray-600">{profile.department}</p>
            <p className="mt-2 text-xl font-medium text-gray-600">{profile.department1}</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="https://scholar.google.com/citations?user=mrw1V7YAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <img src="images/gs.png" alt="Google Scholar" className="w-8 h-8" />
              </a>
              <a href="https://www.researchgate.net/profile/Anilkumar-Bachu?ev=hdr_xprf" target="_blank" rel="noopener noreferrer">
                <img src="images/rg.png" alt="ResearchGate" className="w-8 h-8" />
              </a>
              <a href="https://orcid.org/my-orcid?orcid=0000-0001-5933-8362" target="_blank" rel="noopener noreferrer">
                <img src="images/orcid copy.png" alt="ORCID" className="w-8 h-8" />
              </a>
              <a href="https://www.webofscience.com/wos/author/record/ABF-9870-2021" target="_blank" rel="noopener noreferrer">
                <img src="images/wos.png" alt="Scopus" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <Section title="About">
          <p className="text-lg text-gray-600">{profile.about}</p>
        </Section>
        
        <Section title="Appointments" icon={<Book className="h-6 w-6 mr-2 text-indigo-600" />}> 
          <GridList items={appointments} />
        </Section>
        
        <Section title="Education" icon={<Book className="h-6 w-6 mr-2 text-indigo-600" />}> 
          <GridList items={education} />
        </Section>

            <Section title="Awards and Honours">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Scholarships</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>Best PhD Student, IIT Madras (2016)</li>
                <li>Gold Medal for BTech Performance (2012)</li>
                <li>Pre-Doc Fellowship, IIT Madras (2016)</li>
                <li>MHRD Fellowship, IIT Madras (2012-2016)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Research Awards</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>Institute Research Award, IIT Madras</li>
                <li>Best Paper - 3rd CTRG, Kolakata (2015)</li>
                <li>Best Paper, IEEE ICITE (2016)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Travel Grants</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>ITS Grant, ANRF (2023)</li>
                <li>ITS Grant, SERB (2018)</li>
                <li>Student Travel Grant, IIT Madras (2014)</li>  
                <li>Student Travel Grant, IIT Madras (2016)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Memberships</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>IRC</li>
                <li>IEEE</li>
                <li>TRG</li>
              </ul>
            </div>
          </div>
        </Section>


            
      </div>
    </section>
  );
}

const Section = ({ title, icon, children }) => (
  <div className="mt-10 max-w-7xl mx-auto text-left">
    <h2 className="text-3xl font-bold text-gray-900 flex items-center">{icon} {title}</h2>
    <div className="mt-8">{children}</div>
  </div>
);

const GridList = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((item, index) => (
      <div key={index} className="bg-white rounded-lg p-6 shadow-sm flex items-center">
        <img src={item.logo} alt={`${item.institution} logo`} className="h-16 w-16 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.title || item.degree}</h3>
          {item.thesis && <p className="text-gray-500 text-sm">{item.thesis}</p>}
          <p className="text-gray-600">{item.institution || item.university}</p>
          <p className="mt-2 text-gray-500">{item.year}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Home;
