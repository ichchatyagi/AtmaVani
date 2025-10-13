import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import P1 from '../assets/Program/p1.jpg'
import P2 from '../assets/Program/p2.jpg'
import P3 from '../assets/Program/p3.jpg'
import P4 from '../assets/Program/p4.jpg'
import P5 from '../assets/Program/p5.jpg'

const FPC = () => {
  const programs = [
    {
      id: 1,
      title: "Bhajans",
      description: "Bhajans are the music of the soul— filling the heart with peace, positivity, and divine love.",
      imageUrl: P1,
      schedule: "Daily at 6:00 AM",
      duration: "30 minutes",
      upcomingDates: ["2026-07-01", "2026-07-02", "2026-07-03"]
    },
    {
      id: 2,
      title: "Mantras",
      description: "Mantras are powerful vibrations that calm the mind, heal the soul, and attract positive energy.",
      imageUrl: P2,
      schedule: "Every Friday at 7:00 PM",
      duration: "1 hour",
      upcomingDates: ["2026-07-05", "2026-07-12", "2026-07-19"]
    },
    {
      id: 3,
      title: "Devotional Music Video",
      description: "Devotional music videos fill the heart with peace, faith, and divine love.",
      imageUrl: P3,
      schedule: "Sundays at 5:00 PM",
      duration: "1 hour",
      upcomingDates: ["2026-07-07", "2026-07-14", "2026-07-21"]
    },
    {
      id: 4,
      title: "Pravachans",
      description: "Pravachans are divine discourses that guide us towards truth, devotion, and inner peace.",
      imageUrl: P4,
      schedule: "On festival days",
      duration: "Varies",
      upcomingDates: ["2026-08-15 (Raksha Bandhan)", "2026-10-02 (Gandhi Jayanti)", "2026-11-01 (Diwali)"]
    },
    {
      id: 5,
      title: "Live Kathas",
      description: "Live Kathas fill life with peace, positivity, and divine wisdom.",
      imageUrl: P5,
      schedule: "Mon, Wed, Fri at 6:30 AM",
      duration: "45 minutes",
      upcomingDates: ["2026-07-01", "2026-07-03", "2026-07-05"]
    }
  ]

  return (
    <>
      <Navbar />

      {/* Page Container */}
      <div className="bg-base-200 py-10 px-4 sm:px-6 lg:px-10">
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-primary">
          Program Schedule (FPC)
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map(program => (
            <div key={program.id} className="card bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
              <figure>
                <img
                  className="h-56 w-full object-cover"
                  src={program.imageUrl}
                  alt={program.title}
                />
              </figure>

              <div className="card-body p-5 text-gray-800">
                <h2 className="card-title text-2xl font-semibold text-primary mb-2">
                  {program.title}
                </h2>

                <p className="text-gray-600 mb-3">{program.description}</p>
                <p className="text-sm mb-1">
                  <strong>📅 Schedule:</strong> {program.schedule}
                </p>
                <p className="text-sm mb-1">
                  <strong>⏰ Duration:</strong> {program.duration}
                </p>
                <p className="text-sm">
                  <strong>🗓️ Upcoming Dates:</strong>
                  <ul className="list-disc list-inside mt-1">
                    {program.upcomingDates.map((date, index) => (
                      <li key={index}>{date}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default FPC
