import { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import "./FAQ.scss";
const questions = [
  "What is Connecting Hearts?",
  "Who can use Connecting Hearts?",
  "Is Connecting Hearts open to everyone?",
  "How do I register on Connecting Hearts?",
  "What documents are required for profile verification?",
  "How long does profile verification take?",
  "Why is my profile still under verification?",
  "Can I edit my profile after registration?",
  "What should I do if I am unable to edit some details?",
  "Can I register my son or daughter’s profile?",
  "Can I register from another country?",
  "Why are there fewer profiles from some countries?",
  "Why can I not find a country, state, city, or location while registering?",
  "Is my mobile number visible to others?",
  "How do contact views work?",
  "How many profiles can I view with a membership?",
  "Why do contact views have a limit?",
  "Can I renew my membership before it expires?",
  "What happens if I do not find a suitable match?",
  "Why am I seeing only a few profiles?",
  "Can I report a suspicious profile?",
  "What happens if I enter wrong details by mistake?",
  "What should I do if the app is not opening?",
  "Why is the app showing an error or not loading profile photos?",
  "What should I do if OTP is not received?",
  "Can I reset my password if I forget it?",
  "How do I know how many profile visitors I have?",
  "Can I search by profession, mother tongue, or location?",
  "Can I use the app without creating a full profile?",
  "Can I subscribe again after my plan ends?",
  "Can I rejoin after deleting my profile?",
  "Are all profiles on Connecting Hearts verified?",
  "Is Connecting Hearts free from fake profiles?",
  "What if I see a profile that seems settled or no longer relevant?",
  "Why do some profiles still appear even after they are married or settled?",
  "What should I do if I receive a call or message from an unofficial source?",
  "Can I trust Instagram pages or WhatsApp groups claiming to represent Connecting Hearts?",
  "How do I know I am using the official platform?",
  "What if I want to book dates for marriage in Kanha Shantivanam?",
  "Do you offer free membership?",
  "How can I donate to Heartfulness?",
  "How can I contact support?",
  "What details should I keep ready before contacting support?",
  "Why is my profile showing “Activate Your Plan” or “Membership Not Active”?",
  "Can I request profile deletion if I am already married?",
  "Can I search only for India or also for other countries?",
  "Can family members help manage the profile?",
  "What if I have a suggestion for improving the app?",
  "Are there any official communication channels?",
  "Why should I choose Connecting Hearts?",
];

const answers = [
  "Connecting Hearts is a matrimonial platform created especially for Heartfulness/SRCM abhyasis who are sincerely looking for a spiritually aligned life partner. Our purpose is to provide a trusted and respectful space for genuine seekers to connect. It is a third party app initiated by fellow Heartfulness abhyasis.",

  "Connecting Hearts is meant only for Heartfulness/SRCM abhyasis. Users are required to submit their Heartfulness/SRCM ID and Preceptor details during registration for verification purposes.",

  "No. The platform is intended only for eligible Heartfulness/SRCM abhyasis and their families. This helps us maintain authenticity, trust, and the spiritual nature of the community.",

  "You can register by downloading the app and creating your profile with the required details. After completing your profile, it will be placed under verification.",

  "Generally, a Heartfulness/SRCM ID card and/or Preceptor details may be required for verification. This is mandatory because Connecting Hearts is exclusively for Heartfulness abhyasis.",

  "Profile verification is usually completed within 24 hours, provided all required details and documents are uploaded correctly.",

  "Your profile may still be under verification if some details are incomplete or if the uploaded ID card image is unclear or incorrect. If your profile is not verified even after 24 hours, please contact support.",

  "Yes. You can edit your profile details after logging in. However, some fields such as name and gender may remain non-editable for verification and system-related reasons.",

  "If you are unable to edit any important details, please contact our support team for assistance.",

  "Yes. Parents or guardians may create profiles for their children, provided all details are accurate and the person is eligible according to the platform’s verification process.",

  "Yes. We receive interest from abhyasis living in India as well as abroad. If profiles from your preferred country are currently limited, please keep your profile updated and continue checking as more users join the platform.",

  "Profile availability may vary by region depending on the number of registered abhyasis. We continue to expand the platform and regularly update profiles.",

  "If a city or location is missing, it may not yet be available in our database. Please share the location details with us, and we will review and update them if required.",

  "Depending on the platform functionality and membership settings, contact visibility may vary. Our goal is to maintain a balance between accessibility and privacy.",

  "When a profile is unlocked, a Heartcoin is used to view the member’s contact details. The number of Heartcoins available depends on the selected membership plan.",

  "Each membership plan has its own limit. Some plans may allow a certain number of contact views, such as 50, 100, or 150, along with validity duration and additional benefits.",

  "The limit is maintained to ensure fairness, authenticity, and meaningful use of the platform. It helps members explore profiles thoughtfully and supports balanced matchmaking.",

  "This depends on the membership policy currently active on the platform. In most cases, renewal or a fresh membership may be discussed once the existing plan cycle is completed.",

  "You may continue updating your profile and exploring profiles within your membership period. Our support team also works continuously to improve the quality and relevance of profiles.",

  "The number of profiles shown may depend on your search preferences, filters, profile completion, verification status, and the availability of matching profiles. We recommend keeping your profile updated for better results.",

  "Yes. If you notice any suspicious, fake, or inappropriate profile, please report it immediately through the app or contact our support team. We take such concerns seriously and review them carefully.",

  "If you enter incorrect details, please update them as soon as possible. Some important fields may not be editable after verification. In such cases, please contact our support team for assistance.",

  "Please ensure that you are using the official app version and have a stable internet connection. If the issue continues, contact support for guidance. Sometimes technical updates may be in progress, and you may be asked to try again later.",

  "This may happen due to technical reasons, weak internet connectivity, incomplete profile uploads, or temporary server-side issues. If the issue continues, please share a screenshot along with the profile ID for further assistance.",

  "If you do not receive the OTP on your mobile number, please wait for some time and try again. If the issue continues, please contact support so we can check for any temporary system issue.",

  "Yes. You can use the “Forgot Password” option to reset your password. You may also change your password anytime after logging in through your account settings.",

  "You can check the “Profile Visitors” section to see how many users have visited your profile. This feature is available for all users.",

  "Yes. You can search and filter profiles based on profession, mother tongue, location, age, and other preferences to help you find a suitable match.",

  "No. You must complete all mandatory profile details before you can properly use the application.",

  "Yes. Once your current membership plan ends, you may subscribe again according to the membership options available at that time.",

  "Yes. If you wish to return later, you may create a new profile again, subject to the current registration and verification process.",

  "Yes. Profiles on Connecting Hearts are verified before they are made active on the platform. We request users to submit complete and correct details to help maintain authenticity for all members.",

  "We make every effort to maintain authenticity and properly verify profiles. However, if any suspicious or unauthorized profile is noticed, we encourage users to inform us immediately.",

  "Please inform support if you notice such a profile. Our team regularly reviews and contacts users to keep the platform updated.",

  "Sometimes users do not immediately update or delete their profiles. Such profiles may remain visible until they are manually reviewed and removed.",

  "Please do not trust it immediately. Kindly inform our support team so we can verify whether it is genuine or not.",

  "Please trust only the official channels shared by us. Many unauthorized pages or groups may appear similar but are not officially connected to Connecting Hearts.",

  "Website: www.connectingheart.in\nAndroid App: https://play.google.com/store/apps/details?id=com.connectinghearts\nCall/WhatsApp: +91 9452613159\nEmail: connecting.hearts@heartfulness.org\n\nPlease avoid unofficial websites, pages, or contact numbers falsely claiming to represent Connecting Hearts.",

  "For marriage date availability or booking at Kanha Shantivanam, please contact the official Kanha/Shantivanam administration directly. Connecting Hearts is a separate matrimonial platform and does not manage venue bookings.",

  "In certain cases, support options may be available for users facing financial difficulty, depending on the current policy and availability.",

  "You can use the “Donate Now” option available in the app, which will redirect you directly to the official Heartfulness website for donations.",

  "You can contact our official support team through call, WhatsApp, or email. We recommend using only the official contact details listed on the website or app.",

  "Please keep your registered mobile number, profile ID, and a screenshot of the issue ready. This helps us assist you more quickly.",

  "This usually means your membership has not yet been activated or there may be a temporary technical issue. Please contact support so we can check your membership status.",

  "Yes. If you are already married or no longer require the profile, please inform us and we will assist you with profile deletion.",

  "You may search according to your profile preferences and the availability of users. We are also steadily expanding the platform for overseas seekers.",

  "Yes. In many cases, parents or family members help create or manage profiles. We request that all details remain accurate and updated.",

  "We welcome your suggestions with gratitude. User feedback helps us improve the app, resolve issues, and provide a better experience for the community.",

  "Yes. For all communication related to Connecting Hearts, please use only our official channels:\n\nWebsite: www.connectingheart.in\nAndroid App: https://play.google.com/store/apps/details?id=com.connectinghearts\nCall/WhatsApp: +91 9452613159\nEmail: connecting.hearts@heartfulness.org\n\nFor your safety, please do not rely on unofficial websites, pages, numbers, or messages claiming to represent Connecting Hearts.",

  "Connecting Hearts is designed for sincere Heartfulness abhyasis seeking a trustworthy, spiritually aligned, and respectful matrimonial experience. We focus on authenticity, simplicity, and community support.",
];
export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq-intro">
          <span className="eyebrow">HELP CENTER</span>
          <h2 className="title">Frequently Asked Questions</h2>
          <p>Everything you need to know about Connecting Hearts.</p>
        </div>
        <div className="faq-list">
          {questions.map((q, i) => (
            <div className={`faq-item ${i === active ? "active" : ""}`} key={q}>
              <button onClick={() => setActive(i === active ? -1 : i)}>
                {q}
                <ChevronDown size={18} />
              </button>
              {i === active && <p>{answers[i]}</p>}
            </div>
          ))}
        </div>
        <div className="help">
          <div>
            <h3>Still have questions?</h3>
            <p>We're always here to help you on your journey.</p>
          </div>
          <a href="mailto:connecting.hearts@heartfulness.org ">
            <Mail size={17} /> Email Us
          </a>
          <a href="https://wa.me/919452613159" target="_blank">
            <Phone size={17} /> Call / WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
