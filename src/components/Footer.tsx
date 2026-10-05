import { useMemo, useState } from 'react';
import ContentModal from './ContentModal';

type FooterModalKey = 'Privacy Policy' | 'Terms of Use' | 'Accessibility';

const footerModalContent: Record<FooterModalKey, { title: string; body: JSX.Element }> = {
  'Privacy Policy': {
    title: 'Privacy Policy',
    body: (
      <div className="space-y-5 text-sm text-white/72 leading-relaxed">
        <p>
          This platform is provided as a curated showcase of research, innovation, and
          technology projects.
        </p>
        <p>
          We may collect limited usage information to help improve the platform, such as
          general visit activity, page interactions, and technical performance data. If
          contact forms, submission forms, login functionality, or other interactive services
          are added in the future, the information submitted through those features may also be
          collected and used for operational, communication, administrative, and platform
          improvement purposes.
        </p>
        <p>
          We do not intentionally collect more personal information than is reasonably
          necessary for the operation of this platform.
        </p>
        <div className="space-y-3">
          <p>Information may be used for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-white/35">
            <li>operating and maintaining the platform</li>
            <li>improving user experience and platform performance</li>
            <li>reviewing project submissions or inquiries</li>
            <li>communicating with users when relevant</li>
            <li>maintaining platform security and integrity</li>
          </ul>
        </div>
        <p>
          Some technical information such as browser type, device type, referral source, and
          approximate usage behavior may be collected automatically through standard website
          technologies.
        </p>
        <p>
          Project content, media, and metadata displayed on this platform may be provided by
          affiliated institutions, research groups, project teams, collaborators, or platform
          administrators.
        </p>
        <p>
          Where third-party services are used in the future, such services may have their own
          privacy practices.
        </p>
        <p>
          Reasonable efforts are made to protect information handled through the platform, but
          no method of transmission or storage can be guaranteed to be completely secure.
        </p>
        <p>
          By continuing to use this platform, users acknowledge and accept this Privacy
          Policy.
        </p>
        <p>For privacy-related questions or concerns, please contact:</p>
        <a
          href="mailto:cairo@utm.my"
          className="text-white hover:text-accent-highlight transition-colors duration-200"
        >
          cairo@utm.my
        </a>
      </div>
    ),
  },
  'Terms of Use': {
    title: 'Terms of Use',
    body: (
      <div className="space-y-5 text-sm text-white/72 leading-relaxed">
        <p>
          Welcome to this project showcase platform. By accessing or using this platform, you
          agree to use it responsibly and in accordance with these Terms of Use.
        </p>
        <p>
          This platform is intended to present research, innovation, academic, industrial, and
          technology-related project information for viewing, reference, communication, and
          showcase purposes.
        </p>
        <div className="space-y-3">
          <p>Users agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-white/35">
            <li>misuse the platform</li>
            <li>attempt unauthorized access to any restricted functionality</li>
            <li>interfere with platform performance or security</li>
            <li>
              reproduce, copy, scrape, or redistribute platform content inappropriately
              without permission where applicable
            </li>
            <li>
              upload or submit misleading, harmful, unlawful, or infringing content if
              submission features are provided
            </li>
          </ul>
        </div>
        <p>
          All project names, descriptions, visuals, logos, media, and related materials remain
          the property of their respective owners, institutions, teams, collaborators, or
          rights holders unless stated otherwise.
        </p>
        <p>
          The information presented on this platform is provided in good faith for general
          informational and showcase purposes. While reasonable effort may be made to keep
          content accurate and current, no guarantee is made that all content is complete,
          accurate, or up to date at all times.
        </p>
        <p>
          This platform may evolve over time, and features, content, or access conditions may
          change without prior notice.
        </p>
        <p>
          The platform owner or administrator shall not be liable for losses or damages
          arising from the use of, or reliance on, the content or availability of this
          platform, to the extent permitted by applicable law.
        </p>
        <p>
          By continuing to use this platform, users acknowledge and accept these Terms of Use.
        </p>
        <p>For questions regarding use of this platform, please contact:</p>
        <a
          href="mailto:cairo@utm.my"
          className="text-white hover:text-accent-highlight transition-colors duration-200"
        >
          cairo@utm.my
        </a>
      </div>
    ),
  },
  Accessibility: {
    title: 'Accessibility Statement',
    body: (
      <div className="space-y-5 text-sm text-white/72 leading-relaxed">
        <p>
          We are committed to improving the accessibility, usability, and inclusiveness of this
          platform for all users.
        </p>
        <div className="space-y-3">
          <p>Reasonable efforts are made to support:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-white/35">
            <li>clear visual hierarchy</li>
            <li>readable text and interface elements</li>
            <li>responsive layouts across devices</li>
            <li>keyboard-friendly interaction where practical</li>
            <li>accessible navigation and content presentation</li>
          </ul>
        </div>
        <p>
          Because the platform may continue to evolve over time, some areas may still be
          undergoing accessibility improvement.
        </p>
        <p>
          We welcome feedback that helps improve accessibility for all users. If you experience
          difficulty accessing any part of the platform, encounter a usability issue, or need
          assistance, please contact us so that we can review and improve the experience.
        </p>
        <div className="space-y-2">
          <p>Accessibility contact:</p>
          <a
            href="mailto:cairo@utm.my"
            className="text-white hover:text-accent-highlight transition-colors duration-200"
          >
            cairo@utm.my
          </a>
        </div>
      </div>
    ),
  },
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState<FooterModalKey | null>(null);
  const modalContent = useMemo(
    () => (activeModal ? footerModalContent[activeModal] : null),
    [activeModal]
  );

  return (
    <>
      <footer id="contact" className="public-footer scroll-mt-28 bg-black/20 border-t border-accent/10 mt-24">
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-14">
          <div className="flex flex-col items-center text-center mb-2">
            <div className="flex flex-col items-center justify-center gap-[0.1rem] mb-4 bg-transparent">
              <span className="text-white/70 font-light text-sm tracking-[0.25em]">
                iShowCAIRO
              </span>
            </div>
            <p className="text-white/40 text-xs md:text-sm leading-relaxed whitespace-normal lg:whitespace-nowrap font-light">
              A curated showcase of research, innovation, and technology projects from leading
              academic institutions, labs, and industry partners.
            </p>
          </div>

          <div className="border-t border-accent/10 pt-8 flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-white/25 text-xs tracking-wide">
              (c) 2026 CAIRO, Thaqif and Zaenal Innovation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {(['Privacy Policy', 'Terms of Use', 'Accessibility'] as FooterModalKey[]).map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveModal(item)}
                    className="text-white/25 hover:text-accent-highlight text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:text-accent-highlight"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </footer>

      <ContentModal
        isOpen={modalContent !== null}
        title={modalContent?.title ?? ''}
        onClose={() => setActiveModal(null)}
      >
        {modalContent?.body}
      </ContentModal>
    </>
  );
}
