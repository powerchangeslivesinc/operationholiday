import React from "react";
import PartnerRegistrationLayout from "../../../layout/PartnerRegistrationLayout";

const PartnerServicesTable: React.FC = () => {
  const services = [
    {
      title: "Addiction & Recovery",
      desc: "On-site counselors and recovery organizations provide screenings, brief counseling, and referrals to treatment and peer-support programs. Families can leave with contacts for immediate intake and follow-up.",
    },
    {
      title: "Aging (Senior) Services",
      desc: "Senior resource teams assess needs around mobility, benefits, and social connection. They link older adults to nutrition programs, transportation, and ongoing case management.",
    },
    {
      title: "Career & Employment Training",
      desc: "Workforce partners review résumés, practice interviews, and enroll jobseekers in skills training/apprenticeships. Some employers schedule follow-up interviews on the spot.",
    },
    {
      title: "Childcare",
      desc: "Information on affordable childcare, vouchers, and early childhood programs. Families receive help applying for subsidies and locating licensed providers near home or work.",
    },
    {
      title: "Chiropractor",
      desc: "Quick posture and pain screenings with take-home guidance. Referrals given for community clinics that offer ongoing musculoskeletal care.",
    },
    {
      title: "Community Outreach & Client Advocacy",
      desc: "Nonprofits triage needs, navigate systems, and match families to services year-round. They help with paperwork, follow-up appointments, and advocacy.",
    },
    {
      title: "Credit/Financial Planning",
      desc: "Coaches provide budgeting help, credit report reviews, and debt reduction strategies. Families can enroll in multi-week financial education or one-on-one coaching.",
    },
    {
      title: "Dental Services",
      desc: "Hygienists and dentists conduct oral-health screenings and distribute kits. Urgent care referrals and sliding-scale clinic information are provided.",
    },
    {
      title: "Disability Services",
      desc: "Organizations advise on IEPs, benefits, accessibility, and assistive tech. They connect families to respite, therapies, and legal supports for disability rights.",
    },
    {
      title: "Domestic Violence Services",
      desc: "Confidential advocates offer safety planning, emergency shelter access, and legal resources. Survivors can receive crisis support and rapid referrals.",
    },
    {
      title: "Drop-In Centers",
      desc: "Street-to-services connectors explain local places for showers, mail, laundry, and casework. They orient guests to hours, rules, and how to access help safely.",
    },
    {
      title: "Education",
      desc: "Tutors and education nonprofits share literacy supports, after-school programs, and GED/college access resources. Sign-ups for ongoing tutoring are available.",
    },
    {
      title: "Employer (Job Fair)",
      desc: "Local employers discuss openings and hiring timelines. Some accept interest forms or schedule interviews for the following week.",
    },
    {
      title: "ESL (English as a Second Language)",
      desc: "Programs register adults for free/low-cost ESL classes and conversation groups. Placement assessments and class schedules are provided.",
    },
    {
      title: "Family Support",
      desc: "Parenting groups, kinship care supports, and family counseling resources. Providers offer warm handoffs to evidence-based programs.",
    },
    {
      title: "Financial Assistance",
      desc: "Screenings for emergency aid (rent, utilities, transportation, crisis grants). Families receive documentation checklists and application help.",
    },
    {
      title: "Food Pantries & Soup Kitchens",
      desc: "Pantry partners distribute boxes and register families for recurring pick-ups. Soup kitchens share locations and meal schedules.",
    },
    {
      title: "Health & Wellness",
      desc: "Fitness, nutrition, and preventive-care education tables. Families get simple plans for sleep, movement, and healthy meals on a budget.",
    },
    {
      title: "Healthcare Coverage",
      desc: "Navigators enroll families in Medicaid/NJ FamilyCare/Marketplace plans. They troubleshoot documentation and renewal barriers.",
    },
    {
      title: "HIV/AIDS Services",
      desc: "Testing referrals, prevention education, and linkage to ongoing care. Case managers explain medication access and supportive services.",
    },
    {
      title: "Homeownership Assistance",
      desc: "HUD-approved counselors advise on readiness, down-payment aid, and foreclosure prevention. Families can book follow-ups for full counseling.",
    },
    {
      title: "Housing Assistance",
      desc: "Providers assess homelessness risk and connect to shelter, rapid rehousing, or rental aid. Coordinated entry assessments are initiated on site.",
    },
    {
      title: "Hygiene Services",
      desc: "Distribution of hygiene and period-care kits with education on low-cost options. Referrals to showers/laundry access where available.",
    },
    {
      title: "Immigration Services",
      desc: "Legal clinics advise on status, work authorization, and family petitions. Trusted nonprofits schedule intakes and warn against scams.",
    },
    {
      title: "Legal Services",
      desc: "Pro bono teams triage civil legal needs (housing, benefits, family law, employment). Referrals made to ongoing representation where eligible.",
    },
    {
      title: "LGBTQIA+ Services",
      desc: "Affirming providers offer safe-space resources, support groups, and health information. Families learn about inclusive clinics and youth supports.",
    },
    {
      title: "Maternal Health",
      desc: "Prenatal/postpartum education, lactation support, and infant-care resources. Linkages to WIC, doulas, and home-visiting programs.",
    },
    {
      title: "Medicaid Insurance",
      desc: "On-site help confirming eligibility and completing Medicaid applications/renewals. Navigators schedule follow-ups until coverage is active.",
    },
    {
      title: "Medical Services",
      desc: "Basic vitals, BP/glucose checks, and health education. Abnormal results trigger referrals to clinics and primary-care providers.",
    },
    {
      title: "Medication/Prescription Assistance",
      desc: "Guidance on low-cost pharmacy programs and manufacturer assistance. Staff help families apply and transfer prescriptions if needed.",
    },
    {
      title: "Meditation",
      desc: "Short guided sessions teach breathing and grounding. Families leave with simple practices to reduce anxiety at home.",
    },
    {
      title: "Mental Health",
      desc: "Counselors offer screenings, crisis de-escalation, and referrals to therapy. Warm handoffs are made to community mental-health centers.",
    },
    {
      title: "Optometry (Vision) Services",
      desc: "Vision screenings with vouchers or referrals for eyeglasses. Partners help book low-cost eye exams.",
    },
    {
      title: "Pet Therapy",
      desc: "Certified therapy animals provide comfort and reduce stress for kids and seniors. Handlers share info on local therapy-animal programs.",
    },
    {
      title: "Prayer (Christianity)",
      desc: "Optional spiritual care and encouragement for those who request it. Chaplains respect all beliefs and do not proselytize.",
    },
    {
      title: "Re-Entry Services",
      desc: "Support for people returning from incarceration: IDs, jobs, housing, mentoring. Case managers coordinate with probation/parole as needed.",
    },
    {
      title: "Security Deposit/Rent Assistance",
      desc: "Providers screen for arrears and eviction risk; help with applications for back rent and deposits. Financial coaching offered alongside relief.",
    },
    {
      title: "Shelters (NJ)",
      desc: "Coordinated entry to emergency shelters and domestic-violence safe housing. Staff outline rights, rules, and transportation options.",
    },
    {
      title: "SNAP (Foodstamps)",
      desc: "On-site prescreening and application help for SNAP/WIC. Families get documentation lists and renewal reminders.",
    },
    {
      title: "Social Services",
      desc: "County/state agency liaisons connect guests to TANF, SSI/SSDI, and other benefits. They schedule appointments and explain timelines.",
    },
    {
      title: "Street Outreach",
      desc: "Teams engage unhoused neighbors, offering survival kits and casework. They initiate IDs, healthcare, and shelter referrals.",
    },
    {
      title: "Thrift Shop",
      desc: "Free/low-cost clothing and household goods vouchers. Emergency winter gear distributed as available.",
    },
    {
      title: "Transportation Services",
      desc: "Bus passes, ride credits, or paratransit sign-ups to remove travel barriers. Volunteers assist with trip planning.",
    },
    {
      title: "Utility Assistance",
      desc: "Screening and application help for energy/water assistance programs. Providers coordinate with landlords and utilities to prevent shutoffs.",
    },
    {
      title: "Vaccines",
      desc: "Immunization partners provide no-cost vaccines and education. Consent and records support offered for children and adults.",
    },
    {
      title: "Veterans Affairs Services",
      desc: "VA navigators complete benefits screenings and connect vets to health, housing, and employment supports. Military families receive tailored referrals.",
    },
    {
      title: "Youth Services",
      desc: "Mentoring, after-school programs, and leadership development. Providers enroll youth on site and coordinate with schools.",
    },
  ];

  return (
    <PartnerRegistrationLayout>
      <div className="max-w-7xl mx-auto my-10 bg-white rounded-2xl shadow-xl overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-blue-900 py-6 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-300">
          Partner Services Directory
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-700 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-3 font-bold border-b border-gray-300 w-1/3 ticket-title">
                  Partner Service Type
                </th>
                <th className="px-6 py-3 font-bold border-b border-gray-300 ticket-des">
                  Description of Service
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {services.map((s, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition duration-150`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 ticket-title ">
                    {s.title}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-b border-gray-200 ticket-des">
                    {s.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PartnerRegistrationLayout>
  );
};

export default PartnerServicesTable;