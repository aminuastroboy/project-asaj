"use client";

import { useMemo, useState } from "react";

export default function ASAJCampaignWebsite() {
  const priorities = [
    {
      title: "Youth Empowerment",
      text: "Expanding opportunities through skills development, mentorship, entrepreneurship support, and practical pathways to employment.",
    },
    {
      title: "Education & Skills",
      text: "Supporting stronger schools, digital learning, and future-ready training for students and young professionals across the constituency.",
    },
    {
      title: "Women & Community Development",
      text: "Promoting inclusive participation, economic support, and practical community-centered programs that improve everyday life.",
    },
    {
      title: "Technology & Innovation",
      text: "Applying technology-driven solutions to improve communication, accountability, access to opportunities, and better representation.",
    },
  ];

  const updates = [
    {
      title: "Declaration of Intent for 2027",
      date: "13 March 2026",
      text: "Hon. Abdulkareem Sabo Abdullahi formally declared his intention to contest for the House of Representatives for Yola North, Yola South, and Girei Federal Constituency.",
    },
    {
      title: "Community-Centered Campaign Vision",
      date: "Campaign Update",
      text: "The campaign focuses on service, development, inclusive representation, and practical solutions for the constituency.",
    },
    {
      title: "Technology for Problem Solving",
      date: "Profile Highlight",
      text: "With a background in Information Technology and Communication, ASAJ believes technology should help solve real community challenges.",
    },
    {
      title: "Listening Tour Across Y2G",
      date: "Field Update",
      text: "The campaign is strengthening engagement with elders, youths, women, and grassroots stakeholders across the constituency.",
    },
    {
      title: "Volunteer Expansion Drive",
      date: "Mobilization",
      text: "Ward and polling unit volunteers are being mobilized to deepen outreach, registration, and community participation.",
    },
    {
      title: "Service and Representation Agenda",
      date: "Campaign Message",
      text: "ASAJ continues to present a people-first agenda focused on empowerment, infrastructure, education, and innovation.",
    },
  ];

  const stats = [
    { label: "Federal Constituency", value: "Y2G" },
    { label: "Focus", value: "Service" },
    { label: "Party", value: "APC" },
    { label: "Vision", value: "Progress" },
  ];

  const manifestoPillars = [
    {
      title: "Youth Empowerment",
      text: "Promoting skills, jobs, entrepreneurship, mentorship, and pathways that prepare young people for the future.",
    },
    {
      title: "Education & Skills Development",
      text: "Supporting learning, digital literacy, school improvement, and practical training across communities.",
    },
    {
      title: "Women Empowerment",
      text: "Encouraging inclusion, economic support, leadership opportunities, and stronger community participation for women.",
    },
    {
      title: "Infrastructure Development",
      text: "Advocating for roads, water, electricity, and community projects that improve daily life.",
    },
    {
      title: "Technology & Innovation",
      text: "Using technology to improve communication, accountability, opportunities, and public problem solving.",
    },
    {
      title: "Accessible Representation",
      text: "Ensuring that leadership remains close to the people, listens carefully, and responds with action.",
    },
  ];

  const testimonials = [
    {
      name: "Community Elder",
      text: "He is known as a calm, respectful, and dependable person who stays connected to the people.",
    },
    {
      name: "Youth Voice",
      text: "His technology background and service experience make him someone many young people can relate to and trust.",
    },
    {
      name: "Grassroots Supporter",
      text: "He is a man for everyone, always willing to listen, help, and follow up on the well-being of others.",
    },
  ];

  const gallery = [
    "/asaj-hero.jpg",
    "/asaj-profile.jpg",
    "/asaj-hero.jpg",
    "/asaj-profile.jpg",
    "/asaj-hero.jpg",
    "/asaj-profile.jpg",
  ];

  const faqItems = [
    {
      q: "What office is ASAJ contesting for?",
      a: "He is contesting for the House of Representatives to represent Yola North, Yola South, and Girei Federal Constituency.",
    },
    {
      q: "What is the campaign message?",
      a: "The campaign is built around service, development, inclusive representation, and practical solutions for the people.",
    },
    {
      q: "How can I support the campaign?",
      a: "You can volunteer, help with mobilization, share campaign updates, and join community engagement activities.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ward: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const formspreeEndpoint = "https://formspree.io/f/xkoqvode";

  const volunteerSummary = useMemo(() => {
    return `Volunteer Interest%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0AWard/LGA: ${encodeURIComponent(formData.ward)}%0ARole: ${encodeURIComponent(
      formData.role
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;
  }, [formData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.phone.trim()) next.phone = "Phone number is required";
    if (!formData.ward.trim()) next.ward = "Ward / LGA is required";
    if (!formData.role.trim()) next.role = "Please select a role";
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          candidate: "Hon. Abdulkareem Sabo Abdullahi (ASAJ)",
          office: "House of Representatives",
          constituency: "Yola North | Yola South | Girei Federal Constituency",
          ...formData,
        }),
      });

      if (!response.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      alert("Submission failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/apc-logo.png"
              alt="APC logo"
              className="h-14 w-14 rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
            />
            <div>
              <div className="text-xl font-bold tracking-tight">ASAJ 2027</div>
              <div className="text-sm text-slate-600">House of Representatives Campaign</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#priorities" className="hover:text-black">Agenda</a>
            <a href="#manifesto" className="hover:text-black">Manifesto</a>
            <a href="#updates" className="hover:text-black">Updates</a>
            <a href="#profile" className="hover:text-black">Profile</a>
            <a href="#gallery" className="hover:text-black">Gallery</a>
            <a href="#testimonials" className="hover:text-black">Voices</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
            <a href="#volunteer" className="hover:text-black">Volunteer</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-sky-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90">
                APC Aspirant • House of Representatives 2027
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Hon. Abdulkareem Sabo Abdullahi <span className="text-sky-200">(ASAJ)</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                A community-focused leader, legislative professional, and technology-minded problem solver for Yola North, Yola South, and Girei Federal Constituency.
              </p>
              <div className="mt-4 text-2xl font-semibold text-white">Together, We Move Y2G Forward</div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#volunteer" className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700">
                  Join the Campaign
                </a>
                <a href="#priorities" className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
                  View Agenda
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="mt-1 text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl">
                <img
                  src="/asaj-hero.jpg"
                  alt="Hon. Abdulkareem Sabo Abdullahi"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">About the Candidate</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A leader shaped by service, community trust, and practical experience</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Hon. Abdulkareem Sabo Abdullahi is respected as a man of the people — dependable, accessible, and committed to helping others. He currently serves as Senior Legislative Aide to the Deputy Speaker of the Federal House of Representatives and brings practical legislative experience, community connection, and a development-driven mindset to public service.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  He is a graduate of Information Technology and Communication from Informatics Academy, Kazaure, and believes strongly in using technology to solve real community problems, support young people, improve communication, and strengthen accountability in leadership.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick Profile</div>
                <div className="mt-6 space-y-4 text-slate-700">
                  <div><div className="text-sm text-slate-500">Full Name</div><div className="font-semibold">Hon. Abdulkareem Sabo Abdullahi (ASAJ)</div></div>
                  <div><div className="text-sm text-slate-500">Office Sought</div><div className="font-semibold">House of Representatives</div></div>
                  <div><div className="text-sm text-slate-500">Constituency</div><div className="font-semibold">Yola North | Yola South | Girei Federal Constituency</div></div>
                  <div><div className="text-sm text-slate-500">Party</div><div className="font-semibold">All Progressives Congress (APC)</div></div>
                  <div><div className="text-sm text-slate-500">Current Role</div><div className="font-semibold">Senior Legislative Aide to the Deputy Speaker</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="priorities" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Development Agenda</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Focused priorities for Yola North, Yola South, and Girei</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The campaign is built around practical representation, people-centered development, and opportunities that improve daily life across the constituency.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {priorities.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="manifesto" className="bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Campaign Manifesto</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A practical people-first plan for progress</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This campaign stands for service, accountability, development, empowerment, and stronger representation that reflects the real needs of the constituency.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {manifestoPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-bold tracking-tight">{pillar.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Campaign Updates</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Latest from the campaign</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {updates.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="text-sm font-semibold text-red-600">{item.date}</div>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img src="/asaj-profile.jpg" alt="ASAJ profile" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Why ASAJ</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Legislative experience, community trust, and a problem-solving mindset</h2>
              <ul className="mt-8 space-y-4 text-lg leading-8 text-slate-700">
                <li>• Experienced in legislative processes, public policy, and constituency-focused representation.</li>
                <li>• Widely respected for helping people in the community and staying connected to families, friends, and stakeholders.</li>
                <li>• Brings a technology background that supports practical, modern, and accountable solutions.</li>
                <li>• Believes leadership must be about service, development, and representation that truly reflects the people.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Media Gallery</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Campaign visuals and public moments</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {gallery.map((src, index) => (
                <div key={`${src}-${index}`} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                  <img src={src} alt={`Campaign gallery ${index + 1}`} className="h-72 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Community Voices</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">What people value about ASAJ</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-lg font-bold">{item.name}</div>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Frequently Asked Questions</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Quick answers for supporters and visitors</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="text-lg font-bold">{item.q}</div>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Volunteer</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Join the campaign movement</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Support the campaign as a mobilizer, ward volunteer, media supporter, youth team member, or community organizer.
                </p>
                <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="font-semibold">Suggested roles</div>
                  <ul className="mt-4 space-y-3 text-slate-600">
                    <li>Polling Unit Mobilizer</li>
                    <li>Ward Team Volunteer</li>
                    <li>Youth Outreach Support</li>
                    <li>Women Mobilization Support</li>
                    <li>Media & Digital Volunteer</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-xl font-bold">Volunteer Sign-Up Form</div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                    <div>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                      {errors.name ? <div className="mt-1 text-sm text-red-600">{errors.name}</div> : null}
                    </div>
                    <div>
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                      {errors.phone ? <div className="mt-1 text-sm text-red-600">{errors.phone}</div> : null}
                    </div>
                    <div>
                      <input name="ward" value={formData.ward} onChange={handleChange} placeholder="Ward / LGA" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                      {errors.ward ? <div className="mt-1 text-sm text-red-600">{errors.ward}</div> : null}
                    </div>
                    <div>
                      <select name="role" value={formData.role} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3">
                        <option value="">Select volunteer role</option>
                        <option>Mobilizer</option>
                        <option>Ward Team</option>
                        <option>Youth Team</option>
                        <option>Women Team</option>
                        <option>Media Support</option>
                      </select>
                      {errors.role ? <div className="mt-1 text-sm text-red-600">{errors.role}</div> : null}
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Short note or message" className="min-h-[130px] rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                    <button className="rounded-2xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800">
                      Submit Interest
                    </button>
                  </form>
                ) : (
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                      Your interest has been submitted successfully.
                    </div>
                    <div className="grid gap-3">
                      <a href={`https://wa.me/2347039861004?text=${volunteerSummary}`} className="rounded-2xl bg-green-600 px-5 py-3 text-center font-semibold text-white hover:bg-green-700">
                        Send via WhatsApp
                      </a>
                      <a href={`mailto:asajjimeta05@gmail.com?subject=Volunteer Interest - ASAJ&body=${volunteerSummary}`} className="rounded-2xl border border-slate-300 px-5 py-3 text-center font-semibold hover:bg-white">
                        Send via Email
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", phone: "", ward: "", role: "", message: "" });
                        }}
                        className="rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
                      >
                        Submit Another Response
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Get in touch with the campaign</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                For enquiries, media communication, volunteer follow-up, or campaign coordination, use the official contact details below.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="space-y-5 text-sm">
                <div><div className="text-slate-400">Office</div><div className="mt-1 text-base">National Assembly Complex, Three Arm Zone, Abuja, Nigeria</div></div>
                <div><div className="text-slate-400">Email</div><div className="mt-1 text-base">asajjimeta05@gmail.com</div></div>
                <div><div className="text-slate-400">Phone</div><div className="mt-1 text-base">07039861004</div></div>
                <div><div className="text-slate-400">Campaign Message</div><div className="mt-1 text-base">Service • Development • Representation</div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
